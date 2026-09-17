import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const faqs = [
  {
    q: 'When will PG Dekho be officially available?',
    a: 'We are currently running private alpha testing in select pockets of Bengaluru (Koramangala, HSR Layout) and Pune (Hinjawadi). Our public Beta launch is scheduled for Q3 2026. Users on the waitlist get first access.'
  },
  {
    q: 'Is PG Dekho free for students and renters?',
    a: 'Yes! Searching, comparing properties, checking amenity specs, food menus, and directly connecting with property owners will be 100% free for renters. We do not charge traditional brokerage fees.'
  },
  {
    q: 'How does PG Dekho verify PG & hostel listings?',
    a: 'Our ground verification team inspects the property for real room dimensions, tests WiFi upload/download speeds, checks meal kitchen cleanliness, and validates owner identity before assigning a "PG Dekho Verified" badge.'
  },
  {
    q: 'I am a PG / Hostel owner. How can I get listed?',
    a: 'You can join our waitlist selecting the "Property Owner" role. Our onboarding team will get in touch with you for priority photography and inventory setup ahead of public rollout.'
  },
  {
    q: 'Which cities will be supported in the initial launch?',
    a: 'Our initial rollout covers top student and IT hubs: Bengaluru, Pune, Delhi NCR (Noida, Gurgaon), Hyderabad, Kota, Mumbai, and Chennai.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our upcoming platform and early access rollout.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  border: isOpen ? '1.5px solid var(--primary)' : '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-surface)',
                  overflow: 'hidden',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: 'var(--text-primary)',
                    fontWeight: 700,
                    fontSize: '1.02rem',
                    fontFamily: 'inherit'
                  }}
                >
                  <span>{faq.q}</span>
                  <div 
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--primary-light)' : 'var(--bg-subtle)',
                      color: isOpen ? 'var(--primary)' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div 
                    style={{
                      padding: '0 1.5rem 1.25rem 1.5rem',
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '0.85rem'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
