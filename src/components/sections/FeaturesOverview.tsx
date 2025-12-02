import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '../ui/Card';

const FeaturesOverview: React.FC = () => {
  const features = [
    {
      title: 'Persistent Characters',
      description: 'Create characters with traits and custom images that work across all stories and songs.',
      icon: (
        <svg className="w-10 h-10 text-soft-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Stories & Chapters',
      description: 'Quick Story for instant creation or Story Wizard for control. Continue into multi-chapter books.',
      icon: (
        <svg className="w-10 h-10 text-soft-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Fairy Corner',
      description: 'Classic tales, nursery rhymes, and daily AI stories. Two are always free for guests.',
      icon: (
        <svg className="w-10 h-10 text-soft-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: 'Songs & Narration',
      description: 'Create songs from stories, choose from 4 voices in 11 languages with bedtime pacing.',
      icon: (
        <svg className="w-10 h-10 text-soft-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      )
    },
    {
      title: 'Built-In Safety',
      description: 'Every story passes through content filters and age-appropriate guardrails for wholesome content.',
      icon: <Shield className="w-10 h-10 text-soft-blue-600 mx-auto" strokeWidth={1.5} />
    },
    {
      title: 'Multi-Language Support',
      description: 'Generate stories in English, Spanish, French, German, Italian, Portuguese, and more.',
      icon: <Globe className="w-10 h-10 text-soft-blue-600 mx-auto" strokeWidth={1.5} />
    }
  ];

  return (
    <section id="features" className="py-6 md:py-10 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            <span className="text-slate-900">Everything You Need for </span>
            <span className="text-soft-blue-600">Magical Bedtimes</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Swipe to explore all features
          </p>
        </div>

        {/* Horizontal Carousel */}
        <div className="relative mb-6">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4">
            {features.map((feature, index) => (
              <div key={index} className="flex-shrink-0 w-72 snap-start">
                <Card className="h-full text-center p-4">
                  {/* Icon */}
                  <div className="mb-3">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-semibold mb-2 text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {feature.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
          {/* Swipe Hint - Mobile Only */}
          <p className="text-center text-sm text-neutral-500 mt-2 md:hidden flex items-center justify-center gap-1">
            <ChevronLeft className="w-4 h-4" /> Swipe to explore <ChevronRight className="w-4 h-4" />
          </p>
        </div>

        {/* See All Features Link */}
        <div className="text-center">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-soft-blue-600 hover:text-soft-blue-700 font-medium transition-colors"
          >
            See all features and pricing →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
