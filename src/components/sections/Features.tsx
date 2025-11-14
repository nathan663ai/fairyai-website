import React from 'react';
import Card from '../ui/Card';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🛡️',
      title: 'Built-In Safety',
      description: 'Every story passes through content filters and age-appropriate guardrails. We ensure wholesome, safe content that parents can trust.'
    },
    {
      icon: '🎙️',
      title: 'Narrated Audio',
      description: 'Immersive voice-over with subtle background effects brings stories to life. Perfect for winding down or when you need a break.'
    },
    {
      icon: '🌍',
      title: 'Multi-Language Support',
      description: 'Generate stories in English, Spanish, French, German, Italian, Portuguese, and more – perfect for bilingual families.'
    },
    {
      icon: '👥',
      title: 'Character Continuity',
      description: 'Characters persist across stories, creating ongoing adventures your child can follow night after night.'
    },
    {
      icon: '🎯',
      title: 'For Ages 2–12',
      description: 'Language complexity and themes adapt automatically based on your child\'s age group – from toddlers to tweens.'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Everything You Need for Magical Bedtime
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Built with care, designed for families
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
