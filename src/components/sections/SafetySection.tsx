import React from 'react';

const SafetySection: React.FC = () => {
  const neverDo = [
    'No ads or trackers',
    'No selling data to third parties',
    'No storing unnecessary personal information',
    'We never require photos of your child. Characters are designed to be created from imagination, traits and parent-approved images.'
  ];

  const activelyEnforce = [
    'Age-based content filters block violence, fear, explicit content, and substances, tailored to each age group',
    'Age-appropriate word counts and themes (400 words for toddlers → 2000 for teens)',
    'Rate limiting and abuse protection per user, per IP, per operation',
    'Input length limits and file size restrictions (16MB cap)',
    'Hashed passwords, security headers (CSP, HSTS, XSS protection)',
    'Soft deletion with 90-day recovery window'
  ];

  const yourControls = [
    'Transparent Fairy Dust economy (costs shown upfront, refunds on failures)',
    'Full account deletion anytime',
    'Language, notification, and marketing preference controls',
    'Export and download your stories and audio to keep offline',
    'No lock-in, no hidden fees'
  ];

  return (
    <section id="safety" className="py-16 md:py-24 bg-gradient-to-br from-soft-blue-50 to-soft-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
            <svg className="w-16 h-16 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Safety isn't a feature. It's the foundation.
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-2">
            You're trusting us with bedtime. Here's exactly what we do, and don't do, to earn that trust.
          </p>
        </div>

        {/* Three Blocks */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Block 1: What we never do */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="font-display text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">🚫</span>
              What we never do
            </h3>
            <ul className="space-y-4">
              {neverDo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0 mt-1">•</span>
                  <span className="text-neutral-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Block 2: What we actively enforce */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="font-display text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">✅</span>
              What we actively enforce
            </h3>
            <ul className="space-y-4">
              {activelyEnforce.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-soft-green-500 flex-shrink-0 mt-1">•</span>
                  <span className="text-neutral-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Block 3: Your controls */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="font-display text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">🎛️</span>
              Your controls
            </h3>
            <ul className="space-y-4">
              {yourControls.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-soft-blue-500 flex-shrink-0 mt-1">•</span>
                  <span className="text-neutral-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <p className="text-lg text-neutral-700 italic">
            We're parents building for parents. If we wouldn't use it with our kids, we don't ship it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
