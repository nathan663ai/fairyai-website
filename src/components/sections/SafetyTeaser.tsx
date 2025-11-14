import React from 'react';
import { Link } from 'react-router-dom';

const SafetyTeaser: React.FC = () => {
  const safetyPromises = [
    'No ads or trackers',
    'Age-appropriate content filters',
    'No selling your data',
    'Full account control'
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-soft-blue-50 to-soft-green-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Icon & Heading */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-soft-blue-500 to-soft-green-500 rounded-full mb-6 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Safety isn't a feature. It's the foundation.
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                Built by a parent for parents. If we wouldn't use it with our kids, we don't ship it.
              </p>
            </div>

            {/* Right Column - Promises */}
            <div>
              <ul className="space-y-3 mb-6">
                {safetyPromises.map((promise, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-soft-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-800 font-medium">{promise}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/safety"
                className="inline-flex items-center gap-2 text-soft-blue-600 hover:text-soft-blue-700 font-semibold transition-colors"
              >
                See our complete safety commitment
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyTeaser;
