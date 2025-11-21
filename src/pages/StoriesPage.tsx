import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import DownloadButtons from '../components/ui/DownloadButtons';

// Story Examples Data
const storyExamples = [
  {
    id: 'luna-brave-bunny',
    title: 'Luna the Brave Bunny',
    ageRange: '4-6 years',
    characterImage: '/images/characters/character1.jpg',
    creationMethod: 'quick_story' as const,
    description: 'User-created story generated with a simple prompt in seconds.',
    tagline: 'Click to read the full story and hear the narration',
  },
  {
    id: 'space-dragon-young',
    title: 'The Friendly Space Dragon',
    ageRange: '5-8 years',
    characterImage: '/images/characters/character2.jpg',
    creationMethod: 'story_wizard' as const,
    description: 'Crafted with Story Wizard: choose characters, settings, themes, and age group.',
    tagline: 'Click to explore this adventure and listen along',
  },
  {
    id: 'space-dragon-older',
    title: 'The Friendly Space Dragon',
    ageRange: '10-12 years',
    characterImage: '/images/characters/character3.jpg',
    creationMethod: 'story_wizard' as const,
    description: 'Same prompt as above, but tailored for older children with more complex language.',
    tagline: 'Click to see how the same story adapts to different ages',
  },
  {
    id: 'fairy-corner-daily',
    title: '[Daily Story from Fairy Corner]',
    ageRange: '4-7 years',
    characterImage: '/images/characters/character4.jpg',
    creationMethod: 'fairy_corner_daily' as const,
    description: 'AI-generated daily story from Fairy Corner, complete with narration and songs.',
    tagline: 'Click to read and enjoy today\'s musical adventure',
  },
  {
    id: 'gingerbread-man',
    title: 'The Gingerbread Man',
    ageRange: '3-6 years',
    imageUrl: 'https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png',
    characterImage: '/images/characters/character5.jpg',
    creationMethod: 'fairy_corner_classic' as const,
    description: 'Classic fairy tale from Fairy Corner library with multiple narrators, songs, and languages.',
    tagline: 'Click to explore this timeless tale in English or French',
  },
];

const StoriesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getCreationMethodBadge = (method: string) => {
    switch (method) {
      case 'quick_story':
        return { text: '⚡ Quick Story', color: 'bg-soft-blue-100 text-soft-blue-700' };
      case 'story_wizard':
        return { text: '🧙 Story Wizard', color: 'bg-soft-green-100 text-soft-green-700' };
      case 'fairy_corner_daily':
        return { text: '✨ Daily AI Story', color: 'bg-gradient-to-r from-soft-blue-100 to-soft-green-100 text-neutral-800' };
      case 'fairy_corner_classic':
        return { text: '📚 Classic Tale', color: 'bg-gradient-to-r from-soft-blue-100 to-soft-green-100 text-neutral-800' };
      default:
        return { text: method, color: 'bg-neutral-100 text-neutral-700' };
    }
  };

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Example Stories from FairyAI
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore different story creation methods. Click any story to see the full content, listen to narration, and enjoy the songs.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {storyExamples.map((story) => {
              const badge = getCreationMethodBadge(story.creationMethod);

              return (
                <Link
                  key={story.id}
                  to={`/stories/${story.id}`}
                  className="group bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Story Image */}
                  <div className="relative aspect-square overflow-hidden">
                    {story.imageUrl ? (
                      <img
                        src={story.imageUrl}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <ImagePlaceholder
                        label={`Character from ${story.title}`}
                        aspectRatio="square"
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    )}
                    {/* Overlay gradient for better text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Story Info */}
                  <div className="p-5">
                    <h2 className="font-display text-xl font-bold text-neutral-900 mb-2 group-hover:text-soft-blue-600 transition-colors">
                      {story.title}
                    </h2>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-block text-xs font-semibold bg-white border border-neutral-300 px-2 py-1 rounded-full">
                        {story.ageRange}
                      </span>
                      <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full ${badge.color}`}>
                        {badge.text}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-neutral-600 mb-3 line-clamp-3">
                      {story.description}
                    </p>

                    {/* Call to Action */}
                    <div className="flex items-center text-soft-blue-600 font-medium group-hover:text-soft-blue-700">
                      <span>{story.tagline}</span>
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-soft-blue-500 to-soft-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Own Stories?
          </h2>
          <p className="text-xl mb-6 text-white/90">
            Download FairyAI and start creating personalised bedtime adventures for your family.
          </p>
          <p className="text-lg mb-8 font-semibold">
            6 free Fairy Dust • 7-day Fairy Corner trial • No credit card required
          </p>
          <DownloadButtons />
        </div>
      </section>
    </div>
  );
};

export default StoriesPage;
