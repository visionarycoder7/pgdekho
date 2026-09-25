import React from 'react';
import { Building2, ArrowUp, Mail } from 'lucide-react';

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// Crisp inline SVGs for social platforms
function TwitterIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      style={{
        backgroundColor: '#090D16',
        color: '#94A3B8',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container">
        
        {/* Main Footer Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Brand & Mission Column */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-md)',
                  background: 'linear-gradient(135deg, var(--primary) 0%, #312E81 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <Building2 size={20} />
              </div>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                pg<span style={{ color: '#818CF8' }}>dekho</span>
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#94A3B8', marginBottom: '1.25rem' }}>
              The modern discovery and transparency platform for PGs, hostels, rooms, and rentals across India. Built for students and working professionals.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#64748B' }}>
              <span className="pulse-dot"></span>
              <span>Private Beta • Active Development</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FFFFFF', fontWeight: 700, marginBottom: '1.25rem' }}>
              Product Concept
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <button onClick={() => scrollToSection('preview')} style={footerLinkStyle}>
                  Interactive Platform Preview
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-it-works')} style={footerLinkStyle}>
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('owners')} style={footerLinkStyle}>
                  For PG & Property Owners
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('roadmap')} style={footerLinkStyle}>
                  Upcoming Feature Roadmap
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('waitlist')} style={footerLinkStyle}>
                  Join Early Access Waitlist
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FFFFFF', fontWeight: 700, marginBottom: '1.25rem' }}>
              Company & Contact
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <button onClick={() => scrollToSection('founder')} style={footerLinkStyle}>
                  Meet the Founder
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} style={footerLinkStyle}>
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <a href="mailto:hello@pgdekho.com" style={{ ...footerLinkStyle, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Mail size={14} color="#818CF8" />
                  <span>hello@pgdekho.com</span>
                </a>
              </li>
              <li>
                <span style={{ color: '#64748B', fontSize: '0.85rem' }}>
                  Bengaluru & Pune, India
                </span>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FFFFFF', fontWeight: 700, marginBottom: '1.25rem' }}>
              Stay Connected
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '1rem', lineHeight: 1.5 }}>
              Follow our journey as we build and launch the first verified stay ecosystem.
            </p>

            {/* Social Placeholders with Crisp SVG Icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://github.com/visionarycoder7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={socialBtnStyle}
                title="GitHub (@visionarycoder7)"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                aria-label="X / Twitter"
                style={socialBtnStyle}
                title="X / Twitter (Coming Soon)"
              >
                <TwitterIcon size={16} />
              </a>
              <a
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                aria-label="LinkedIn"
                style={socialBtnStyle}
                title="LinkedIn (Coming Soon)"
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
                style={socialBtnStyle}
                title="Instagram (Coming Soon)"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
            fontSize: '0.85rem'
          }}
        >
          <div>
            <p style={{ color: '#64748B' }}>
              © 2026 PG Dekho. All rights reserved. Created with ❤️ by <button onClick={() => scrollToSection('founder')} style={{ ...footerLinkStyle, color: '#CBD5E1', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Sohan</button>.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#CBD5E1',
              padding: '0.45rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              fontSize: '0.8rem',
              transition: 'all var(--transition-fast)'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}

const footerLinkStyle = {
  background: 'none',
  border: 'none',
  padding: 0,
  color: '#94A3B8',
  cursor: 'pointer',
  textAlign: 'left',
  textDecoration: 'none',
  transition: 'color var(--transition-fast)',
  fontFamily: 'inherit',
  fontSize: 'inherit'
};

const socialBtnStyle = {
  width: '38px',
  height: '38px',
  borderRadius: 'var(--radius-md)',
  backgroundColor: 'rgba(255, 255, 255, 0.06)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  color: '#CBD5E1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  transition: 'all var(--transition-fast)',
  cursor: 'pointer'
};
