import React from 'react';
import DownloadButtons from '../ui/DownloadButtons';
import ImagePlaceholder from '../ui/ImagePlaceholder';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-soft-blue-50 via-white to-soft-green-50 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              Bedtime stories that grow with your child
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-6">
              Create characters they know, continue the same adventure night after night, and add songs and narration—all in a safe app built by a parent for parents.
            </p>

            {/* 3 Key Bullets */}
            <ul className="text-left space-y-3 mb-8 max-w-xl mx-auto md:mx-0">
              <li className="flex items-start gap-3">
                <span className="text-soft-blue-600 text-xl flex-shrink-0">✓</span>
                <span className="text-neutral-700">Age-smart stories for ages 2–12</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-soft-blue-600 text-xl flex-shrink-0">✓</span>
                <span className="text-neutral-700">Characters, chapters, songs and narration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-soft-blue-600 text-xl flex-shrink-0">✓</span>
                <span className="text-neutral-700">No ads, no trackers, built for children's safety</span>
              </li>
            </ul>

            <p className="text-sm text-neutral-600 mb-4 italic">
              First stories free • No credit card required
            </p>

            {/* Download Buttons */}
            <div className="mb-6">
              <DownloadButtons />
            </div>
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
      <div className="absolute top-0 right-0 w-64 h-64 bg-soft-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-green-100 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Hero;
