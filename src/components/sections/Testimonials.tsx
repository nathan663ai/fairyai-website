import React from 'react';
import Card from '../ui/Card';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'My son made a character called "Professor Whiskers" and we\'re on chapter 11 now. He literally counts down the hours until bedtime.',
      name: 'Sarah',
      role: 'Mum of 2 (ages 6 & 8)'
    },
    {
      quote: 'The French narration is really good quality. My daughter switches between English and French versions of the same story, which is great for her language learning.',
      name: 'Jean-Luc',
      role: 'Dad of 1 (age 4)'
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
    <section id="testimonials" className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
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
