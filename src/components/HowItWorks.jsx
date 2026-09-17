import React from 'react';
import { Search, SlidersHorizontal, KeyRound, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Discover',
    subtitle: 'Browse PGs, rooms, hostels & rentals',
    description: 'Explore verified listings in your preferred locality. Filter by boys/girls/unisex, sharing occupancy, food options, and air conditioning.',
    badgeText: 'Curated Hubs'
  },
  {
    step: '02',
    icon: SlidersHorizontal,
    title: 'Compare',
    subtitle: 'Evaluate rent, amenities & rules',
    description: 'Stack properties side-by-side to review true monthly rent, security deposit terms, meal quality ratings, WiFi speeds, and house rules.',
    badgeText: 'Side-by-Side'
  },
  {
    step: '03',
    icon: KeyRound,
    title: 'Move In',
    subtitle: 'Connect with owner & settle in',
    description: 'Schedule a physical or video walkthrough, verify the room in person, connect directly with the owner without broker fees, and lock your bed.',
    badgeText: 'Zero Commission'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section" style={{ backgroundColor: 'var(--bg-surface)', position: 'relative', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
            <span className="section-tag" style={{ marginBottom: 0 }}>
              <Sparkles size={14} />
              <span>Simple 3-Step Flow</span>
            </span>
            <span className="badge badge-warning" style={{ fontSize: '0.72rem' }}>
              Feature in Pipeline
            </span>
          </div>

          <h2 className="section-title">
            Finding your next place, <br />
            simplified.
          </h2>
          <p className="section-subtitle">
            No endless broker calls. No confusing fake photos. Just a clean, guided journey from searching to unlocking your room.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid-3" style={{ position: 'relative' }}>
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="glass-card card-hover"
                style={{
                  padding: '2.25rem 2rem',
                  borderRadius: 'var(--radius-xl)',
                  position: 'relative',
                  backgroundColor: 'var(--bg-main)',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div 
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: 'var(--radius-lg)',
                        background: 'linear-gradient(135deg, var(--primary-light) 0%, #E0E7FF 100%)',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(79, 70, 229, 0.15)'
                      }}
                    >
                      <Icon size={26} strokeWidth={2.2} />
                    </div>

                    <span 
                      style={{ 
                        fontSize: '1.8rem', 
                        fontWeight: 800, 
                        color: 'var(--border-light)', 
                        fontFamily: 'var(--font-heading)' 
                      }}
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="badge badge-primary" style={{ marginBottom: '0.75rem', fontSize: '0.72rem' }}>
                    {item.badgeText}
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.85rem' }}>
                    {item.subtitle}
                  </p>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem', 
                    marginTop: '2rem', 
                    paddingTop: '1rem', 
                    borderTop: '1px solid var(--border-light)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  <CheckCircle2 size={15} color="#10B981" />
                  <span>Planned for launch release</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
