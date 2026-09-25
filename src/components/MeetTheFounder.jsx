import React from 'react';
import { 
  Sparkles, 
  Quote, 
  ShieldCheck, 
  GraduationCap, 
  Code2, 
  Mail, 
  ArrowRight, 
  MapPin, 
  HeartHandshake, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';
import founderImg from '../assets/founder.jpg';

// Crisp inline SVGs for social badges
function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function MeetTheFounder() {
  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="founder" 
      className="section"
      style={{
        backgroundColor: 'var(--bg-main)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-light)'
      }}
    >
      {/* Subtle Background Glow Spheres */}
      <div 
        style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '420px',
          height: '420px',
          background: 'radial-gradient(circle, rgba(255, 87, 34, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Behind The Platform</span>
          </div>
          <h2 className="section-title">
            Meet the Founder.
          </h2>
          <p className="section-subtitle">
            PG Dekho wasn't created in a corporate boardroom. It was born out of real frustration with fake listings, broker harassment, and withheld deposits.
          </p>
        </div>

        {/* Main 2-Column Responsive Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(1.75rem, 4vw, 3rem)',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column: Founder Profile & Identity Card */}
          <div 
            className="glass-card card-hover"
            style={{
              padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--bg-surface)',
              border: '1.5px solid rgba(79, 70, 229, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative'
            }}
          >
            <div>
              {/* Profile Image Frame with Gradient Aura */}
              <div style={{ position: 'relative', width: '100%', marginBottom: '1.75rem' }}>
                <div 
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1 / 1',
                    maxHeight: '340px',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: '0 12px 30px -8px rgba(79, 70, 229, 0.25)',
                    border: '3px solid #FFFFFF'
                  }}
                >
                  <img 
                    src={founderImg} 
                    alt="Sohan - Founder & Creator of PG Dekho"
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform var(--transition-smooth)'
                    }}
                    onError={(e) => {
                      // Fallback to public root if needed
                      e.currentTarget.src = '/founder.jpg';
                    }}
                  />
                  {/* Subtle Gradient Overlay at the base */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '35%',
                      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.65), transparent)',
                      pointerEvents: 'none'
                    }}
                  />
                </div>

                {/* Floating Status Pill */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.4rem 1rem',
                    boxShadow: 'var(--shadow-md)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span className="pulse-dot" />
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Active Solo Founder &amp; Architect
                  </span>
                </div>
              </div>

              {/* Founder Name & Badges */}
              <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Sohan
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  Founder &amp; Lead Builder
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  <span className="badge badge-primary" style={{ fontSize: '0.72rem' }}>
                    <Code2 size={12} />
                    Full-Stack Engineer
                  </span>
                  <span className="badge badge-accent" style={{ fontSize: '0.72rem' }}>
                    <GraduationCap size={12} />
                    Student Advocate
                  </span>
                  <span className="badge badge-success" style={{ fontSize: '0.72rem' }}>
                    <ShieldCheck size={12} />
                    Zero-Brokerage Crusader
                  </span>
                </div>

                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <MapPin size={14} color="var(--primary)" />
                  <span>Bengaluru &bull; West Bengal, India</span>
                </p>
              </div>

              {/* Quick Founder Pillar Metrics */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.75rem',
                  marginTop: '1.5rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-light)',
                  textAlign: 'center'
                }}
              >
                <div style={{ background: 'var(--bg-main)', padding: '0.75rem 0.5rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>0%</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '2px' }}>Brokerage</div>
                </div>
                <div style={{ background: 'var(--bg-main)', padding: '0.75rem 0.5rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--secondary)' }}>100%</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '2px' }}>Verified Rent</div>
                </div>
                <div style={{ background: 'var(--bg-main)', padding: '0.75rem 0.5rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent)' }}>24/7</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, marginTop: '2px' }}>Direct Support</div>
                </div>
              </div>
            </div>

            {/* Founder Social & Direct Connection Actions */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                <a 
                  href="https://github.com/visionarycoder7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="card-hover"
                  title="GitHub Profile (@visionarycoder7)"
                  aria-label="Sohan on GitHub"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#0F172A',
                    color: '#FFFFFF',
                    border: '1px solid #1E293B'
                  }}
                >
                  <GithubIcon size={19} />
                </a>

                <a 
                  href="mailto:hello@pgdekho.com?subject=Hello%20Sohan%20-%20PG%20Dekho" 
                  className="card-hover"
                  title="Send Direct Email to Sohan"
                  aria-label="Send Direct Email to Founder"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary)',
                    border: '1px solid rgba(79, 70, 229, 0.2)'
                  }}
                >
                  <Mail size={19} />
                </a>

                <a 
                  href="https://linkedin.com/company/pgdekho" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="card-hover"
                  title="LinkedIn (Coming Soon)"
                  aria-label="PG Dekho LinkedIn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#0A66C2',
                    color: '#FFFFFF'
                  }}
                >
                  <LinkedInIcon size={19} />
                </a>

                <a
                  href="mailto:sohan.ghosh666@gmail.com?subject=PG%20Dekho%20Founder%20Connect"
                  className="btn btn-secondary btn-sm"
                  style={{ flex: 1, fontSize: '0.82rem', padding: '0.5rem 0.85rem' }}
                >
                  <span>Direct Chat</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: The Founder's Story & The Mission */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}
          >
            {/* The Personal Founder Statement Quote Card */}
            <div 
              className="glass-card"
              style={{
                padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                position: 'relative'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  color: 'rgba(79, 70, 229, 0.12)'
                }}
              >
                <Quote size={52} />
              </div>

              <div className="badge badge-primary" style={{ marginBottom: '1.25rem' }}>
                <HeartHandshake size={14} />
                <span>Founder's Note</span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.35 }}>
                "Finding a place to live when moving for college or your first job shouldn't be an ordeal of deceit."
              </h3>

              <div style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                <p>
                  When I stepped out to pursue higher education, I watched classmates and fellow students waste weeks of energy and hard-earned savings dealing with misleading classifieds, photoshopped room pictures, greedy brokers demanding half a month's rent, and landlords who never return security deposits.
                </p>
                <p>
                  Near engineering colleges like <strong>CGEC</strong>, top universities, and fast-growing tech parks, the housing market has treated young Indians as an afterthought. We're told that dirty water, spotty WiFi, and unfair lock-in clauses are just "part of the hostel experience."
                </p>
                <p>
                  <strong>I built PG Dekho to dismantle that status quo.</strong> We believe that every student, intern, and young professional deserves clear, verified facts: true room dimensions, honest meal menus, verified deposit refund terms, and zero brokerage intermediaries.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                <div>
                  <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1.05rem', fontFamily: 'var(--font-heading)' }}>
                    Sohan
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Founder &amp; Software Architect, PG Dekho
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Core Founder Convictions */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                gap: '1rem'
              }}
            >
              {/* Conviction 1 */}
              <div 
                className="glass-card card-hover"
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div 
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.85rem'
                  }}
                >
                  <ShieldCheck size={20} />
                </div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Radical Transparency
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Every maintenance fee, electricity rate, and deposit policy verified upfront before you pay anything.
                </p>
              </div>

              {/* Conviction 2 */}
              <div 
                className="glass-card card-hover"
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div 
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--secondary-light)',
                    color: 'var(--secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.85rem'
                  }}
                >
                  <Building2 size={20} />
                </div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Zero Broker Commission
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Connect directly with verified property managers and warden teams. Save 100% of broker fees.
                </p>
              </div>

              {/* Conviction 3 */}
              <div 
                className="glass-card card-hover"
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div 
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-light)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.85rem'
                  }}
                >
                  <Code2 size={20} />
                </div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Engineered with Care
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Built with high-speed modern web standards, thoughtful UX, and genuine community feedback.
                </p>
              </div>
            </div>

            {/* Bottom Callout Banner */}
            <div 
              style={{
                backgroundColor: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
                background: '#EEF2FF',
                border: '1px solid rgba(79, 70, 229, 0.2)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={22} color="var(--primary)" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Have ideas or want to partner with us?
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    Sohan reads and replies to every message from renters and owners personally.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="mailto:sohan.ghosh666@gmail.com?subject=PG%20Dekho%20Feedback%20for%20Founder"
                  className="btn btn-secondary btn-sm"
                  style={{ borderRadius: 'var(--radius-full)', backgroundColor: '#FFFFFF' }}
                >
                  <Mail size={14} />
                  <span>Email Sohan</span>
                </a>
                <button
                  onClick={scrollToWaitlist}
                  className="btn btn-primary btn-sm"
                  style={{ borderRadius: 'var(--radius-full)' }}
                >
                  <span>Join Early Access</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
