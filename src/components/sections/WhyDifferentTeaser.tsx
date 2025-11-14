import React from 'react';
import { Link } from 'react-router-dom';

const WhyDifferentTeaser: React.FC = () => {
  const topDifferentiators = [
    {
      title: 'Characters They Actually Remember',
      description: 'Persistent characters with traits, abilities, and visual identity that work across unlimited stories and songs.',
      icon: (
        <svg className="w-10 h-10 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: 'Stories That Grow Into Books',
      description: 'Continue the same adventure night after night with 2-tap continuation or advanced Story Wizard mode.',
      icon: (
        <svg className="w-10 h-10 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Age-Smart Content',
      description: '5 age groups (2-3, 4-6, 7-9, 10-12, 12+) with vocabulary, themes, and word counts that adapt automatically.',
      icon: (
        <svg className="w-10 h-10 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Why FairyAI is Different
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Not just another AI story generator. Here's what sets us apart.
          </p>
        </div>

        {/* Top 3 Differentiators */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {topDifferentiators.map((item, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-soft-green-100 to-soft-blue-100 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* See All Link */}
        <div className="text-center">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-soft-blue-600 hover:text-soft-blue-700 font-medium transition-colors"
          >
            See all 7 reasons why we're different
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentTeaser;
