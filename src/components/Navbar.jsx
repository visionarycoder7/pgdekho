import React, { useState, useEffect } from 'react';
import { Home, Compass, Building2, Sparkles, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add subtle shadow and background opacity when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        
        {/* Brand Logo & Logo Mark */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
        >
          <div 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, var(--primary) 0%, #312E81 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 10px rgba(79, 70, 229, 0.35)'
            }}
          >
            <Building2 size={22} strokeWidth={2.2} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
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
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
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
        <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-cta">
          <div className="badge badge-success" style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}>
            <span className="pulse-dot"></span>
            <span>Launching Soon</span>
          </div>

          <button 
            onClick={() => scrollToSection('waitlist')}
            className="btn btn-primary btn-sm"
            style={{ borderRadius: 'var(--radius-full)', padding: '0.55rem 1.25rem' }}
          >
            <span>Join Waitlist</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle-btn"
          aria-label="Toggle navigation menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
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
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-light)' }}>
            <div className="badge badge-success" style={{ padding: '0.35rem 0.75rem' }}>
              <span className="pulse-dot"></span>
              <span>In Active Development</span>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Early Access Q3 2026</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
          </div>

          <button
            onClick={() => scrollToSection('waitlist')}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}
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
  fontSize: '1rem',
  fontWeight: 600,
  color: 'var(--text-primary)',
  textAlign: 'left',
  cursor: 'pointer',
  borderRadius: 'var(--radius-sm)'
};
