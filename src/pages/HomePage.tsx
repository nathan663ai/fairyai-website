import React from 'react';
import Hero from '../components/sections/Hero';
import Simple3Steps from '../components/sections/Simple3Steps';
import FeaturesOverview from '../components/sections/FeaturesOverview';
import WhyDifferentTeaser from '../components/sections/WhyDifferentTeaser';
import ExampleStories from '../components/sections/ExampleStories';
import Testimonials from '../components/sections/Testimonials';
import FounderSection from '../components/sections/FounderSection';
import SafetyTeaser from '../components/sections/SafetyTeaser';
import FinalCTA from '../components/sections/FinalCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Simple3Steps />
      <FeaturesOverview />
      <WhyDifferentTeaser />
      <ExampleStories />
      <Testimonials />
      <FounderSection />
      <SafetyTeaser />
      <FinalCTA />
    </>
  );
};

export default HomePage;
