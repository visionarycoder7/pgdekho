import React, { useState } from 'react';
import { ArrowRight, Sparkles, MapPin, Search, Bed, IndianRupee, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const [selectedCity, setSelectedCity] = useState('Bengaluru');
  const [selectedType, setSelectedType] = useState('PG / Co-living');
  const [selectedBudget, setSelectedBudget] = useState('₹8,000 - ₹15,000');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section hero-section" style={{ paddingTop: '4rem', paddingBottom: '3rem', position: 'relative' }}>
      
      {/* Background Decorative Gradient Blobs */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.12) 0%, rgba(255, 87, 34, 0.05) 50%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: -1,
          pointerEvents: 'none'
        }} 
      />

      <div className="container" style={{ textAlign: 'center', maxWidth: '860px' }}>
        
        {/* Early Access / Stage Badge */}
        <div 
          className="badge badge-primary" 
          style={{ 
            padding: '0.45rem 1.1rem', 
            fontSize: '0.85rem', 
            marginBottom: '1.75rem',
            border: '1px solid rgba(79, 70, 229, 0.25)',
            boxShadow: '0 2px 10px rgba(79, 70, 229, 0.1)'
          }}
        >
          <Sparkles size={15} className="text-primary" />
          <span>The Modern Rental Discovery Platform • Currently in Development</span>
        </div>

        {/* Hero Headline */}
        <h1 
          style={{ 
            fontSize: 'clamp(2.35rem, 5.5vw, 3.85rem)', 
            fontWeight: 800, 
            lineHeight: 1.15, 
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
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
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', 
            color: 'var(--text-secondary)', 
            lineHeight: 1.6, 
            maxWidth: '720px', 
            margin: '0 auto 2.25rem auto' 
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
            gap: '1rem',
            marginBottom: '2.5rem'
          }}
        >
          <button 
            onClick={() => scrollToSection('waitlist')}
            className="btn btn-primary btn-lg"
            style={{ minWidth: '200px' }}
          >
            <span>Join the Waitlist</span>
            <ArrowRight size={18} />
          </button>

          <button 
            onClick={() => scrollToSection('preview')}
            className="btn btn-secondary btn-lg"
            style={{ minWidth: '190px' }}
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
            gap: '1.5rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(226, 232, 240, 0.8)',
            maxWidth: '680px',
            margin: '0 auto 3rem auto'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            <CheckCircle2 size={16} color="var(--primary)" />
            <span>Zero Brokerage Drama</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            <CheckCircle2 size={16} color="var(--primary)" />
            <span>Transparent Deposit Policies</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            <CheckCircle2 size={16} color="var(--primary)" />
            <span>Verified Indian Hubs</span>
          </div>
        </div>

        {/* Interactive Concept Search Bar (Simulation of Future Discovery) */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '1.25rem', 
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
                How finding accommodation will work on PG Dekho:
              </span>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>
              Live Prototype Filter
            </span>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '0.75rem',
              alignItems: 'center'
            }}
          >
            {/* City Selector */}
            <div style={{ background: 'var(--bg-subtle)', padding: '0.65rem 0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                <MapPin size={13} color="var(--primary)" /> City / Locality
              </label>
              <select 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontWeight: 600, color: 'var(--text-primary)', cursor: 'pointer' }}
              >
                <option value="Bengaluru (Koramangala, HSR, Indiranagar)">Bengaluru (Koramangala / HSR)</option>
                <option value="Pune (Hinjawadi, Viman Nagar, Kothrud)">Pune (Hinjawadi / Viman Nagar)</option>
                <option value="Delhi NCR (Noida, Gurgaon, North Campus)">Delhi NCR (Gurgaon / Noida)</option>
                <option value="Hyderabad (Hitec City, Gachibowli, Madhapur)">Hyderabad (Gachibowli)</option>
                <option value="Kota (Landmark City, Rajiv Gandhi Nagar)">Kota (Student Hubs)</option>
                <option value="Mumbai (Andheri, Powai, Navi Mumbai)">Mumbai (Andheri / Powai)</option>
              </select>
            </div>

            {/* Room Type */}
            <div style={{ background: 'var(--bg-subtle)', padding: '0.65rem 0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                <Bed size={13} color="var(--primary)" /> Stay Type
              </label>
              <select 
                value={selectedType} 
                onChange={(e) => setSelectedType(e.target.value)}
                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontWeight: 600, color: 'var(--text-primary)', cursor: 'pointer' }}
              >
                <option value="PG / Co-living (Boys, Girls, Unisex)">PG / Co-living (All)</option>
                <option value="Single Private Room PG">Single Private Room PG</option>
                <option value="2/3 Sharing Student Hostel">2/3 Sharing Hostel</option>
                <option value="1BHK / 2BHK Flat for Rent">1BHK / 2BHK Flat</option>
                <option value="Independent Room in 3BHK">Room in Shared Flat</option>
              </select>
            </div>

            {/* Budget */}
            <div style={{ background: 'var(--bg-subtle)', padding: '0.65rem 0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                <IndianRupee size={13} color="var(--primary)" /> Monthly Budget
              </label>
              <select 
                value={selectedBudget} 
                onChange={(e) => setSelectedBudget(e.target.value)}
                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontWeight: 600, color: 'var(--text-primary)', cursor: 'pointer' }}
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
              style={{ height: '100%', minHeight: '52px', justifyContent: 'center' }}
            >
              <Search size={17} />
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
