import React from 'react';
import Hero from '../components/sections/Hero';
import WhyFairyAI from '../components/sections/WhyFairyAI';
import HowItWorks from '../components/sections/HowItWorks';
import ExperienceTheMagic from '../components/sections/ExperienceTheMagic';
import Testimonials from '../components/sections/Testimonials';
import FounderSection from '../components/sections/FounderSection';
import FinalCTA from '../components/sections/FinalCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <WhyFairyAI />
      <HowItWorks />
      <ExperienceTheMagic />
      <Testimonials />
      <FounderSection />
      <FinalCTA />
    </>
  );
};

export default HomePage;
