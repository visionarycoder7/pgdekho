import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PlatformPreview from '../components/PlatformPreview';
import ValueStrip from '../components/ValueStrip';
import HowItWorks from '../components/HowItWorks';
import OwnerSection from '../components/OwnerSection';
import FutureFeatures from '../components/FutureFeatures';
import FAQSection from '../components/FAQSection';
import Waitlist from '../components/Waitlist';
import Footer from '../components/Footer';

export default function Home() {
  const [targetRole, setTargetRole] = useState('renter');

  const handleOwnerAction = () => {
    setTargetRole('owner');
    const waitlistEl = document.getElementById('waitlist');
    if (waitlistEl) {
      waitlistEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      <main style={{ flex: 1 }}>
        {/* 2. Hero Section with Concept Search Bar */}
        <Hero />

        {/* 3. Hero Visual / Interactive Platform Preview Mockup */}
        <PlatformPreview />

        {/* 4. Trust / Value Propositions Strip */}
        <ValueStrip />

        {/* 5. 3-Step Guided Journey */}
        <HowItWorks />

        {/* 6. Dedicated Property Owner Showcase */}
        <OwnerSection onJoinWaitlistAsOwner={handleOwnerAction} />

        {/* 7. Upcoming Product Features & Roadmap */}
        <FutureFeatures />

        {/* 8. Frequently Asked Questions */}
        <FAQSection />

        {/* 9. Waitlist Conversion Section */}
        <Waitlist initialRole={targetRole} />
      </main>

      {/* 10. Professional Footer */}
      <Footer />
    </div>
  );
}
