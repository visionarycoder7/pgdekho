import React from 'react';
import { Phone, MessageSquare, Building2, Sparkles } from 'lucide-react';

export default function TopBanner() {
  const phoneNumber = '8240318774';
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent('Hi PG Dekho team, I want to list my property.')}`;
  const callUrl = `tel:+91${phoneNumber}`;

  return (
    <div 
      className="top-owner-banner"
      style={{
        background: 'linear-gradient(90deg, #0F172A 0%, #1E1B4B 45%, #064E3B 100%)',
        color: '#FFFFFF',
        padding: '0.65rem 1rem',
        fontSize: '0.88rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        position: 'relative',
        zIndex: 60,
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.2)'
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}
      >
        {/* Left: Message & Notification */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
          <span 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: 'rgba(37, 211, 102, 0.2)',
              color: '#4ADE80',
              padding: '0.2rem 0.6rem',
              borderRadius: '9999px',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              border: '1px solid rgba(74, 222, 128, 0.35)'
            }}
          >
            <span 
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#22C55E',
                display: 'inline-block',
                boxShadow: '0 0 8px #22C55E'
              }} 
            />
            Property Owners
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 800, letterSpacing: '0.02em', color: '#FFFFFF', textTransform: 'uppercase', fontSize: '0.86rem' }}>
              Want to list your property?
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.85rem' }}>
              Then contact <strong style={{ color: '#FCD34D', letterSpacing: '0.03em' }}>{phoneNumber}</strong>
            </span>
            <span style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.12)', 
              padding: '0.15rem 0.5rem', 
              borderRadius: 'var(--radius-sm)', 
              fontSize: '0.76rem',
              color: '#E2E8F0',
              fontWeight: 500
            }}>
              (This is also a WhatsApp number)
            </span>
          </div>
        </div>

        {/* Right: Quick Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {/* WhatsApp Direct Chat Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              padding: '0.38rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              fontWeight: 700,
              fontSize: '0.8rem',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(37, 211, 102, 0.4)',
              transition: 'transform 0.15s ease, background-color 0.15s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#20bd5a'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
          >
            <MessageSquare size={14} fill="#FFFFFF" />
            <span>WhatsApp Us</span>
          </a>

          {/* Direct Call Button */}
          <a
            href={callUrl}
            aria-label="Call Owner Helpdesk"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              padding: '0.38rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              fontWeight: 600,
              fontSize: '0.8rem',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
          >
            <Phone size={13} />
            <span>Call {phoneNumber}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
