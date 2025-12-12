import React from 'react';
import SEO from '../components/SEO';
import { MobileApplicationSchema } from '../components/SchemaMarkup';
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
      <SEO
        title="FairyAI - Personalised AI Bedtime Stories for Kids"
        description="Create magical bedtime stories with AI. Personalised characters, narration, and songs for children aged 2-12. Join thousands of parents making bedtime magical."
        canonical="/"
      />
      <MobileApplicationSchema />
      <Hero />
      <WhyFairyAI />
      <ExperienceTheMagic />
      <HowItWorks />
      <Testimonials />
      <FounderSection />
      <FinalCTA />
    </>
  );
};

export default HomePage;
