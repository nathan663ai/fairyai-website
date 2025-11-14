import React from 'react';
import Card from '../ui/Card';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'Now my kids can\'t wait for bedtime!',
      name: 'Sarah',
      role: 'Mum of 2'
    },
    {
      quote: 'His ideas come to life in the stories!',
      name: 'James',
      role: 'Dad of 3'
    },
    {
      quote: 'Perfect mix of fun and safe.',
      name: 'Emily',
      role: 'Mum of 1'
    },
    {
      quote: 'My daughter asks for "her character" every night. The continuity is brilliant!',
      name: 'Michael',
      role: 'Dad of 2'
    },
    {
      quote: 'As a busy parent, the narration feature is a lifesaver. Quality time without the exhaustion.',
      name: 'Priya',
      role: 'Mum of 2'
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            What Parents Are Saying
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              {/* Quote Icon */}
              <div className="text-soft-blue-400 text-5xl mb-4 leading-none">"</div>

              {/* Quote Text */}
              <p className="text-lg text-neutral-700 mb-6 flex-grow italic">
                {testimonial.quote}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 bg-gradient-to-br from-soft-blue-400 to-soft-green-400 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>

                {/* Name and Role */}
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
