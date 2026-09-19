import React, { useState } from 'react';
import { 
  Wifi, 
  Utensils, 
  Wind, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Lock, 
  Heart,
  Eye,
  Calendar,
  Zap,
  Tv,
  Info,
  Clock,
  GraduationCap
} from 'lucide-react';

const mockProperties = [
  {
    id: 'pal-pg',
    college: 'Cooch Behar Government Engineering College'
    category: 'PAL PG (College Pick)',
    title: 'PAL PG',
    location: 'Runners Club, Harinchowra',
    distance: '15 mins to College / Institution',
    collegeCommute: '15 mins to Institution',
    rent: '2,000',
    deposit: '1 Month Security Deposit',
    sharing: 'Single & 2-Sharing (Furnished Rooms)',
    type: 'Student & Professional Friendly PG',
    rating: '4.9',
    reviewCount: 52,
    tags: ['15 Mins to College', 'Near Runners Club', 'Zero Brokerage', 'Student Friendly'],
    food: '3 Nutritious Meals Included (Home Style Cooked)',
    amenities: [
      { name: 'High-Speed WiFi', icon: Wifi },
      { name: '3 Home Meals Daily', icon: Utensils },
      { name: 'Study Table & Bed', icon: Star },
      { name: '100% Power Backup', icon: Zap },
      { name: 'Biometric / Secure Lock', icon: Lock },
      { name: 'In-Room Geyser & AC', icon: Wind },
      { name: 'Daily Housekeeping', icon: Sparkles },
      { name: '24/7 CCTV Security', icon: ShieldCheck },
    ],
    gradient: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #2563EB 100%)'
  },
  {
    id: 'prop-1',
    category: 'Single Private Room',
    title: 'The Green Oasis Premium Co-living',
    location: 'HSR Layout, Sector 4, Bengaluru',
    distance: '8 mins to Tech Colleges & IT Corridors',
    collegeCommute: '8 mins to University Campuses',
    rent: '13,500',
    deposit: '1 Month (₹13,500)',
    sharing: 'Single Occupancy (Private Room)',
    type: 'Unisex Co-living (Dedicated Wings)',
    rating: '4.9',
    reviewCount: 94,
    tags: ['Verified Partner', 'Zero Brokerage', 'Fast Move-in'],
    food: '3 Meals Included (North & South Indian Menu)',
    amenities: [
      { name: '300 Mbps WiFi', icon: Wifi },
      { name: 'Daily 3 Meals', icon: Utensils },
      { name: 'In-Room AC', icon: Wind },
      { name: '100% Power Backup', icon: Zap },
      { name: 'Biometric Access', icon: Lock },
      { name: 'Smart TV & Desk', icon: Tv },
      { name: 'Daily Housekeeping', icon: Sparkles },
      { name: '24/7 CCTV Security', icon: ShieldCheck },
    ],
    gradient: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)'
  },
  {
    id: 'prop-2',
    category: '2-Sharing PG / Hostel',
    title: 'Silver Oaks Residency & Hostel',
    location: 'Hinjawadi Phase 1, Pune',
    distance: '10 mins to Symbiosis & Engineering Colleges',
    collegeCommute: '10 mins to Engineering Campuses',
    rent: '8,200',
    deposit: '₹8,000 (Refundable in 7 Days)',
    sharing: '2-Person Sharing (Spacious Twin Beds)',
    type: 'Boys & Girls Separate Blocks',
    rating: '4.8',
    reviewCount: 68,
    tags: ['Student Friendly', 'Zero Brokerage', 'Quiet Study Zone'],
    food: 'Breakfast & Dinner (Home Style)',
    amenities: [
      { name: 'High-Speed Fiber Net', icon: Wifi },
      { name: 'Breakfast & Dinner', icon: Utensils },
      { name: 'AC & Geyser Fitted', icon: Wind },
      { name: '24/7 Power Backup', icon: Zap },
      { name: 'Digital Lockers', icon: Lock },
      { name: 'Laundry Machines', icon: Sparkles },
      { name: 'Warden on Premise', icon: ShieldCheck },
      { name: 'Rooftop Chill Zone', icon: Star },
    ],
    gradient: 'linear-gradient(135deg, #064E3B 0%, #065F46 50%, #047857 100%)'
  },
  {
    id: 'prop-3',
    category: 'Studio Flat / 1BHK',
    title: 'Urban Habitat Gated Studio Apartment',
    location: 'Cyber City, Sector 28, Gurgaon / Delhi NCR',
    distance: '12 mins to Management & CyberHub Institutes',
    collegeCommute: '12 mins to Institutes & Rapid Metro',
    rent: '19,000',
    deposit: '1 Month Security',
    sharing: 'Full Private Flat (1BHK/Studio)',
    type: 'Working Professionals & Students',
    rating: '4.95',
    reviewCount: 112,
    tags: ['Gated Society', 'Fully Furnished', 'No Gate Curfew'],
    food: 'Equipped Modular Kitchen (Self-Cooking)',
    amenities: [
      { name: 'Dedicated 500Mbps FTTH', icon: Wifi },
      { name: 'Modular Kitchen', icon: Utensils },
      { name: 'Inverter Split AC', icon: Wind },
      { name: 'Gym & Clubhouse', icon: Star },
      { name: 'Video Doorbell', icon: Lock },
      { name: 'Washing Machine', icon: Sparkles },
      { name: 'Multi-Tier Security', icon: ShieldCheck },
      { name: 'Covered Parking', icon: Zap },
    ],
    gradient: 'linear-gradient(135deg, #4C1D95 0%, #5B21B6 50%, #6D28D9 100%)'
  }
];

export default function PlatformPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const [savedFavorite, setSavedFavorite] = useState(false);
  const [modalMessage, setModalMessage] = useState(null);

  const activeProp = mockProperties[activeTab];

  const handleActionClick = (actionName) => {
    setModalMessage(`"${actionName}" is simulated in prototype mode. Early access opens upon launch!`);
    setTimeout(() => {
      setModalMessage(null);
    }, 3500);
  };

  return (
    <section id="preview" className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Eye size={14} />
            <span>Product Showcase</span>
          </div>
          <h2 className="section-title">
            This is what the future of <br />
            finding a PG looks like.
          </h2>
          <p className="section-subtitle">
            Say goodbye to blurry broker photos, misleading deposit claims, and hidden charges. 
            PG Dekho delivers complete transparency in one interactive card.
          </p>
        </div>

        {/* Prototype Disclaimer Banner */}
        <div 
          style={{
            maxWidth: '960px',
            margin: '0 auto 1.75rem auto',
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--primary-light)',
            border: '1px dashed rgba(79, 70, 229, 0.4)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.6rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Info size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.82rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              Interactive Prototype Mockup • Live Preview Mode
            </span>
          </div>
          <span className="badge badge-primary" style={{ fontSize: '0.72rem' }}>
            Future Listing Layout
          </span>
        </div>

        {/* Tab Switcher for Sample Stay Categories */}
        <div 
          className="no-scrollbar"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem',
            marginBottom: '1.75rem',
            maxWidth: '100%'
          }}
        >
          {mockProperties.map((prop, idx) => (
            <button
              key={prop.id}
              onClick={() => { setActiveTab(idx); setSavedFavorite(false); }}
              style={{
                padding: '0.6rem 1.15rem',
                borderRadius: 'var(--radius-full)',
                border: activeTab === idx ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
                backgroundColor: activeTab === idx ? 'var(--primary-light)' : 'var(--bg-surface)',
                color: activeTab === idx ? 'var(--primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all var(--transition-fast)'
              }}
            >
              {prop.category}
            </button>
          ))}
        </div>

        {/* Simulated Property Card Container */}
        <div 
          className="glass-card card-hover"
          style={{
            maxWidth: '1020px',
            margin: '0 auto',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(226, 232, 240, 0.9)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))' }}>
            
            {/* Left Visual Area */}
            <div 
              style={{
                background: activeProp.gradient,
                padding: 'clamp(1.5rem, 4vw, 2.25rem)',
                color: '#FFFFFF',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '340px'
              }}
            >
              {/* Top Badges */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <span className="badge badge-dark" style={{ alignSelf: 'flex-start' }}>
                    <ShieldCheck size={13} color="#10B981" /> 100% PG Dekho Verified
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)' }}>
                    {activeProp.type}
                  </span>
                </div>

                <button
                  onClick={() => setSavedFavorite(!savedFavorite)}
                  aria-label="Save to favorites"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: savedFavorite ? '#FF5722' : '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    flexShrink: 0
                  }}
                >
                  <Heart size={18} fill={savedFavorite ? '#FF5722' : 'none'} />
                </button>
              </div>

              {/* Center Abstract Room Blueprint */}
              <div 
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  margin: '1.5rem 0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
                    Verified Stay Preview
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', fontWeight: 700, color: '#FBBF24' }}>
                    <Star size={14} fill="#FBBF24" /> {activeProp.rating} <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400, fontSize: '0.75rem' }}>({activeProp.reviewCount})</span>
                  </span>
                </div>

                <p style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem', color: '#FFFFFF' }}>
                  {activeProp.sharing}
                </p>

                <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.4 }}>
                  {activeProp.food}
                </p>
              </div>

              {/* Bottom Visual Highlights */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(255,255,255,0.95)', flexWrap: 'wrap', gap: '0.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <GraduationCap size={15} color="#93C5FD" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 600 }}>{activeProp.distance}</span>
                </div>
                <span className="badge badge-success" style={{ fontSize: '0.72rem' }}>
                  Available Now
                </span>
              </div>
            </div>

            {/* Right Information & Amenities Area */}
            <div style={{ padding: 'clamp(1.5rem, 3.5vw, 2.25rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                
                {/* Title & Location */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.5rem' }}>
                    {activeProp.tags.map((tag, i) => (
                      <span key={i} className="badge badge-primary" style={{ fontSize: '0.7rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {activeProp.title}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <MapPin size={15} color="var(--primary)" style={{ flexShrink: 0 }} />
                      <span>{activeProp.location}</span>
                    </p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 600 }}>
                      <Clock size={14} style={{ flexShrink: 0 }} />
                      <span>Commute to College / Institution: {activeProp.collegeCommute || activeProp.distance}</span>
                    </p>
                  </div>
                </div>

                {/* Transparent Rent & Deposit Strip */}
                <div 
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1.15rem',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '1px solid var(--border-light)',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>
                      All-Inclusive Monthly Rent
                    </span>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem' }}>
                      <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                        ₹{activeProp.rent}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ month</span>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>
                      Security Deposit
                    </span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {activeProp.deposit}
                    </span>
                  </div>
                </div>

                {/* Amenities Grid */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.65rem' }}>
                    Included Amenities & Facilities
                  </h4>

                  <div 
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                      gap: '0.5rem'
                    }}
                  >
                    {activeProp.amenities.map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <div 
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            fontSize: '0.8rem',
                            color: 'var(--text-primary)',
                            padding: '0.4rem 0.5rem',
                            borderRadius: 'var(--radius-sm)',
                            backgroundColor: 'var(--bg-surface)',
                            border: '1px solid var(--border-light)'
                          }}
                        >
                          <IconComponent size={14} color="var(--primary)" style={{ flexShrink: 0 }} />
                          <span style={{ fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleActionClick('Schedule a Visit')}
                  className="btn btn-primary"
                  style={{ flex: '1 1 160px', justifyContent: 'center' }}
                >
                  <Calendar size={16} />
                  <span>Schedule Visit</span>
                </button>

                <button
                  onClick={() => handleActionClick('360° Room Walkthrough')}
                  className="btn btn-secondary"
                  style={{ flex: '1 1 130px', justifyContent: 'center' }}
                >
                  <Eye size={16} />
                  <span>360° Tour</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Prototype Toast Notification */}
        {modalMessage && (
          <div 
            style={{
              position: 'fixed',
              bottom: '1.5rem',
              right: '1.5rem',
              left: '1.5rem',
              maxWidth: '380px',
              margin: '0 auto 0 auto',
              zIndex: 100,
              backgroundColor: 'var(--bg-dark)',
              color: '#FFFFFF',
              padding: '0.9rem 1.15rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem'
            }}
          >
            <Sparkles size={18} color="#FBBF24" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '0.82rem', color: '#FFFFFF', margin: 0 }}>
              {modalMessage}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
