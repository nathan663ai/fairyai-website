import React from 'react';

const WhyFairyAI: React.FC = () => {
  const reasons = [
    {
      title: 'Safety First',
      description: 'Every story passes through content filters and age-appropriate guardrails. No ads, no social features, no surprises.',
      imageSrc: '/images/why/safety.png'
    },
    {
      title: 'Real Quality',
      description: 'Not generic AI slop. Persistent characters with real personalities, multi-chapter books, custom songs with actual melodies.',
      imageSrc: '/images/why/quality.png'
    },
    {
      title: 'Built by Parents',
      description: 'Built by a dad, shaped by families. Every feature comes from real bedtime needs, and we\'re always listening.',
      imageSrc: '/images/why/parents.png'
    }
  ];

  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            Why FairyAI?
          </h2>
          <p className="text-lg text-neutral-600">
            Not just another AI story app
          </p>
        </div>

        {/* Desktop: Horizontal with Arrows */}
        <div className="hidden lg:flex items-start justify-between gap-4">
          {reasons.map((reason, index) => (
            <React.Fragment key={reason.title}>
              {/* Reason Card */}
              <div className="flex-1 text-center">
                {/* Large Circular Illustration */}
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50 flex items-center justify-center shadow-lg mb-4">
                  <img
                    src={reason.imageSrc}
                    alt={reason.title}
                    loading="lazy"
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Title and Description */}
                <h3 className="font-display text-lg font-semibold mb-2 text-neutral-900">{reason.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{reason.description}</p>
              </div>

              {/* Arrow Connector */}
              {index < reasons.length - 1 && (
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
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              {/* Large Circular Illustration */}
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50 flex items-center justify-center shadow-lg mb-4">
                <img
                  src={reason.imageSrc}
                  alt={reason.title}
                  loading="lazy"
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Title and Description */}
              <h3 className="font-display text-lg font-semibold mb-2 text-neutral-900">{reason.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFairyAI;
