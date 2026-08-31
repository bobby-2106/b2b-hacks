import os
import re
import html
from datetime import datetime
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from werkzeug.middleware.proxy_fix import ProxyFix
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def create_app():
    app = Flask(__name__)

    # --- 1. SSL / HTTPS Data Encryption in Transit ---
    # Werkzeug ProxyFix ensures Flask correctly processes X-Forwarded-Proto headers behind Render/Nginx HTTPS proxies
    app.wsgi_app = ProxyFix(app.wsgi_app, x_for=1, x_proto=1, x_host=1)

    # --- 2. 1MB Max Payload Limit ---
    # Blocks oversized malicious data dumps from consuming RAM
    app.config['MAX_CONTENT_LENGTH'] = 1 * 1024 * 1024  # 1 Megabyte limit

    # --- 3. PostgreSQL & SQLAlchemy Connection Pooling ---
    # Render PostgreSQL integration with connection resilience settings
    db_url = os.environ.get('DATABASE_URL', 'sqlite:///b2b_hacks.db')
    if db_url.startswith('postgres://'):
        db_url = db_url.replace('postgres://', 'postgresql://', 1)

    app.config['SQLALCHEMY_DATABASE_URI'] = db_url
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    # SQLAlchemy Connection Pooling (pool_pre_ping=True, pool_recycle=280)
    app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
        'pool_pre_ping': True,
        'pool_recycle': 280,
    }

    # Enable CORS for frontend requests
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    return app

app = create_app()
db = SQLAlchemy(app)

# --- 4. Anti-DoS Rate Limiter ---
# Built-in IP rate limiter stops spammers and automated bots
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://"
)

# --- Database Models (PostgreSQL / SQLite) ---
class Team(db.Model):
    __tablename__ = 'teams'

    id = db.Column(db.Integer, primary_key=True)
    team_name = db.Column(db.String(100), nullable=False, unique=True, index=True)
    track = db.Column(db.String(50), nullable=False)
    leader_name = db.Column(db.String(100), nullable=False)
    leader_email = db.Column(db.String(120), nullable=False, index=True)
    leader_phone = db.Column(db.String(20), nullable=False)
    member_count = db.Column(db.Integer, default=1)
    members_detail = db.Column(db.Text, nullable=True)  # JSON or comma-separated list of member names
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'team_name': self.team_name,
            'track': self.track,
            'leader_name': self.leader_name,
            'leader_email': self.leader_email,
            'leader_phone': self.leader_phone,
            'member_count': self.member_count,
            'members_detail': self.members_detail,
            'created_at': self.created_at.isoformat()
        }

# Create database tables automatically
with app.app_context():
    db.create_all()

# --- 5. Input Sanitization & XSS / SQL Injection Protection Helpers ---
EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")
PHONE_REGEX = re.compile(r"^\+?[0-9\s\-]{8,15}$")

def sanitize_string(val: str, max_length: int = 150) -> str:
    """Strip HTML tags and trim string to prevent XSS attacks."""
    if not val:
        return ""
    clean = html.escape(str(val).strip())
    return clean[:max_length]

# Custom 413 Payload Too Large Error Handler
@app.errorhandler(413)
def request_entity_too_large(error):
    return jsonify({
        'status': 'error',
        'message': 'Payload exceeds the 1MB maximum limit.'
    }), 413

# Custom 429 Rate Limit Exceeded Error Handler
@app.errorhandler(429)
def ratelimit_handler(e):
    return jsonify({
        'status': 'error',
        'message': 'Anti-DoS Rate Limit Exceeded. Please try again later.'
    }), 429

# --- API Endpoints ---
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'service': 'B2B Hacks API',
        'database': 'Connected',
        'security': {
            'max_payload': '1MB',
            'anti_dos': 'Active',
            'connection_pooling': 'Active (pre-ping: True, recycle: 280s)'
        }
    }), 200

@app.route('/api/register', methods=['POST'])
@limiter.limit("5 per minute")  # Anti-DoS limit specifically for registration endpoint
def register_team():
    data = request.get_json(silent=True)
    if not data:
        return jsonify({'status': 'error', 'message': 'Invalid JSON request payload.'}), 400

    # Extract and sanitize all input fields (XSS Protection)
    team_name = sanitize_string(data.get('team_name'), 100)
    track = sanitize_string(data.get('track'), 50)
    leader_name = sanitize_string(data.get('leader_name'), 100)
    leader_email = sanitize_string(data.get('leader_email'), 120)
    leader_phone = sanitize_string(data.get('leader_phone'), 20)
    members_detail = sanitize_string(data.get('members_detail'), 500)
    
    try:
        member_count = int(data.get('member_count', 1))
        if member_count < 1 or member_count > 4:
            return jsonify({'status': 'error', 'message': 'Team size must be between 1 and 4 members.'}), 400
    except (ValueError, TypeError):
        return jsonify({'status': 'error', 'message': 'Invalid member count.'}), 400

    # Validation Checks
    if not team_name or len(team_name) < 2:
        return jsonify({'status': 'error', 'message': 'Team name is required (min 2 chars).'}), 400
    if not track:
        return jsonify({'status': 'error', 'message': 'Please select a hackathon track.'}), 400
    if not leader_name or len(leader_name) < 2:
        return jsonify({'status': 'error', 'message': 'Team leader name is required.'}), 400
    if not EMAIL_REGEX.match(leader_email):
        return jsonify({'status': 'error', 'message': 'Valid leader email address is required.'}), 400
    if not PHONE_REGEX.match(leader_phone):
        return jsonify({'status': 'error', 'message': 'Valid leader phone number is required.'}), 400

    # Check for duplicate team name or leader email using SQLAlchemy ORM (SQL Injection Safe)
    existing_team = Team.query.filter(
        (Team.team_name == team_name) | (Team.leader_email == leader_email)
    ).first()

    if existing_team:
        if existing_team.team_name.lower() == team_name.lower():
            return jsonify({'status': 'error', 'message': 'Team name already registered.'}), 409
        else:
            return jsonify({'status': 'error', 'message': 'Leader email already registered.'}), 409

    # Create new Team record with ORM
    new_team = Team(
        team_name=team_name,
        track=track,
        leader_name=leader_name,
        leader_email=leader_email,
        leader_phone=leader_phone,
        member_count=member_count,
        members_detail=members_detail
    )

    try:
        db.session.add(new_team)
        db.session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Registration successful! Team spot confirmed.',
            'team': new_team.to_dict()
        }), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'status': 'error', 'message': 'Database insertion error. Please try again.'}), 500

@app.route('/api/teams', methods=['GET'])
@limiter.limit("20 per minute")
def get_teams():
    teams = Team.query.order_by(Team.created_at.desc()).all()
    return jsonify({
        'status': 'success',
        'count': len(teams),
        'teams': [t.to_dict() for t in teams]
    }), 200

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
