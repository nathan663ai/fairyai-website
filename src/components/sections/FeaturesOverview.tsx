import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesOverview: React.FC = () => {
  const features = [
    {
      title: 'Persistent Characters',
      description: 'Create characters with traits, abilities, and custom images that work across all stories and songs.',
      icon: (
        <svg className="w-12 h-12 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      linkTo: '/how-it-works'
    },
    {
      title: 'Stories & Chapters',
      description: 'Quick Story for instant creation or Story Wizard for control—continue into multi-chapter books.',
      icon: (
        <svg className="w-12 h-12 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      linkTo: '/how-it-works'
    },
    {
      title: 'Fairy Corner',
      description: 'Classic tales, nursery rhymes, and daily AI-generated stories—2 always free for guests.',
      icon: (
        <svg className="w-12 h-12 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      linkTo: '/how-it-works'
    },
    {
      title: 'Songs & Narration',
      description: 'Create songs from stories or characters, choose from 4 voices in 11 languages with bedtime pacing.',
      icon: (
        <svg className="w-12 h-12 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      linkTo: '/how-it-works'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Everything You Need for Magical Bedtimes
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Characters, stories, songs, and narration—all in one safe, parent-built app.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Icon */}
              <div className="mb-4">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600 text-sm mb-4">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <Link
                to={feature.linkTo}
                className="inline-flex items-center gap-1 text-soft-blue-600 hover:text-soft-blue-700 font-medium text-sm transition-colors"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* See All Features Link */}
        <div className="text-center">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-soft-blue-600 hover:text-soft-blue-700 font-medium transition-colors"
          >
            See all features and pricing
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
