import React from 'react';
import Hero from '../components/sections/Hero';
import HowItWorks from '../components/sections/HowItWorks';
import Features from '../components/sections/Features';
import ExampleStories from '../components/sections/ExampleStories';
import Testimonials from '../components/sections/Testimonials';
import FounderSection from '../components/sections/FounderSection';
import SafetySection from '../components/sections/SafetySection';
import FinalCTA from '../components/sections/FinalCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <ExampleStories />
      <Testimonials />
      <FounderSection />
      <SafetySection />
      <FinalCTA />
    </>
  );
};

export default HomePage;
