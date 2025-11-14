import React from 'react';

const TryItFree: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-soft-blue-50 to-soft-green-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-neutral-900">Try FairyAI free in </span>
            <span className="text-gradient-blue-green">two ways</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            No credit card required. Start exploring right away.
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Guest Mode Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-soft-blue-200 hover:border-soft-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="mb-4">
              <svg className="w-12 h-12 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-3">
              Browse as a guest
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Read 2 classic fairy tales and 2 nursery rhymes in Fairy Corner—no signup, no card, just tap and read.
            </p>
          </div>

          {/* Free Account Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-soft-green-200 hover:border-soft-green-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-soft-green-50/50 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <div className="mb-4">
                <svg className="w-12 h-12 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-3">
                Create a free parent account
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-3">
                Sign up as a parent and get a bundle of Fairy Dust so you can try creating characters, stories, songs and narrations.
              </p>
              <p className="text-sm font-semibold text-soft-green-700 bg-soft-green-50 px-3 py-2 rounded-lg inline-block">
                No credit card required • 100% free to start
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryItFree;
