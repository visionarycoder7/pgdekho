import React, { useState } from 'react';
import { 
  Building2, 
  Camera, 
  Users, 
  CalendarClock, 
  MessageSquare, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  Info
} from 'lucide-react';

const ownerPerks = [
  {
    icon: Camera,
    title: 'Easy Multi-Room Listing',
    desc: 'Upload high-resolution room photos, floor layouts, and highlight specific room sharing options.'
  },
  {
    icon: CalendarClock,
    title: 'Live Bed & Room Availability',
    desc: 'Update occupancy in real-time. Stop getting calls for rooms that are already booked.'
  },
  {
    icon: Users,
    title: 'Verified Tenant Enquiries',
    desc: 'Receive direct, filtered enquiries from genuine students and working professionals.'
  },
  {
    icon: MessageSquare,
    title: 'Zero Broker Intermediaries',
    desc: 'Talk directly with prospective tenants. No aggressive commission cuts or broker negotiations.'
  }
];

export default function OwnerSection({ onJoinWaitlistAsOwner }) {
  const [showModal, setShowModal] = useState(false);

  const handleOwnerClick = () => {
    setShowModal(true);
    if (onJoinWaitlistAsOwner) {
      onJoinWaitlistAsOwner();
    }
  };

  return (
    <section id="owners" className="section" style={{ backgroundColor: 'var(--bg-main)', position: 'relative' }}>
      <div className="container">
        
        {/* Visually Distinct Premium Dark Card Container */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.45)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Subtle Background Glow */}
          <div 
            style={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '450px',
              height: '450px',
              background: 'radial-gradient(circle, rgba(79, 70, 229, 0.25) 0%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            
            {/* Top Tag */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span className="badge badge-accent" style={{ padding: '0.4rem 0.9rem', fontSize: '0.78rem' }}>
                <Building2 size={14} />
                <span>For PG & Property Owners</span>
              </span>
              <span className="badge badge-dark" style={{ fontSize: '0.75rem' }}>
                Owner Portal Coming Soon
              </span>
            </div>

            {/* Grid Layout: Left Content, Right Perks */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              
              {/* Left Column: Heading & Value */}
              <div>
                <h2 
                  style={{ 
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', 
                    fontWeight: 800, 
                    color: '#FFFFFF', 
                    lineHeight: 1.2, 
                    marginBottom: '1.25rem' 
                  }}
                >
                  Have a property <br />
                  to rent?
                </h2>

                <p 
                  style={{ 
                    fontSize: '1.05rem', 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    lineHeight: 1.6, 
                    marginBottom: '2rem' 
                  }}
                >
                  Fill vacant beds faster with verified tenants. PG Dekho gives property owners 
                  and hostel managers a dedicated suite to showcase amenities, manage availability, 
                  and receive genuine inquiries.
                </p>

                {/* Owner Stats Preview */}
                <div 
                  style={{ 
                    display: 'flex', 
                    gap: '2rem', 
                    padding: '1.25rem 0', 
                    borderTop: '1px solid rgba(255, 255, 255, 0.12)', 
                    borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                    marginBottom: '2rem',
                    flexWrap: 'wrap'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'var(--font-heading)', display: 'block' }}>
                      0%
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                      Brokerage Commissions
                    </span>
                  </div>

                  <div>
                    <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#4ADE80', fontFamily: 'var(--font-heading)', display: 'block' }}>
                      100%
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                      Direct Verified Leads
                    </span>
                  </div>

                  <div>
                    <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FBBF24', fontFamily: 'var(--font-heading)', display: 'block' }}>
                      24/7
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                      Bed Inventory Control
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <button
                    onClick={handleOwnerClick}
                    className="btn btn-accent btn-lg"
                    style={{ borderRadius: 'var(--radius-md)' }}
                  >
                    <span>List Your Property — Coming Soon</span>
                    <ArrowRight size={18} />
                  </button>

                  <span style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                    * Early owner onboarding will open prior to public launch.
                  </span>
                </div>
              </div>

              {/* Right Column: Owner Perks Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1rem' }}>
                {ownerPerks.map((perk, index) => {
                  const Icon = perk.icon;
                  return (
                    <div 
                      key={index}
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '1.25rem 1.5rem',
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'flex-start',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <div 
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: 'var(--radius-md)',
                          backgroundColor: 'rgba(255, 87, 34, 0.2)',
                          color: '#FF8A65',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Icon size={22} />
                      </div>

                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                          {perk.title}
                        </h4>
                        <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5 }}>
                          {perk.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>

        {/* Modal / Alert for Owner Click */}
        {showModal && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              backdropFilter: 'blur(4px)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}
          >
            <div 
              className="glass-card"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                maxWidth: '480px',
                width: '100%',
                boxShadow: 'var(--shadow-xl)',
                textAlign: 'center',
                position: 'relative',
                animation: 'scaleIn 0.2s ease-out'
              }}
            >
              <div 
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-light)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto'
                }}
              >
                <Sparkles size={28} />
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Owner Registration Launching Soon
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                We are currently onboarding selected PG and hostel owners in Bengaluru, Pune, and Delhi NCR for our private pilot.
                Join our waitlist below as an owner to get your property listed with priority verification!
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                <button
                  onClick={() => {
                    setShowModal(false);
                    const element = document.getElementById('waitlist');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-accent"
                >
                  Join Waitlist as Owner
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
