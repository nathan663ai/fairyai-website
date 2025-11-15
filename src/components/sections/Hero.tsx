import React from 'react';
import DownloadButtons from '../ui/DownloadButtons';
import ImagePlaceholder from '../ui/ImagePlaceholder';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-soft-blue-50 via-white to-soft-green-50 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center">
            {/* Emotional Hook */}
            <p className="text-lg md:text-xl text-soft-green-600 font-semibold mb-4">
              End bedtime battles. Start stories they'll beg to continue.
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
              Turn bedtime into their favourite adventure, starring the characters they know and love
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-8 font-medium">
              I spent 10 months building the bedtime story app I wanted for my family. Persistent characters, multi-chapter books, songs, narration in 12 languages. All in one app.
            </p>

            {/* Download Buttons - Larger with gradient */}
            <div className="mb-4 scale-125 transform">
              <DownloadButtons variant="gradient" />
            </div>

            {/* Trust Point */}
            <p className="text-sm text-neutral-600 mb-8 font-medium">
              No sign-up required • First stories free
            </p>

            {/* Social Proof */}
            <p className="text-sm text-neutral-500 italic mb-6">
              Loved by families around the world • 50,000+ stories created
            </p>
          </div>

          {/* Right Column - App Screenshot */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <ImagePlaceholder
                label="App Screenshot"
                aspectRatio="portrait"
                className="shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-soft-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-green-100 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Hero;
