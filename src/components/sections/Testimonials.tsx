import React from 'react';

const Testimonials: React.FC = () => {
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
    }
  ];

  return (
    <section id="testimonials" className="py-10 md:py-14 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
            What Parents Are Saying
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center">
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
                <div className="text-center">
                  <p className="font-semibold text-neutral-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
