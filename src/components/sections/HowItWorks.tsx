import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Build Characters',
      description: 'Create characters with traits, abilities, and custom images that appear across all your stories.',
      imageSrc: '/images/steps/build-characters.png'
    },
    {
      number: 2,
      title: 'Create Stories',
      description: 'Quick Story for instant magic, or Story Wizard for full control over theme, moral, and plot.',
      imageSrc: '/images/steps/create-stories.png'
    },
    {
      number: 3,
      title: 'Listen, Read & Sing',
      description: 'Read together, play narration in 12 languages, or turn your story into a catchy song.',
      imageSrc: '/images/steps/listen-read.png'
    },
    {
      number: 4,
      title: 'Continue Adventures',
      description: 'Create the next chapter of your adventure. Your new story picks up exactly where the last one ended — or start a brand new tale anytime.',
      imageSrc: '/images/steps/continue-adventures.png'
    }
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600">
            Creating magical stories in 4 simple steps
          </p>
        </div>

        {/* Desktop: Zigzag Layout */}
        <div className="hidden lg:block relative">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.number} className="relative">
                {/* Step Row */}
                <div className={`flex items-center gap-8 ${isEven ? '' : 'flex-row-reverse'} mb-8`}>
                  {/* Image Side */}
                  <div className="w-1/2 flex justify-center">
                    <div className="relative">
                      {/* Number Badge */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-fairy-gold-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg z-10">
                        {step.number}
                      </div>
                      {/* Image */}
                      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50 shadow-xl overflow-hidden">
                        <img
                          src={step.imageSrc}
                          alt={step.title}
                          loading="lazy"
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className={`w-1/2 flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-sm ${isEven ? 'text-left' : 'text-right'}`}>
                      <h3 className="font-display text-2xl font-semibold mb-3 text-neutral-900">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Curved Arrow to Next Step */}
                {index < steps.length - 1 && (
                  <div className={`flex ${isEven ? 'justify-end pr-24' : 'justify-start pl-24'} -mt-4 mb-4`}>
                    <svg
                      className={`w-16 h-16 text-fairy-gold-400 ${isEven ? '' : 'scale-x-[-1]'}`}
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M8 8 C 32 8, 56 32, 56 56"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M48 48 L 56 56 L 48 56"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile: Vertical Stack with Arrows */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center">
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 bg-fairy-gold-500 rounded-full text-white text-lg font-bold shadow-lg mb-4">
                {step.number}
              </div>

              {/* Image */}
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50 shadow-lg overflow-hidden mb-4">
                <img
                  src={step.imageSrc}
                  alt={step.title}
                  loading="lazy"
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Title and Description */}
              <h3 className="font-display text-xl font-semibold mb-2 text-neutral-900">
                {step.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {/* Arrow to Next Step */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-6">
                  <svg className="w-8 h-8 text-fairy-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Fairy Corner Callout */}
        <div className="mt-16 bg-gradient-to-r from-soft-blue-50 to-fairy-gold-50 rounded-2xl p-8 md:p-10 text-center shadow-lg border border-soft-blue-100">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-10 h-10 text-fairy-gold-500" strokeWidth={1.5} />
          </div>
          <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-3">
            Or skip straight to the magic
          </h3>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
            Explore Fairy Corner with hundreds of classic tales and fresh AI stories added daily. No creation needed.
          </p>
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 bg-fairy-gold-500 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Browse Fairy Corner
            <Sparkles className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
