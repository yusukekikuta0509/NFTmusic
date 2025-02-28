// components/LandingPage.js
import React from 'react';
import HeroSection from './HeroSection';
import OverviewSection from './OverviewSection';
import BenefitsSection from './BenefitsSection';
import ContactSection from './ContactSection';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <OverviewSection />
      <BenefitsSection />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
