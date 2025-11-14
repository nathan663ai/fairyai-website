import React from 'react';
import ImagePlaceholder from '../ui/ImagePlaceholder';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Create a Character',
      description: 'Choose traits, style, and avatar to bring your child\'s imagination to life.',
      emoji: '✨'
    },
    {
      number: 2,
      title: 'Pick a Theme',
      description: 'Pirates, friendship, space adventures – pick from dozens of themes or create your own.',
      emoji: '🚀'
    },
    {
      number: 3,
      title: 'Generate Your Story',
      description: 'Our AI creates a unique tale tailored to your child\'s age and preferences.',
      emoji: '📖'
    },
    {
      number: 4,
      title: 'Read or Listen Together',
      description: 'Enjoy professional narration with background effects or read it yourself on screen.',
      emoji: '🎧'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Creating magical bedtime stories is as easy as 1, 2, 3, 4
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Step Number with Emoji */}
              <div className="mb-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-soft-blue-500 to-soft-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3 shadow-lg">
                  {step.number}
                </div>
                <span className="text-4xl">{step.emoji}</span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-600 mb-6">
                {step.description}
              </p>

              {/* Image Placeholder */}
              <ImagePlaceholder
                label={`${step.title} Screenshot`}
                aspectRatio="square"
                className="mx-auto max-w-[250px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
