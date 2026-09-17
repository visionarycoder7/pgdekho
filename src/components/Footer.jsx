import React from 'react';
import { Building2, Heart, ArrowUp, Mail, ShieldCheck } from 'lucide-react';

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
                <button onClick={() => scrollToSection('faq')} style={footerLinkStyle}>
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                {/* TODO: Connect real contact email / support portal */}
                <a href="mailto:hello@pgdekho.com" style={footerLinkStyle}>
                  hello@pgdekho.com
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

            {/* Social Placeholders */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {/* TODO: Update with official social handles once registered */}
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                aria-label="X / Twitter"
                style={socialBtnStyle}
                title="X / Twitter (Coming Soon)"
              >
                𝕏
              </a>
              <a
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                aria-label="LinkedIn"
                style={socialBtnStyle}
                title="LinkedIn (Coming Soon)"
              >
                in
              </a>
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
                style={socialBtnStyle}
                title="Instagram (Coming Soon)"
              >
                ig
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
              © 2026 PG Dekho. All rights reserved. Made with pride for renters across India.
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
  width: '36px',
  height: '36px',
  borderRadius: 'var(--radius-md)',
  backgroundColor: 'rgba(255, 255, 255, 0.06)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  color: '#CBD5E1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  fontSize: '0.85rem',
  textDecoration: 'none',
  transition: 'all var(--transition-fast)'
};
