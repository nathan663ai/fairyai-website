import React from 'react';

const SafetySection: React.FC = () => {
  const safetyFeatures = [
    'No sign-up required to use',
    'No ads, no tracking',
    'GDPR + COPPA compliant',
    'No personal child data collected',
    'Story filters ensure wholesome content'
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-soft-blue-50 to-soft-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
            <svg className="w-16 h-16 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Built for Safety
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Your child's safety and privacy are non-negotiable.
          </p>
        </div>

        {/* Safety Features List */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <ul className="space-y-6">
            {safetyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                {/* Checkmark Icon */}
                <div className="flex-shrink-0 w-8 h-8 bg-soft-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Feature Text */}
                <span className="text-lg text-neutral-700 pt-1">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
