import React, { useState } from 'react';
import { 
  Wifi, 
  Utensils, 
  Wind, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  Star, 
  MapPin, 
  IndianRupee, 
  Tv, 
  Zap, 
  Lock, 
  Heart,
  Eye,
  Calendar,
  Share2,
  Info
} from 'lucide-react';

const mockProperties = [
  {
    id: 'prop-1',
    category: 'Single Private Room',
    title: 'The Green Oasis Premium Co-living',
    location: 'HSR Layout, Sector 4, Bengaluru',
    distance: '450m from BDA Complex & Tech Corridors',
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
      { name: 'In-Room Air Conditioning', icon: Wind },
      { name: '100% Power Backup', icon: Zap },
      { name: 'Biometric Access', icon: Lock },
      { name: 'Smart TV & Desk', icon: Tv },
      { name: 'Daily Housekeeping', icon: Sparkles },
      { name: 'CCTV Security 24/7', icon: ShieldCheck },
    ],
    gradient: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)'
  },
  {
    id: 'prop-2',
    category: '2-Sharing Student & Pro PG',
    title: 'Silver Oaks Residency & Hostel',
    location: 'Hinjawadi Phase 1, Pune',
    distance: '600m from Infosys Circle & Megapolis',
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
    distance: '5 mins to DLF CyberHub & Rapid Metro',
    rent: '19,000',
    deposit: '1 Month Security',
    sharing: 'Full Private Flat (1BHK/Studio)',
    type: 'Working Professionals / Couples',
    rating: '4.95',
    reviewCount: 112,
    tags: ['Gated Society', 'Fully Furnished', 'No Gate Curfew'],
    food: 'Equipped Modular Kitchen (Self-Cooking)',
    amenities: [
      { name: 'Dedicated 500Mbps FTTH', icon: Wifi },
      { name: 'Modular Kitchen & Fridge', icon: Utensils },
      { name: 'Inverter Split AC', icon: Wind },
      { name: 'Clubhouse & Gym Access', icon: Star },
      { name: 'Smart Video Doorbell', icon: Lock },
      { name: 'Automatic Washing Machine', icon: Sparkles },
      { name: 'Multi-Tier Security', icon: ShieldCheck },
      { name: 'Covered Two/Four Wheeler Parking', icon: Zap },
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
    setModalMessage(`"${actionName}" will be functional when the platform goes live. Join the waitlist for VIP early access!`);
    setTimeout(() => {
      setModalMessage(null);
    }, 3800);
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
            maxWidth: '900px',
            margin: '0 auto 2rem auto',
            padding: '0.75rem 1.25rem',
            backgroundColor: 'var(--primary-light)',
            border: '1px dashed rgba(79, 70, 229, 0.4)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Info size={18} color="var(--primary)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              Interactive Prototype Mockup • Live Preview Mode
            </span>
          </div>
          <span className="badge badge-primary" style={{ fontSize: '0.75rem' }}>
            Future Listing Layout
          </span>
        </div>

        {/* Tab Switcher for Sample Stay Categories */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}
        >
          {mockProperties.map((prop, idx) => (
            <button
              key={prop.id}
              onClick={() => { setActiveTab(idx); setSavedFavorite(false); }}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                border: activeTab === idx ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
                backgroundColor: activeTab === idx ? 'var(--primary-light)' : 'var(--bg-surface)',
                color: activeTab === idx ? 'var(--primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            
            {/* Left Visual Area (CSS Generated Realistic Space Showcase) */}
            <div 
              style={{
                background: activeProp.gradient,
                padding: '2rem',
                color: '#FFFFFF',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '380px'
              }}
            >
              {/* Top Badges */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span className="badge badge-dark" style={{ alignSelf: 'flex-start' }}>
                    <ShieldCheck size={13} color="#10B981" /> 100% PG Dekho Verified
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.8)' }}>
                    {activeProp.type}
                  </span>
                </div>

                <button
                  onClick={() => setSavedFavorite(!savedFavorite)}
                  aria-label="Save to favorites"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: savedFavorite ? '#FF5722' : '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <Heart size={18} fill={savedFavorite ? '#FF5722' : 'none'} />
                </button>
              </div>

              {/* Center Abstract Room Blueprint Illustration */}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
                    Verified Stay Preview
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', fontWeight: 700, color: '#FBBF24' }}>
                    <Star size={14} fill="#FBBF24" /> {activeProp.rating} <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400, fontSize: '0.75rem' }}>({activeProp.reviewCount})</span>
                  </span>
                </div>

                <p style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.35rem', color: '#FFFFFF' }}>
                  {activeProp.sharing}
                </p>

                <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.4 }}>
                  {activeProp.food}
                </p>
              </div>

              {/* Bottom Visual Highlights */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={14} color="#FF8A65" />
                  <span>{activeProp.distance}</span>
                </div>
                <span className="badge badge-success" style={{ fontSize: '0.72rem' }}>
                  3 Rooms Available
                </span>
              </div>
            </div>

            {/* Right Information & Amenities Area */}
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {activeProp.title}
                  </h3>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    <MapPin size={15} color="var(--primary)" />
                    {activeProp.location}
                  </p>
                </div>

                {/* Transparent Rent & Deposit Strip */}
                <div 
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.9rem 1.25rem',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>
                      All-Inclusive Monthly Rent
                    </span>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem' }}>
                      <span style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                        ₹{activeProp.rent}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ month</span>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right', borderLeft: '1px solid var(--border-light)', paddingLeft: '1rem' }}>
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>
                      Security Deposit
                    </span>
                    <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {activeProp.deposit}
                    </span>
                  </div>
                </div>

                {/* Amenities Grid */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.75rem' }}>
                    Included Amenities & Facilities
                  </h4>

                  <div 
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
                      gap: '0.65rem'
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
                            gap: '0.5rem',
                            fontSize: '0.8125rem',
                            color: 'var(--text-primary)',
                            padding: '0.4rem 0.5rem',
                            borderRadius: 'var(--radius-sm)',
                            backgroundColor: 'var(--bg-surface)',
                            border: '1px solid var(--border-light)'
                          }}
                        >
                          <IconComponent size={15} color="var(--primary)" />
                          <span style={{ fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Action Buttons (Demonstrating Future Features) */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleActionClick('Schedule a Visit')}
                  className="btn btn-primary"
                  style={{ flex: '1 1 180px', justifyContent: 'center' }}
                >
                  <Calendar size={16} />
                  <span>Schedule Visit</span>
                </button>

                <button
                  onClick={() => handleActionClick('360° Room Walkthrough')}
                  className="btn btn-secondary"
                  style={{ flex: '1 1 150px', justifyContent: 'center' }}
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
              bottom: '2rem',
              right: '2rem',
              zIndex: 100,
              maxWidth: '380px',
              backgroundColor: 'var(--bg-dark)',
              color: '#FFFFFF',
              padding: '1rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              animation: 'slideUp 0.3s ease-out'
            }}
          >
            <Sparkles size={20} color="#FBBF24" />
            <p style={{ fontSize: '0.85rem', color: '#FFFFFF', margin: 0 }}>
              {modalMessage}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
