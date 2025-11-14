import React from 'react';
import ImagePlaceholder from '../ui/ImagePlaceholder';

const FounderSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Built by a Parent Who Gets It
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Founder Image */}
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64">
              <ImagePlaceholder
                label="Founder Portrait"
                aspectRatio="square"
                className="rounded-full shadow-xl"
              />
            </div>
          </div>

          {/* Story Text */}
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Hi, I'm <span className="font-semibold text-neutral-900">Nathan</span>, a parent just like you. FairyAI was born from bedtime chaos in my own home and the desire to give kids something truly special.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                What started as a side project to help my daughter has now grown into a community of families turning bedtime battles into magical moments. I built this app because I needed it for my family, and now I'm thrilled to share it with yours – shaped by the feedback of amazing parents along the way.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                I didn't want to build just another "type a sentence, get a story" app. I wanted a proper engine—characters my kids would remember, stories that could grow into chapter books, safety I'd trust with my own family. FairyAI is what I built for my kids. I hope it becomes part of your bedtime routine too.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed italic">
                — Nathan, Dad & Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
