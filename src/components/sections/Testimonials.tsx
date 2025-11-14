import React from 'react';
import Card from '../ui/Card';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'We\'ve been continuing the same story for two weeks now—it\'s become a 4-chapter book about their characters. Bedtime used to be a battle. Now they beg for the next chapter!',
      name: 'Sarah',
      role: 'Mum of 2 (ages 6 & 8)'
    },
    {
      quote: 'The narration in French is incredible. My daughter loves hearing stories in both English and French, and the voices sound so natural. The Fairy Corner nursery rhymes are on repeat during car rides.',
      name: 'Jean-Luc',
      role: 'Dad of 1 (age 4)'
    },
    {
      quote: 'I was skeptical about "AI stories" until I used the Character Wizard. We built a character based on my son\'s personality, and now every story feels personal. He asks for stories about "his" character every night. The continuation feature is genius—we\'re on chapter 8!',
      name: 'Priya',
      role: 'Mum of 1 (age 7)'
    },
    {
      quote: 'The songs are absolutely brilliant! My daughter created a character, then made a song about her, and now we sing it every morning. The lyrics are age-appropriate and catchy. I love that we can download the MP3s for car journeys.',
      name: 'Emily',
      role: 'Mum of 1 (age 5)'
    },
    {
      quote: "We created a dragon character three months ago, and he's been in 15+ stories now. My kids feel like he's a real friend. The Fairy Corner classics are perfect for when we run low on Dust - my youngest loves the daily AI stories.",
      name: 'James',
      role: 'Dad of 3 (ages 4, 6, 9)'
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
