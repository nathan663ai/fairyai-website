import React from 'react';

const WhyDifferent: React.FC = () => {
  const differentiators = [
    {
      number: 1,
      title: 'Persistent character universe',
      description: 'Characters aren\'t one-off. They have traits, abilities, visual identity, and influence every story they\'re in. Reuse them forever.'
    },
    {
      number: 2,
      title: 'Multi-chapter continuation engine',
      description: 'Most tools stop at one-off stories. FairyAI lets you grow them into multi-chapter books. Instant 2-tap continuation or advanced mode with plot control. Auto-grouped into books.'
    },
    {
      number: 3,
      title: 'Age-intelligent generation',
      description: '5 age groups (2-3, 4-6, 7-9, 10-12, 12+), each with different vocabulary, themes, word counts, and safety rules. Not one-size-fits-all.'
    },
    {
      number: 4,
      title: 'True multi-modal',
      description: 'Stories, character images, cover art, narration in 11 languages with accents, Suno-powered songs with lyrics. Full creative stack, not just text.'
    },
    {
      number: 5,
      title: '11+ languages with cultural guidance',
      description: 'Not just translation. Cultural context, age-appropriate themes per language, native-quality narration.'
    },
    {
      number: 6,
      title: 'Curated + generated hybrid',
      description: 'Fairy Corner library: hand-picked classics, AI daily stories, nursery rhymes. Plus your unlimited custom creations. Best of both worlds.'
    },
    {
      number: 7,
      title: 'Production-grade safety & infrastructure',
      description: 'Age-based content filters, rate limiting, abuse protection, input validation, secure deletion, no PII logging. Built like enterprise software because your family deserves it.'
    }
  ];

  return (
    <section id="why-different" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            More than a prompt box
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            You've seen the simple web generators. Type a sentence, get a story, done. That's not us. Here's what makes FairyAI different:
          </p>
        </div>

        {/* Differentiators List */}
        <div className="space-y-8">
          {differentiators.map((item) => (
            <div
              key={item.number}
              className="bg-neutral-50 rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                {/* Number Badge */}
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-soft-blue-500 to-soft-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  {item.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
