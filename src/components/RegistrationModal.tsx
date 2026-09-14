import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, Loader2, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTrack?: string | null;
}

// WhatsApp Group Invite Link (can also be configured via .env: VITE_WHATSAPP_GROUP_LINK)
const WHATSAPP_GROUP_LINK = import.meta.env.VITE_WHATSAPP_GROUP_LINK || 'https://chat.whatsapp.com/B2BHacksParticipantGroup';

export function RegistrationModal({ isOpen, onClose, selectedTrack }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    track: selectedTrack || 'Agentic AI',
    college: '',
  });

  React.useEffect(() => {
    if (selectedTrack) {
      setFormData(prev => ({ ...prev, track: selectedTrack }));
    }
  }, [selectedTrack, isOpen]);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [registeredName, setRegisteredName] = useState('');

  if (!isOpen) return null;

  const handleClose = () => {
    setIsSuccess(false);
    setStatus(null);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status) setStatus(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const emailClean = formData.email.trim().toLowerCase();
    const fullNameClean = formData.full_name.trim();

    try {
      const { data, error } = await supabase
        .from('registrations')
        .insert([
          {
            full_name: fullNameClean,
            email: emailClean,
            phone: formData.phone.trim(),
            track: formData.track,
            college_name: formData.college.trim() || null,
          }
        ])
        .select();

      if (error) {
        // Handle unique constraint violations
        if (error.code === '23505') {
          throw new Error('This email address is already registered.');
        }
        throw new Error(error.message || 'Registration failed.');
      }

      setRegisteredName(fullNameClean);
      setIsSuccess(true);

      // Clear form on success
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        track: 'Agentic AI',
        college: '',
      });

    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content pixel-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>
            <span className="text-red">&lt;</span> {isSuccess ? 'REGISTRATION CONFIRMED' : 'INDIVIDUAL REGISTRATION'} <span className="text-red">/&gt;</span>
          </h3>
          <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
            <X size={16} />
          </button>
        </div>

        {isSuccess ? (
          <div className="registration-success-card">
            <div className="success-icon-badge">
              <CheckCircle size={42} className="success-check-icon" />
              <Sparkles size={20} className="sparkle-icon" />
            </div>

            <h2 className="success-title">REGISTRATION SUCCESSFUL! 🎉</h2>
            <p className="success-subtitle">
              Welcome aboard, <b>{registeredName || 'Builder'}</b>! Your spot for <b>B2B HACKS 2026</b> has been secured.
            </p>

            <div className="whatsapp-invite-box">
              <div className="whatsapp-badge">
                <MessageCircle size={14} /> OFFICIAL COMMUNITY
              </div>
              <h4>Join the WhatsApp Group</h4>
              <p>
                Get instant announcements, mentor guidance, event updates, and connect with other builders.
              </p>
              <a
                href={WHATSAPP_GROUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="button whatsapp-btn"
              >
                <MessageCircle size={18} /> JOIN WHATSAPP GROUP <ExternalLink size={15} />
              </a>
            </div>

            <div className="success-footer-actions">
              <button
                type="button"
                onClick={handleClose}
                className="button button-outline close-modal-btn"
              >
                DONE &times;
              </button>
            </div>
          </div>
        ) : (
          <>
            {status && (
              <div className={`status-alert ${status.type}`}>
                {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-group">
                <label htmlFor="full_name">FULL NAME *</label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  required
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="e.g. Vivek Sharma"
                  maxLength={100}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@domain.com"
                    maxLength={120}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">PHONE NUMBER *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    maxLength={20}
                  />
                </div>
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
                  <label htmlFor="college">COLLEGE / INSTITUTION</label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="e.g. JNTUH / SVIT / Company"
                    maxLength={150}
                  />
                </div>
              </div>

              <button type="submit" className="button button-primary submit-btn" disabled={loading}>
                {loading ? <><Loader2 size={16} className="spin" /> SUBMITTING...</> : 'CONFIRM REGISTRATION ↗'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
