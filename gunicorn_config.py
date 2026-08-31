import os

# Gunicorn Multi-Worker Architecture Configuration (-w 2)
# - If one worker encounters a heavy request, the other worker continues handling traffic.
# - If a worker stops unexpectedly, Gunicorn automatically respawns a new worker process in milliseconds.

bind = f"0.0.0.0:{os.environ.get('PORT', '5000')}"
workers = 2
threads = 2
timeout = 120
keepalive = 5

# Logging to stdout/stderr
accesslog = '-'
errorlog = '-'
loglevel = 'info'
