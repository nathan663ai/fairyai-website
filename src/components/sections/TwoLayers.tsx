import React from 'react';

const TwoLayers: React.FC = () => {
  const quickSteps = [
    {
      number: 1,
      title: 'Pick age group',
      description: 'Choose your child\'s age (2-3 up to 12+)',
      emoji: '🎯'
    },
    {
      number: 2,
      title: 'Tap Quick Story or pick a character',
      description: 'Describe what you want or choose from your characters',
      emoji: '✨'
    },
    {
      number: 3,
      title: 'Read or listen',
      description: 'Get a unique story with optional narration in your language',
      emoji: '📖'
    }
  ];

  const advancedCards = [
    {
      title: 'Character Wizard',
      description: 'Create characters with types, traits, magical abilities & AI-generated images. Reuse them across unlimited stories and songs.',
      icon: '🧙'
    },
    {
      title: 'Story Wizard',
      description: 'Choose theme, moral, setting, age group, language, length, perspective. Add multiple characters. Guide the plot or let the AI surprise you.',
      icon: '📚'
    },
    {
      title: 'Continuation Engine',
      description: '2-tap instant continuation or advanced mode with new characters, tone changes & plot hints. Stories auto-group into multi-chapter books.',
      icon: '📖'
    },
    {
      title: 'Music & Narration',
      description: 'Add narration in 4 voices with multiple accents. Generate songs from your stories, characters or classic tales. Export everything.',
      icon: '🎵'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            As simple or deep as you need tonight
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Start with 2 taps or build entire story universes
          </p>
        </div>

        {/* Row 1 - Quick Mode */}
        <div className="mb-16">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
            Too tired? Start in 2 taps
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {quickSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mb-4 flex flex-col items-center">
                  <div className="w-14 h-14 bg-soft-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-3 shadow-md">
                    {step.number}
                  </div>
                  <span className="text-4xl mb-3">{step.emoji}</span>
                </div>
                <h4 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-neutral-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Advanced Mode */}
        <div className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 rounded-2xl p-8 md:p-12">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
            Want control? Build your own universe
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {advancedCards.map((card, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{card.icon}</span>
                  <div>
                    <h4 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                      {card.title}
                    </h4>
                    <p className="text-neutral-600">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoLayers;
