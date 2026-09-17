import React from 'react';
import { ArrowLeftRight, Compass, ShieldAlert, Users, Sparkles, CheckCircle2 } from 'lucide-react';

const valueProps = [
  {
    icon: ArrowLeftRight,
    title: 'Compare Properties',
    description: 'Compare rent, amenities, food menus, deposit requirements, and curfew policies side-by-side in one click.',
    tag: 'Smart Comparison'
  },
  {
    icon: Compass,
    title: 'Better Discovery',
    description: 'Find verified accommodation filtered by distance to your college or tech park, sharing preference, and lifestyle.',
    tag: 'Location First'
  },
  {
    icon: ShieldAlert,
    title: 'Transparent Information',
    description: 'Zero hidden maintenance, upfront deposit refund timelines, and real photos verified by the PG Dekho ground team.',
    tag: 'Zero Surprises'
  },
  {
    icon: Users,
    title: 'Built for Renters',
    description: 'Tailored specifically for students and working professionals migrating to new cities across India.',
    tag: 'Community Driven'
  }
];

export default function ValueStrip() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-main)', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Why PG Dekho</span>
          </div>
          <h2 className="section-title">
            Everything you need to find <br />
            your next place.
          </h2>
          <p className="section-subtitle">
            Renting in India shouldn't feel like a gamble. We are solving the frustrating pain points of broken listings and broker drama.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid-4">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div 
                key={idx}
                className="glass-card card-hover"
                style={{
                  padding: '1.75rem 1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-surface)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div 
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--primary-light)',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={22} strokeWidth={2} />
                    </div>

                    <span className="badge badge-primary" style={{ fontSize: '0.68rem' }}>
                      {prop.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.65rem', color: 'var(--text-primary)' }}>
                    {prop.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {prop.description}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600 }}>
                  <CheckCircle2 size={14} />
                  <span>Platform Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
