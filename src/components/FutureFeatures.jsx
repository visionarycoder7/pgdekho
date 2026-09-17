import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  SlidersHorizontal, 
  ShieldCheck, 
  LayoutDashboard, 
  CalendarCheck2, 
  CreditCard, 
  Star, 
  Users2, 
  Video, 
  Sparkles,
  Milestone,
  CheckCircle2
} from 'lucide-react';

const roadmapFeatures = [
  {
    icon: Search,
    title: 'Smart Search & Locality Matcher',
    description: 'AI-assisted search matching you to stays based on office commute time, budget constraints, and lifestyle habits.',
    status: 'In Prototyping',
    statusType: 'accent',
    phase: 'Phase 1'
  },
  {
    icon: MapPin,
    title: 'Transit & Metro Proximity Scoring',
    description: 'Accurate pedestrian walking distance to nearby metro stations, bus stops, tech parks, and coaching institutes.',
    status: 'On Roadmap',
    statusType: 'primary',
    phase: 'Phase 1'
  },
  {
    icon: SlidersHorizontal,
    title: 'Granular Multi-Filters',
    description: 'Filter by exact dietary preferences (Pure Veg / Non-Veg mess), AC vs Non-AC, curfew timings, and deposit requirements.',
    status: 'Planned',
    statusType: 'primary',
    phase: 'Phase 1'
  },
  {
    icon: Video,
    title: '360° Virtual Walkthroughs',
    description: 'High-definition digital room tours and common area inspections before you travel across the city for a visit.',
    status: 'In Research',
    statusType: 'warning',
    phase: 'Phase 2'
  },
  {
    icon: ShieldCheck,
    title: 'Verified Property Badge System',
    description: 'Physical ground-inspection checkmarks confirming room dimensions, WiFi speed tests, and plumbing hygiene.',
    status: 'Planned',
    statusType: 'primary',
    phase: 'Phase 1'
  },
  {
    icon: LayoutDashboard,
    title: 'Owner & Warden Dashboard',
    description: 'Real-time room inventory management, occupancy tracking, and digital tenant onboarding for property managers.',
    status: 'In Prototyping',
    statusType: 'accent',
    phase: 'Phase 2'
  },
  {
    icon: CalendarCheck2,
    title: '1-Click Visit Scheduling',
    description: 'Book instant in-person or live video tour slots with owners directly without awkward phone tags.',
    status: 'Planned',
    statusType: 'primary',
    phase: 'Phase 2'
  },
  {
    icon: CreditCard,
    title: 'Deposit Escrow & Digital Agreement',
    description: 'Legally vetted rental agreements signed digitally with safe security deposit handling and transparent refund logs.',
    status: 'On Roadmap',
    statusType: 'warning',
    phase: 'Phase 3'
  },
  {
    icon: Star,
    title: 'Verified Food & Mess Ratings',
    description: 'Authentic reviews specifically evaluating daily meal hygiene, weekly menus, and breakfast quality by actual residents.',
    status: 'Planned',
    statusType: 'primary',
    phase: 'Phase 2'
  },
  {
    icon: Users2,
    title: 'Flatmate Compatibility Finder',
    description: 'Find compatible room partners based on work schedules, hygiene habits, and noise preferences for shared flats.',
    status: 'Concept Stage',
    statusType: 'warning',
    phase: 'Phase 3'
  }
];

export default function FutureFeatures() {
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredFeatures = filterCategory === 'all' 
    ? roadmapFeatures 
    : roadmapFeatures.filter(f => f.phase.toLowerCase().includes(filterCategory));

  return (
    <section id="roadmap" className="section" style={{ backgroundColor: 'var(--bg-surface)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Milestone size={14} />
            <span>Product Roadmap</span>
          </div>
          <h2 className="section-title">
            What's coming next.
          </h2>
          <p className="section-subtitle">
            We are engineering a full-cycle accommodation discovery ecosystem. Here is an honest look at what our engineering team is building.
          </p>

          {/* Phase Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setFilterCategory('all')}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: filterCategory === 'all' ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
                backgroundColor: filterCategory === 'all' ? 'var(--primary-light)' : 'var(--bg-surface)',
                color: filterCategory === 'all' ? 'var(--primary)' : 'var(--text-secondary)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              All Features ({roadmapFeatures.length})
            </button>
            <button
              onClick={() => setFilterCategory('phase 1')}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: filterCategory === 'phase 1' ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
                backgroundColor: filterCategory === 'phase 1' ? 'var(--primary-light)' : 'var(--bg-surface)',
                color: filterCategory === 'phase 1' ? 'var(--primary)' : 'var(--text-secondary)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Phase 1 (Launch Core)
            </button>
            <button
              onClick={() => setFilterCategory('phase 2')}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: filterCategory === 'phase 2' ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
                backgroundColor: filterCategory === 'phase 2' ? 'var(--primary-light)' : 'var(--bg-surface)',
                color: filterCategory === 'phase 2' ? 'var(--primary)' : 'var(--text-secondary)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Phase 2 (Experience Suite)
            </button>
            <button
              onClick={() => setFilterCategory('phase 3')}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: filterCategory === 'phase 3' ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
                backgroundColor: filterCategory === 'phase 3' ? 'var(--primary-light)' : 'var(--bg-surface)',
                color: filterCategory === 'phase 3' ? 'var(--primary)' : 'var(--text-secondary)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Phase 3 (Fintech & Community)
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div 
                key={index}
                className="glass-card card-hover"
                style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-main)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div 
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--primary-light)',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <span 
                      className={`badge ${
                        feat.statusType === 'accent' ? 'badge-accent' : 
                        feat.statusType === 'warning' ? 'badge-warning' : 'badge-primary'
                      }`}
                      style={{ fontSize: '0.72rem' }}
                    >
                      {feat.status}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                    {feat.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {feat.description}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{feat.phase}</span>
                  <span>Future Capability</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
