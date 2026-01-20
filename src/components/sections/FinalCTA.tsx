import React from 'react';
import DownloadButtons from '../ui/DownloadButtons';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
          Ready to build your family's story universe?
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl mb-3 text-neutral-700">
          Start simple: 2 taps and you're reading. Go deep: build characters, multi-chapter books, songs and narration.
        </p>

        <p className="text-base mb-6 text-neutral-800 font-semibold">
          ✓ No signup needed • ✓ Free to try • ✓ Safe, age-appropriate content
        </p>

        {/* Download Buttons */}
        <div className="mb-4">
          <DownloadButtons variant="gradient" />
        </div>

        {/* Additional Note */}
        <p className="text-sm text-neutral-600">
          Browse Fairy Corner as a guest first • Premium plans with monthly Fairy Dust allocation
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
