import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Carousel Arrow Button component
const CarouselArrow: React.FC<{
  direction: 'left' | 'right';
  onClick: () => void;
}> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`hidden md:flex absolute ${direction === 'left' ? 'left-0 -translate-x-4' : 'right-0 translate-x-4'} top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg items-center justify-center transition-all hover:scale-110`}
    aria-label={`Scroll ${direction}`}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-6 h-6 text-neutral-700" />
    ) : (
      <ChevronRight className="w-6 h-6 text-neutral-700" />
    )}
  </button>
);

const Testimonials: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };
  const testimonials = [
    {
      quote: "Great all round product at great value, would recommend to any parent!",
      name: "Lucy",
      role: "Mum of 2"
    },
    {
      quote: "A magical personalised adventure! My favourite thing is being able to turn your loved ones into heroes.",
      name: "Deborah",
      role: "Mum of 3"
    },
    {
      quote: "We made a character based on my son — now every story feels like it's actually about him.",
      name: "Priya",
      role: "Mum of 1"
    },
    {
      quote: "We created a dragon called Spark. Three months later, my kids still talk about him like he's real.",
      name: "James",
      role: "Dad of 2"
    },
    {
      quote: "It encourages his creativity and imagination as he creates his own characters and adventures. It's become a cherished part of our nightly routine.",
      name: "Elliott",
      role: "Dad of 1"
    }
  ];

  return (
    <section id="testimonials" className="py-10 md:py-14 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
            What Parents Are Saying
          </h2>
        </div>

        {/* Testimonials - Horizontal scroll with arrows */}
        <div className="relative">
          <CarouselArrow direction="left" onClick={() => scroll('left')} />
          <CarouselArrow direction="right" onClick={() => scroll('right')} />

          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-4 px-4"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-72 snap-start flex flex-col items-center">
                {/* Speech Bubble */}
                <div className="relative bg-white rounded-2xl shadow-md border border-fairy-gold-200 p-5 mb-4 w-full">
                  {/* Quote Text */}
                  <p className="text-sm text-neutral-700 leading-relaxed text-center">
                    "{testimonial.quote}"
                  </p>

                  {/* Speech Bubble Tail */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 bg-white border-r border-b border-fairy-gold-200 rotate-45 transform origin-center"></div>
                  </div>
                </div>

                {/* Author Info - Below bubble */}
                <div className="flex items-center gap-2 mt-1">
                  {/* Avatar */}
                  <div className="w-8 h-8 bg-fairy-gold-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {testimonial.name.charAt(0)}
                  </div>
                  {/* Name and Role */}
                  <div className="text-left">
                    <p className="font-semibold text-neutral-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-neutral-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Swipe Hint - Mobile Only */}
          <p className="text-center text-sm text-neutral-500 mt-2 md:hidden flex items-center justify-center gap-1">
            <ChevronLeft className="w-4 h-4" /> Swipe to explore <ChevronRight className="w-4 h-4" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
