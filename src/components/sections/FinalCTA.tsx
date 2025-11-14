import React from 'react';
import DownloadButtons from '../ui/DownloadButtons';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-soft-blue-500 via-soft-blue-600 to-soft-green-500 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to turn bedtime into a magical adventure?
        </h2>

        {/* Subtext */}
        <p className="text-xl md:text-2xl mb-8 text-soft-blue-50">
          Try it free today – 6 stories included.
        </p>

        {/* Download Buttons */}
        <div className="mb-6">
          <DownloadButtons />
        </div>

        {/* Additional Note */}
        <p className="text-sm text-soft-blue-100 italic">
          No credit card required. Start creating magic tonight.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
