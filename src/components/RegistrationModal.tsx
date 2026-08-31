import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    team_name: '',
    track: 'Agentic AI',
    leader_name: '',
    leader_email: '',
    leader_phone: '',
    member_count: '1',
    members_detail: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status) setStatus(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Dynamic API URL for development/production
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/register';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          member_count: parseInt(formData.member_count, 10)
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Registration failed.');
      }

      setStatus({
        type: 'success',
        message: result.message || 'Registration successful! See you at B2B HACKS.'
      });

      // Clear form on success
      setFormData({
        team_name: '',
        track: 'Agentic AI',
        leader_name: '',
        leader_email: '',
        leader_phone: '',
        member_count: '1',
        members_detail: ''
      });

    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err.message || 'Network error. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content pixel-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3><span className="text-red">&lt;</span> TEAM REGISTRATION <span className="text-red">/&gt;</span></h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={16} />
          </button>
        </div>

        {status && (
          <div className={`status-alert ${status.type}`}>
            {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
            <span>{status.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="team_name">TEAM NAME *</label>
            <input
              type="text"
              id="team_name"
              name="team_name"
              required
              value={formData.team_name}
              onChange={handleChange}
              placeholder="e.g. CyberHackers"
              maxLength={100}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="track">TRACK *</label>
              <select id="track" name="track" value={formData.track} onChange={handleChange}>
                <option value="Agentic AI">Agentic AI</option>
                <option value="Cloud &amp; DevOps">Cloud &amp; DevOps</option>
                <option value="AI + Database">AI + Database</option>
                <option value="Open Innovation">Open Innovation</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="member_count">TEAM SIZE *</label>
              <select id="member_count" name="member_count" value={formData.member_count} onChange={handleChange}>
                <option value="1">1 Member (Solo)</option>
                <option value="2">2 Members</option>
                <option value="3">3 Members</option>
                <option value="4">4 Members</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="leader_name">TEAM LEADER NAME *</label>
            <input
              type="text"
              id="leader_name"
              name="leader_name"
              required
              value={formData.leader_name}
              onChange={handleChange}
              placeholder="e.g. Vivek Sharma"
              maxLength={100}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="leader_email">LEADER EMAIL *</label>
              <input
                type="email"
                id="leader_email"
                name="leader_email"
                required
                value={formData.leader_email}
                onChange={handleChange}
                placeholder="leader@domain.com"
                maxLength={120}
              />
            </div>

            <div className="form-group">
              <label htmlFor="leader_phone">LEADER PHONE *</label>
              <input
                type="tel"
                id="leader_phone"
                name="leader_phone"
                required
                value={formData.leader_phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                maxLength={20}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="members_detail">MEMBER NAMES / DETAILS</label>
            <textarea
              id="members_detail"
              name="members_detail"
              value={formData.members_detail}
              onChange={handleChange}
              placeholder="List other team member names and emails (optional)"
              rows={2}
              maxLength={500}
            />
          </div>

          <button type="submit" className="button button-primary submit-btn" disabled={loading}>
            {loading ? <><Loader2 size={16} className="spin" /> SUBMITTING...</> : 'CONFIRM REGISTRATION ↗'}
          </button>
        </form>
      </div>
    </div>
  );
}
