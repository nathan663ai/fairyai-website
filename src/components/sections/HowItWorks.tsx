import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Create a Character',
      description: 'Choose traits, style, and avatar.',
      emoji: '✨'
    },
    {
      number: 2,
      title: 'Pick a Theme',
      description: 'Pirates, friendship, space adventures – or create your own.',
      emoji: '🚀'
    },
    {
      number: 3,
      title: 'Generate Your Story',
      description: 'AI creates a unique tale tailored to your child.',
      emoji: '📖'
    },
    {
      number: 4,
      title: 'Read or Listen Together',
      description: 'Enjoy professional narration or read it yourself.',
      emoji: '🎧'
    }
  ];

  return (
    <section id="how-it-works" className="py-6 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600">
            Creating magical stories in 4 simple steps
          </p>
        </div>

        {/* Desktop: Horizontal with Arrows */}
        <div className="hidden lg:flex items-start justify-between gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Step Card */}
              <div className="flex-1 text-center">
                <div className="bg-gradient-to-br from-soft-blue-500 to-soft-green-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3 shadow-lg">
                  {step.number}
                </div>
                <div className="text-3xl mb-2">{step.emoji}</div>
                <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600">{step.description}</p>
              </div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="flex items-center pt-6">
                  <svg className="w-8 h-8 text-soft-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: Vertical Stack (no arrows) */}
        <div className="lg:hidden grid gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="bg-gradient-to-br from-soft-blue-500 to-soft-green-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3 shadow-lg">
                {step.number}
              </div>
              <div className="text-3xl mb-2">{step.emoji}</div>
              <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
