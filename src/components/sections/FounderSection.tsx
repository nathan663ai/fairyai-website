import React, { useState } from 'react';

const FounderSection: React.FC = () => {
  const founderImages = [
    { src: '/images/Founder_Original.png?v=2', label: 'Original' },
    { src: '/images/Founder_Transform1.jpg', label: 'FairyAI Style 1' },
    { src: '/images/Founder_Transform2.jpg', label: 'FairyAI Style 2' }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % founderImages.length);
  };
  return (
    <section id="about" className="py-6 md:py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
            Built by a Parent Who Gets It
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Founder Image */}
          <div className="md:col-span-1 flex flex-col items-center gap-3">
            <div
              className="w-40 h-40 md:w-48 md:h-48 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl rounded-full shadow-xl overflow-hidden"
              onClick={handleImageClick}
            >
              <img
                src={founderImages[currentImageIndex].src}
                alt={`Nathan - ${founderImages[currentImageIndex].label}`}
                loading="lazy"
                className="w-full h-full object-cover transition-opacity duration-500"
                style={{ objectPosition: currentImageIndex === 0 ? 'center 65%' : 'center' }}
              />
            </div>

            {/* Label and instruction */}
            <div className="text-center">
              <p className="text-sm font-semibold text-fairy-gold-500 mb-1">
                {founderImages[currentImageIndex].label}
              </p>
              <p className="text-xs text-neutral-500 italic">
                Click to see me transformed by FairyAI!
              </p>
            </div>
          </div>

          {/* Story Text */}
          <div className="md:col-span-2">
            <div className="prose max-w-none">
              <p className="text-base text-neutral-700 leading-relaxed mb-4">
                Hi, I'm <span className="font-semibold text-neutral-900">Nathan</span>, a parent just like you. FairyAI was born from bedtime chaos in my own home. What started as a side project to help my daughter has grown into a community of families turning bedtime battles into magical moments.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-4">
                I didn't want to build just another "type a sentence, get a story" app. I wanted characters my kids would remember, stories that could grow into chapter books, and safety I'd trust with my own family. FairyAI is what I built for my kids. I hope it becomes part of your bedtime routine too.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed italic">
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
