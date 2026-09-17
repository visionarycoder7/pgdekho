import React, { useState } from 'react';
import { 
  Mail, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Building2, 
  MapPin, 
  Loader2, 
  Share2, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { submitWaitlist } from '../services/api';

export default function Waitlist({ initialRole = 'renter' }) {
  const [email, setEmail] = useState('');
  const [userRole, setUserRole] = useState(initialRole);
  const [selectedCity, setSelectedCity] = useState('Bengaluru');
  
  // UI State Handling
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Email Validation regex
  const validateEmail = (val) => {
    return String(val)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Frontend validation
    if (!email.trim()) {
      setErrorMsg('Please enter your email address.');
      return;
    }

    if (!validateEmail(email.trim())) {
      setErrorMsg('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }

    setIsLoading(true);

    try {
      /**
       * ======================================================================
       * TODO: Connect waitlist form to backend API
       * ======================================================================
       * Currently calling our placeholder API service in `src/services/api.js`.
       * When your backend is built, replace with:
       * POST /api/v1/waitlist
       * { email, userType: userRole, city: selectedCity }
       */
      const response = await submitWaitlist({
        email: email.trim(),
        userType: userRole,
        city: selectedCity
      });

      setSubmittedData(response.data);
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'PG Dekho — Verified Stays in India',
        text: 'I just joined the waitlist for PG Dekho! Find verified PGs, hostels & room rentals with zero brokerage.',
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section id="waitlist" className="section" style={{ backgroundColor: 'var(--bg-surface)', position: 'relative', borderTop: '1px solid var(--border-light)' }}>
      <div className="container" style={{ maxWidth: '780px', textAlign: 'center' }}>
        
        {/* Glow Element */}
        <div 
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '450px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)',
            filter: 'blur(50px)',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Section Tag */}
          <div className="section-tag" style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
            <Sparkles size={14} />
            <span>VIP Early Access</span>
          </div>

          {/* Headline */}
          <h2 className="section-title">
            Be there when we launch.
          </h2>

          <p className="section-subtitle" style={{ maxWidth: '580px', margin: '0 auto 2.5rem auto' }}>
            We're building a simpler, transparent way to find and rent your next stay. 
            Join over <strong>800+</strong> early students, pros, and property owners.
          </p>

          {/* Success State View */}
          {submittedData ? (
            <div 
              className="glass-card"
              style={{
                padding: '2.5rem 2rem',
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--bg-surface)',
                border: '1.5px solid #10B981',
                boxShadow: 'var(--shadow-xl)',
                animation: 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div 
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--success-light)',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto'
                }}
              >
                <CheckCircle2 size={36} />
              </div>

              <span className="badge badge-success" style={{ fontSize: '0.82rem', padding: '0.35rem 0.85rem', marginBottom: '0.85rem' }}>
                🎉 Priority Waitlist Ticket #{submittedData.queuePosition}
              </span>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                You're on the list!
              </h3>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                We've registered <strong style={{ color: 'var(--text-primary)' }}>{submittedData.email}</strong> for 
                exclusive early access in <strong>{submittedData.city}</strong>. We'll send your invite key as soon as onboarding begins.
              </p>

              {/* Share and Reset buttons */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={handleShare}
                  className="btn btn-primary"
                  style={{ gap: '0.5rem' }}
                >
                  <Share2 size={16} />
                  <span>{copiedLink ? 'Link Copied to Clipboard!' : 'Share PG Dekho'}</span>
                </button>

                <button
                  onClick={() => { setSubmittedData(null); setEmail(''); }}
                  className="btn btn-secondary"
                >
                  Register Another Email
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Form View */
            <div 
              className="glass-card"
              style={{
                padding: '2.5rem 2rem',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                backgroundColor: 'var(--bg-surface)'
              }}
            >
              <form onSubmit={handleSubmit} noValidate>
                
                {/* Role Toggle: Renter vs Owner */}
                <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                  <label className="input-label" style={{ marginBottom: '0.65rem', display: 'block' }}>
                    I am joining as a:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    
                    <button
                      type="button"
                      onClick={() => setUserRole('renter')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: userRole === 'renter' ? '2px solid var(--primary)' : '1px solid var(--border-light)',
                        backgroundColor: userRole === 'renter' ? 'var(--primary-light)' : 'var(--bg-main)',
                        color: userRole === 'renter' ? 'var(--primary)' : 'var(--text-secondary)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <Users size={18} />
                      <span>Renter / Student</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUserRole('owner')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: userRole === 'owner' ? '2px solid var(--accent)' : '1px solid var(--border-light)',
                        backgroundColor: userRole === 'owner' ? 'var(--accent-light)' : 'var(--bg-main)',
                        color: userRole === 'owner' ? 'var(--accent)' : 'var(--text-secondary)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <Building2 size={18} />
                      <span>Property / PG Owner</span>
                    </button>

                  </div>
                </div>

                {/* City & Email Inputs Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.25rem', textAlign: 'left' }}>
                  
                  {/* City Dropdown */}
                  <div className="input-group">
                    <label htmlFor="city-select" className="input-label">
                      Target City
                    </label>
                    <div style={{ position: 'relative' }}>
                      <select
                        id="city-select"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="custom-input"
                        style={{ cursor: 'pointer', appearance: 'auto' }}
                      >
                        <option value="Bengaluru">Bengaluru (Electronic City, Koramangala, HSR)</option>
                        <option value="Pune">Pune (Hinjawadi, Viman Nagar, Kharadi)</option>
                        <option value="Delhi NCR">Delhi NCR (Gurgaon, Noida, Delhi)</option>
                        <option value="Hyderabad">Hyderabad (Hitec City, Gachibowli)</option>
                        <option value="Kota">Kota (Landmark, Vigyan Nagar)</option>
                        <option value="Mumbai">Mumbai / Navi Mumbai</option>
                        <option value="Chennai">Chennai (OMR, Guindy)</option>
                        <option value="Other City">Other Indian City</option>
                      </select>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="input-group">
                    <label htmlFor="waitlist-email" className="input-label">
                      Email Address
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        id="waitlist-email"
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setErrorMsg(''); }}
                        placeholder="Enter your email address"
                        className="custom-input"
                        required
                      />
                    </div>
                  </div>

                </div>

                {/* Error Banner */}
                {errorMsg && (
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.65rem 1rem',
                      backgroundColor: '#FEF2F2',
                      border: '1px solid #FCA5A5',
                      borderRadius: 'var(--radius-md)',
                      color: '#B91C1C',
                      fontSize: '0.85rem',
                      marginBottom: '1.25rem',
                      textAlign: 'left'
                    }}
                  >
                    <AlertCircle size={16} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`btn ${userRole === 'owner' ? 'btn-accent' : 'btn-primary'} btn-lg`}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Reserving your spot...</span>
                    </>
                  ) : (
                    <>
                      <span>Join the Waitlist</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                {/* Privacy & Guarantee Note */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '1rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <ShieldCheck size={14} color="#10B981" />
                  <span>Zero Spam Guarantee. We will only contact you for early access invitations.</span>
                </div>

              </form>
            </div>
          )}

        </div>

      </div>

      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
