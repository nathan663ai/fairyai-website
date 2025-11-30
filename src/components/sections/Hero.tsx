import React from 'react';
import DownloadButtons from '../ui/DownloadButtons';
import ImagePlaceholder from '../ui/ImagePlaceholder';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Banner Image */}
      <ImagePlaceholder
        label="Hero Banner - Parent & Child Reading Together in Cozy Bedtime Setting"
        aspectRatio="banner"
        className="absolute inset-0 w-full h-full object-cover rounded-none"
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

      {/* Content Overlay - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-xl">
          {/* Emotional Hook */}
          <p className="text-lg md:text-xl text-white/90 font-semibold mb-4 drop-shadow-md">
            End bedtime battles. Start stories they'll beg to continue.
          </p>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
            Stories your kids will remember. Characters they'll love.
          </h1>

          {/* Download Buttons - Light Variant for Dark Background */}
          <div id="download" className="mb-4">
            <DownloadButtons variant="light" />
          </div>

          {/* Trust Point */}
          <p className="text-sm text-white/80 font-medium">
            ✓ No sign-up required • ✓ 6 free stories
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
