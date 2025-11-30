import React from 'react';
import Hero from '../components/sections/Hero';
import USPStrip from '../components/sections/USPStrip';
import HowItWorks from '../components/sections/HowItWorks';
import FeaturesOverview from '../components/sections/FeaturesOverview';
import ExperienceTheMagic from '../components/sections/ExperienceTheMagic';
import Testimonials from '../components/sections/Testimonials';
import FounderSection from '../components/sections/FounderSection';
import FinalCTA from '../components/sections/FinalCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <USPStrip />
      <HowItWorks />
      <FeaturesOverview />
      <ExperienceTheMagic />
      <Testimonials />
      <FounderSection />
      <FinalCTA />
    </>
  );
};

export default HomePage;
