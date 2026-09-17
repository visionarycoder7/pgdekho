import React, { useState, useEffect } from 'react';
import { Home, Compass, Building2, Sparkles, Menu, X, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add subtle shadow and background opacity when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'all var(--transition-normal)',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.25rem' }}>
        
        {/* Brand Logo & Logo Mark */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}
          aria-label="PG Dekho Home"
        >
          <div 
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, var(--primary) 0%, #312E81 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 10px rgba(79, 70, 229, 0.35)',
              flexShrink: 0
            }}
          >
            <Building2 size={20} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                pg<span style={{ color: 'var(--primary)' }}>dekho</span>
              </span>
              <span className="badge badge-accent" style={{ fontSize: '0.65rem', padding: '0.15rem 0.45rem' }}>
                BETA
              </span>
            </div>
            <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '-3px' }}>
              Verified Stays • India
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav" aria-label="Main Navigation">
          <button 
            onClick={() => scrollToSection('home')} 
            className="nav-link"
            style={navLinkStyle}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('preview')} 
            className="nav-link"
            style={navLinkStyle}
          >
            Explore Preview
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="nav-link"
            style={navLinkStyle}
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('owners')} 
            className="nav-link"
            style={navLinkStyle}
          >
            For Owners
          </button>
          <button 
            onClick={() => scrollToSection('roadmap')} 
            className="nav-link"
            style={navLinkStyle}
          >
            Roadmap
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="nav-link"
            style={navLinkStyle}
          >
            FAQ
          </button>
        </nav>

        {/* Right CTA & Coming Soon Indicator */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.85rem' }} className="desktop-cta">
          <div className="badge badge-success" style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}>
            <span className="pulse-dot"></span>
            <span>Launching Soon</span>
          </div>

          <button 
            onClick={() => scrollToSection('waitlist')}
            className="btn btn-primary btn-sm"
            style={{ borderRadius: 'var(--radius-full)', padding: '0.5rem 1.15rem' }}
          >
            <span>Join Waitlist</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle-btn"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-light)',
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Slide-down Navigation Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-light)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.65rem', borderBottom: '1px solid var(--border-light)' }}>
            <div className="badge badge-success" style={{ padding: '0.35rem 0.75rem' }}>
              <span className="pulse-dot"></span>
              <span>In Active Development</span>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Early Access Q3 2026</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <button onClick={() => scrollToSection('home')} style={mobileNavLinkStyle}>
              <Home size={18} color="var(--primary)" /> Home
            </button>
            <button onClick={() => scrollToSection('preview')} style={mobileNavLinkStyle}>
              <Compass size={18} color="var(--primary)" /> Platform Preview
            </button>
            <button onClick={() => scrollToSection('how-it-works')} style={mobileNavLinkStyle}>
              <Sparkles size={18} color="var(--primary)" /> How It Works
            </button>
            <button onClick={() => scrollToSection('owners')} style={mobileNavLinkStyle}>
              <Building2 size={18} color="var(--primary)" /> For Property Owners
            </button>
            <button onClick={() => scrollToSection('roadmap')} style={mobileNavLinkStyle}>
              <ShieldCheck size={18} color="var(--primary)" /> What's Coming Next
            </button>
            <button onClick={() => scrollToSection('faq')} style={mobileNavLinkStyle}>
              <HelpCircle size={18} color="var(--primary)" /> FAQ
            </button>
          </div>

          <button
            onClick={() => scrollToSection('waitlist')}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem', minHeight: '48px', justifyContent: 'center' }}
          >
            <span>Join Early Access Waitlist</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* Responsive Breakpoint CSS */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
        .nav-link:hover {
          color: var(--primary) !important;
        }
      `}</style>
    </header>
  );
}

const navLinkStyle = {
  background: 'none',
  border: 'none',
  color: 'var(--text-secondary)',
  fontSize: '0.92rem',
  fontWeight: 500,
  cursor: 'pointer',
  padding: '0.4rem 0.2rem',
  transition: 'color var(--transition-fast)',
  fontFamily: 'inherit'
};

const mobileNavLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  background: 'none',
  border: 'none',
  padding: '0.75rem 0.5rem',
  minHeight: '44px',
  fontSize: '0.95rem',
  fontWeight: 600,
  color: 'var(--text-primary)',
  textAlign: 'left',
  cursor: 'pointer',
  borderRadius: 'var(--radius-sm)'
};
