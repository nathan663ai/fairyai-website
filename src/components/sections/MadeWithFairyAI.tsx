import React from 'react';

const MadeWithFairyAI: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-soft-blue-100 via-soft-green-50 to-soft-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-2 border-soft-blue-200">
          {/* Sparkle Icon */}
          <div className="text-center mb-6">
            <span className="text-6xl">✨</span>
          </div>

          {/* Main Heading */}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-6">
            <span className="text-fairy-gold-500">
              Everything You See Was Created with FairyAI
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-lg text-center text-neutral-700 mb-4 max-w-2xl mx-auto">
            All the characters, stories, narrations, and songs on this website were generated using the FairyAI app in seconds.
          </p>

          {/* CTA Text */}
          <p className="text-xl font-semibold text-center text-soft-blue-600 mb-6">
            This is what YOUR stories could look like!
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center gap-4 text-2xl">
            <span>🎨</span>
            <span>📖</span>
            <span>🎵</span>
            <span>🎙️</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeWithFairyAI;
