import React from 'react';
import Card from '../ui/Card';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'Great all round product at great value, would recommend to any parent!',
      name: 'Lucy',
      role: 'Mother of 2'
    },
    {
      quote: 'A magical personalised adventure! My favorite thing is being able to turn your loved ones into heroes.',
      name: 'Deborah',
      role: 'Mother of 3'
    },
    {
      quote: 'Was skeptical about AI stories but the Character Wizard changed my mind. We made a character based on my son and now every story feels like it\'s actually about him. Much better than I expected.',
      name: 'Priya',
      role: 'Mum of 1 (age 7)'
    },
    {
      quote: 'The songs are surprisingly catchy! We made one about her character and now she sings it constantly. Bit annoying actually but she loves it.',
      name: 'Emily',
      role: 'Mum of 1 (age 5)'
    },
    {
      quote: "Created a dragon called Spark three months ago. He's been in loads of stories and my kids genuinely talk about him like he's real. The free Fairy Corner stuff is handy when we run out of credits.",
      name: 'James',
      role: 'Dad of 3 (ages 4, 6, 9)'
    }
  ];

  return (
    <section id="testimonials" className="py-6 md:py-10 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            What Parents Are Saying
          </h2>
          <p className="text-lg text-neutral-600">
            Swipe to read more reviews
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80 snap-start">
                <Card className="h-full flex flex-col p-4">
                  {/* Quote Icon */}
                  <div className="text-soft-blue-400 text-4xl mb-3 leading-none">"</div>

                  {/* Quote Text */}
                  <p className="text-base text-neutral-700 mb-4 flex-grow italic">
                    {testimonial.quote}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    {/* Avatar Placeholder */}
                    <div className="w-10 h-10 bg-gradient-to-br from-soft-blue-400 to-soft-green-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>

                    {/* Name and Role */}
                    <div>
                      <p className="font-semibold text-neutral-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-neutral-500">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
