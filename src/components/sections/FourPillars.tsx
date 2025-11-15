import React from 'react';
import ImagePlaceholder from '../ui/ImagePlaceholder';

const FourPillars: React.FC = () => {
  const pillars = [
    {
      id: 'characters',
      icon: '👥',
      headline: 'Persistent characters with personality',
      title: 'Characters that actually matter',
      bullets: [
        'Character Wizard or Quick Create: types, traits, abilities, custom descriptions',
        'AI-generated images with 3 variations to choose from (~60 seconds)',
        'Characters remember their details across every story and song',
        'Coming soon: characters from photos, choose-your-own-path stories, parent-recorded stories'
      ]
    },
    {
      id: 'stories',
      icon: '📖',
      headline: 'From bedtime prompt to multi-chapter saga',
      title: 'Stories that grow with your child',
      bullets: [
        'Quick Story (single prompt) or Guided Wizard (theme, moral, setting, age, language, length)',
        'Age-intelligent engine adapts vocabulary and themes for 2-3 up to 12+ year-olds',
        '2-tap instant continuation or advanced mode with custom hints and new characters',
        'Stories auto-group into books of 5 chapters with "Play All" narration',
        '12 languages: English (UK/US), Spanish, French, German, Italian, Portuguese, Dutch, Polish, Chinese, Japanese, Korean'
      ]
    },
    {
      id: 'music',
      icon: '🎵',
      headline: 'More than just text on a screen',
      title: 'Music, songs & narration',
      bullets: [
        'On-demand narration: 4 AI voices, multiple accents, 11+ languages, bedtime-optimised pacing',
        'Generate songs from your stories, characters, or classic fairy tales',
        'Original songs: pick style, mood, theme, language',
        'Full lyrics, album art, MP3 export, links back to source story/character'
      ]
    },
    {
      id: 'fairy-corner',
      icon: '🧚',
      headline: 'Curated classics meet AI creativity',
      title: 'Fairy Corner: your family\'s story library',
      bullets: [
        'Daily "Story of the Day" rotates with 12-language selector',
        'Classic fairy tales (2 always free) with pre-narrated audio',
        'AI-generated daily stories (premium)',
        'Audio nursery rhymes (2 always free)',
        'Browse-before-signup guest mode with free content',
        'Quick access to all your stories, characters & songs'
      ]
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Four pillars. One storytelling studio.
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Everything you need to create, grow, and enjoy stories together
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="space-y-16">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-lg text-soft-blue-600 mb-6">
                  {pillar.headline}
                </p>
                <ul className="space-y-3">
                  {pillar.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <span className="text-soft-green-500 text-lg flex-shrink-0 mt-1">•</span>
                      <span className="text-neutral-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Placeholder */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <ImagePlaceholder
                  label={`${pillar.title} Illustration`}
                  aspectRatio="square"
                  className="shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourPillars;
