import React from 'react';
import Hero from '../components/sections/Hero';
import TwoLayers from '../components/sections/TwoLayers';
import FourPillars from '../components/sections/FourPillars';
import WhyDifferent from '../components/sections/WhyDifferent';
import ExampleStories from '../components/sections/ExampleStories';
import Testimonials from '../components/sections/Testimonials';
import FounderSection from '../components/sections/FounderSection';
import SafetySection from '../components/sections/SafetySection';
import FinalCTA from '../components/sections/FinalCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <TwoLayers />
      <FourPillars />
      <WhyDifferent />
      <ExampleStories />
      <Testimonials />
      <FounderSection />
      <SafetySection />
      <FinalCTA />
    </>
  );
};

export default HomePage;
