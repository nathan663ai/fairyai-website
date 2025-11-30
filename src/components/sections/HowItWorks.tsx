import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Create Characters',
      description: 'Turn photos into story heroes, or describe them from imagination. Pick from 6 art styles.',
      emoji: '🎨'
    },
    {
      number: 2,
      title: 'Generate Stories',
      description: 'Pick a theme, add your characters, and watch unique tales appear in seconds.',
      emoji: '✨'
    },
    {
      number: 3,
      title: 'Listen Together',
      description: 'Choose a voice and language, or read it yourself. Perfect for bedtime.',
      emoji: '🎧'
    },
    {
      number: 4,
      title: 'Songs & Sequels',
      description: 'Turn stories into catchy songs, or continue the adventure tomorrow night.',
      emoji: '🎵'
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

        {/* Desktop: Horizontal with Curved Arrows */}
        <div className="hidden lg:flex items-start justify-between gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Step Card */}
              <div className="flex-1 text-center">
                {/* Number ABOVE Circle */}
                <div className="text-4xl md:text-5xl font-bold text-fairy-gold-500 mb-3">
                  {step.number}
                </div>

                {/* Large Circular Illustration */}
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50 flex items-center justify-center shadow-lg mb-4">
                  <span className="text-5xl">{step.emoji}</span>
                </div>

                {/* Title and Description */}
                <h3 className="font-display text-lg font-semibold mb-2 text-neutral-900">{step.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Curved Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="flex items-center pt-20">
                  <svg className="w-10 h-10 text-fairy-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: Vertical Stack (no arrows) */}
        <div className="lg:hidden grid gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Number ABOVE Circle */}
              <div className="text-4xl font-bold text-fairy-gold-500 mb-3">
                {step.number}
              </div>

              {/* Large Circular Illustration */}
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50 flex items-center justify-center shadow-lg mb-4">
                <span className="text-5xl">{step.emoji}</span>
              </div>

              {/* Title and Description */}
              <h3 className="font-display text-lg font-semibold mb-2 text-neutral-900">{step.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
