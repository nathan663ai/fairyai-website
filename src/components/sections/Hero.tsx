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
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
              Bedtime stories that grow with your child
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-6 font-medium">
              Create characters they know, continue the same adventure night after night, and add songs and narration—all in a safe app built by a parent for parents.
            </p>

            {/* 3 Key Bullets */}
            <ul className="space-y-3 mb-8 max-w-xl mx-auto">
              <li className="flex items-center justify-center gap-3">
                <span className="text-soft-blue-600 text-xl flex-shrink-0">✓</span>
                <span className="text-neutral-700">Age-smart stories for ages 2–12</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-soft-blue-600 text-xl flex-shrink-0">✓</span>
                <span className="text-neutral-700">Characters, chapters, songs and narration</span>
              </li>
              <li className="flex items-center justify-center gap-3">
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

            {/* Free Trial Options */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 max-w-xl mx-auto border border-neutral-200 text-center">
              <p className="text-sm font-semibold text-neutral-900 mb-2">Try it free:</p>
              <ul className="space-y-1 text-sm text-neutral-700">
                <li className="flex items-center justify-center gap-2">
                  <span className="text-soft-blue-600">•</span>
                  <span>Browse without signup</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-soft-blue-600">•</span>
                  <span>Or create a free account for full access + trial dust</span>
                </li>
              </ul>
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-soft-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-green-100 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Hero;
