import React from 'react';
import { Link } from 'react-router-dom';

const Simple3Steps: React.FC = () => {
  const gradients = [
    'from-soft-blue-500 to-soft-blue-600',
    'from-soft-green-500 to-soft-green-600',
    'from-fairy-purple-500 to-fairy-purple-600'
  ];

  const steps = [
    {
      number: 1,
      title: 'Pick age & character',
      description: 'Choose your child\'s age (2-3 up to 12+) and select a character or create a new one',
      icon: (
        <svg className="w-12 h-12 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: 2,
      title: 'Choose story idea',
      description: 'Tap Quick Story for instant creation or use the Story Wizard for more control',
      icon: (
        <svg className="w-12 h-12 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      number: 3,
      title: 'Enjoy the story',
      description: 'Read together or listen with narration. Continue tomorrow night to build multi-chapter books',
      icon: (
        <svg className="w-12 h-12 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-magical">3 Steps</span>
            <span className="text-neutral-900"> to Your Bedtime Story</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Too tired? Start in 2 taps. Want more control? We've got that too.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Number Badge */}
              <div className="mb-4 flex flex-col items-center">
                <div className={`w-14 h-14 bg-gradient-to-br ${gradients[step.number - 1]} rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300`}>
                  {step.number}
                </div>
                {/* Icon */}
                <div className="mb-4">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                {step.title}
              </h3>
              <p className="text-neutral-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Learn More Link */}
        <div className="text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-soft-blue-600 hover:text-soft-blue-700 font-medium transition-colors"
          >
            Learn more about all features
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Simple3Steps;
