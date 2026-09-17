import React, { useState } from 'react';
import { ArrowRight, Sparkles, MapPin, Search, Bed, IndianRupee, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const [selectedCity, setSelectedCity] = useState('Bengaluru (Koramangala, HSR)');
  const [selectedType, setSelectedType] = useState('PG / Co-living (All)');
  const [selectedBudget, setSelectedBudget] = useState('₹9,000 - ₹15,000');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section hero-section" style={{ paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)', paddingBottom: 'clamp(2rem, 4vw, 3.5rem)', position: 'relative' }}>
      
      {/* Background Decorative Gradient Blobs */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(700px, 90vw)',
          height: '400px',
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.12) 0%, rgba(255, 87, 34, 0.05) 50%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: -1,
          pointerEvents: 'none'
        }} 
      />

      <div className="container" style={{ textAlign: 'center', maxWidth: '880px' }}>
        
        {/* Early Access / Stage Badge */}
        <div 
          className="badge badge-primary" 
          style={{ 
            padding: '0.45rem 1rem', 
            fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)', 
            marginBottom: '1.5rem',
            border: '1px solid rgba(79, 70, 229, 0.25)',
            boxShadow: '0 2px 10px rgba(79, 70, 229, 0.1)',
            maxWidth: '100%',
            whiteSpace: 'normal',
            lineHeight: 1.4
          }}
        >
          <Sparkles size={14} className="text-primary" style={{ flexShrink: 0 }} />
          <span>The Modern Rental Discovery Platform • Currently in Development</span>
        </div>

        {/* Hero Headline */}
        <h1 
          style={{ 
            fontSize: 'clamp(2.1rem, 5.5vw, 3.75rem)', 
            fontWeight: 800, 
            lineHeight: 1.15, 
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
            color: 'var(--text-primary)'
          }}
        >
          Find a verified stay that <br className="hero-break" />
          <span style={{ 
            background: 'linear-gradient(135deg, var(--primary) 0%, #FF5722 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            actually feels like home.
          </span>
        </h1>

        {/* Supporting Subtitle */}
        <p 
          style={{ 
            fontSize: 'clamp(1rem, 2.2vw, 1.2rem)', 
            color: 'var(--text-secondary)', 
            lineHeight: 1.6, 
            maxWidth: '720px', 
            margin: '0 auto 2rem auto' 
          }}
        >
          Discover verified <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>PGs, hostels, rooms, and flats</strong> with 
          transparent rents, true amenity details, and food reviews — designed specifically for students and working professionals in India.
        </p>

        {/* Primary & Secondary Action CTAs */}
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '0.85rem',
            marginBottom: '2.25rem'
          }}
        >
          <button 
            onClick={() => scrollToSection('waitlist')}
            className="btn btn-primary btn-lg"
            style={{ width: 'clamp(200px, 100%, 230px)', justifyContent: 'center' }}
          >
            <span>Join the Waitlist</span>
            <ArrowRight size={18} />
          </button>

          <button 
            onClick={() => scrollToSection('preview')}
            className="btn btn-secondary btn-lg"
            style={{ width: 'clamp(180px, 100%, 210px)', justifyContent: 'center' }}
          >
            <span>Explore the Concept</span>
          </button>
        </div>

        {/* Key Highlights Micro-Pills */}
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '1rem 1.5rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(226, 232, 240, 0.8)',
            maxWidth: '680px',
            margin: '0 auto 2.5rem auto'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            <CheckCircle2 size={16} color="var(--primary)" />
            <span>Zero Brokerage Drama</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            <CheckCircle2 size={16} color="var(--primary)" />
            <span>Transparent Deposit Policies</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            <CheckCircle2 size={16} color="var(--primary)" />
            <span>Verified Indian Hubs</span>
          </div>
        </div>

        {/* Interactive Concept Search Bar */}
        <div 
          className="glass-card" 
          style={{ 
            padding: 'clamp(1rem, 3vw, 1.5rem)', 
            borderRadius: 'var(--radius-xl)', 
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge badge-accent" style={{ fontSize: '0.72rem' }}>
                CONCEPT SEARCH
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                How finding accommodation will work:
              </span>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>
              Live Prototype Filter
            </span>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', 
              gap: '0.75rem',
              alignItems: 'center'
            }}
          >
            {/* City Selector */}
            <div style={{ background: 'var(--bg-subtle)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <label htmlFor="hero-city-select" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                <MapPin size={13} color="var(--primary)" /> City / Locality
              </label>
              <select 
                id="hero-city-select"
                aria-label="City or Locality"
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontWeight: 600, color: 'var(--text-primary)', cursor: 'pointer', fontSize: '0.88rem' }}
              >
                <option value="Bengaluru (Koramangala, HSR)">Bengaluru (Koramangala / HSR)</option>
                <option value="Pune (Hinjawadi, Viman Nagar)">Pune (Hinjawadi / Viman Nagar)</option>
                <option value="Delhi NCR (Gurgaon, Noida)">Delhi NCR (Gurgaon / Noida)</option>
                <option value="Hyderabad (Hitec City)">Hyderabad (Hitec City / Gachibowli)</option>
                <option value="Kota (Student Hubs)">Kota (Landmark / Rajiv Gandhi)</option>
                <option value="Mumbai (Andheri, Powai)">Mumbai (Andheri / Powai)</option>
              </select>
            </div>

            {/* Room Type */}
            <div style={{ background: 'var(--bg-subtle)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <label htmlFor="hero-stay-type" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                <Bed size={13} color="var(--primary)" /> Stay Type
              </label>
              <select 
                id="hero-stay-type"
                aria-label="Stay Type"
                value={selectedType} 
                onChange={(e) => setSelectedType(e.target.value)}
                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontWeight: 600, color: 'var(--text-primary)', cursor: 'pointer', fontSize: '0.88rem' }}
              >
                <option value="PG / Co-living (All)">PG / Co-living (All)</option>
                <option value="Single Private Room PG">Single Private Room PG</option>
                <option value="2/3 Sharing Hostel">2/3 Sharing Hostel</option>
                <option value="1BHK / 2BHK Flat">1BHK / 2BHK Flat</option>
                <option value="Room in Shared Flat">Room in Shared Flat</option>
              </select>
            </div>

            {/* Budget */}
            <div style={{ background: 'var(--bg-subtle)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <label htmlFor="hero-budget-select" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                <IndianRupee size={13} color="var(--primary)" /> Monthly Budget
              </label>
              <select 
                id="hero-budget-select"
                aria-label="Monthly Budget"
                value={selectedBudget} 
                onChange={(e) => setSelectedBudget(e.target.value)}
                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontWeight: 600, color: 'var(--text-primary)', cursor: 'pointer', fontSize: '0.88rem' }}
              >
                <option value="₹5,000 - ₹9,000">₹5,000 - ₹9,000 / mo</option>
                <option value="₹9,000 - ₹15,000">₹9,000 - ₹15,000 / mo</option>
                <option value="₹15,000 - ₹25,000">₹15,000 - ₹25,000 / mo</option>
                <option value="₹25,000+">₹25,000+ (Luxury / Private)</option>
              </select>
            </div>

            {/* Action Trigger */}
            <button 
              onClick={() => scrollToSection('preview')}
              className="btn btn-primary"
              style={{ minHeight: '48px', justifyContent: 'center', width: '100%' }}
            >
              <Search size={16} />
              <span>Preview Stay Card</span>
            </button>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-break { display: none; }
        }
      `}</style>
    </section>
  );
}
