import React from 'react';
import Hero from '../components/sections/Hero';
import TryItFree from '../components/sections/TryItFree';
import Simple3Steps from '../components/sections/Simple3Steps';
import FeaturesOverview from '../components/sections/FeaturesOverview';
import WhyDifferentTeaser from '../components/sections/WhyDifferentTeaser';
import Testimonials from '../components/sections/Testimonials';
import FounderSection from '../components/sections/FounderSection';
import SafetyTeaser from '../components/sections/SafetyTeaser';
import FinalCTA from '../components/sections/FinalCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Simple3Steps />
      <WhyDifferentTeaser />
      <FeaturesOverview />
      <SafetyTeaser />
      <TryItFree />
      <Testimonials />
      <FounderSection />
      <FinalCTA />
    </>
  );
};

export default HomePage;
