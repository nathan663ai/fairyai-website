import React, { useState } from 'react';
import AudioPlayer from '../components/ui/AudioPlayer';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import DownloadButtons from '../components/ui/DownloadButtons';

// Story Examples Data with Creation Methods
const storyExamples = [
  {
    id: 1,
    title: 'Luna the Brave Bunny',
    ageRange: '4-6 years',
    audioSrc: '/audio/stories/luna-narration.mp3',
    characterImage: '/images/characters/character1.jpg',
    creationMethod: 'quick_story',
    prompt: 'A brave bunny goes on an adventure to find a missing moon crystal and learns about courage and kindness.',
    fullText: `[Story text will be added by user - placeholder for now]

Once upon a time, in a magical forest where the trees whispered secrets and the flowers glowed with moonlight, there lived a brave little bunny named Luna...

[Full story content goes here]

The End.`,
  },
  {
    id: 2,
    title: 'The Friendly Space Dragon',
    ageRange: '5-8 years',
    audioSrc: '/audio/stories/dragon-narration.mp3',
    characterImage: '/images/characters/character2.jpg',
    creationMethod: 'story_wizard',
    wizardSelections: {
      characters: ['Cosmo the Space Dragon'],
      location: 'Outer Space',
      theme: 'Adventure & Friendship',
      moral: 'Friendship can happen anywhere, and helping others leads to meaningful connections',
      ageGroup: '5-8 years',
      language: 'English',
      length: 'Medium (800-1000 words)',
      perspective: 'Third Person',
      plotHints: 'Include a rescue scene and a heartwarming resolution',
    },
    fullText: `[Story text will be added by user - placeholder for now]

Far, far away in the depths of space, between the twinkling stars and swirling galaxies, lived a dragon named Cosmo...

[Full story content goes here]

The End.`,
  },
  {
    id: 3,
    title: 'The Friendly Space Dragon',
    ageRange: '10-12 years',
    audioSrc: '/audio/stories/space-narration.mp3',
    characterImage: '/images/characters/character3.jpg',
    creationMethod: 'story_wizard',
    note: 'Same prompt as Story #2, but for older age group',
    wizardSelections: {
      characters: ['Cosmo the Space Dragon'],
      location: 'Outer Space',
      theme: 'Adventure & Friendship',
      moral: 'Friendship can happen anywhere, and helping others leads to meaningful connections',
      ageGroup: '10-12 years', // Different age group!
      language: 'English',
      length: 'Long (1500-2000 words)',
      perspective: 'Third Person',
      plotHints: 'Include a rescue scene and a heartwarming resolution',
    },
    fullText: `[Story text will be added by user - placeholder for now]

In the vast expanse of the cosmos, where nebulae swirled in kaleidoscopic patterns and distant galaxies whispered ancient secrets, there existed a dragon unlike any other...

[Full story content goes here - more sophisticated vocabulary and longer for older kids]

The End.`,
  },
];

const StoriesPage: React.FC = () => {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);

  const toggleStory = (storyId: number) => {
    setExpandedStory(expandedStory === storyId ? null : storyId);
  };

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Example Stories from FairyAI
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-8">
            See how stories are created with different methods. Listen to narration samples and explore the creation process.
          </p>
        </div>
      </section>

      {/* Story Examples */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {storyExamples.map((story) => (
            <article
              key={story.id}
              className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden"
            >
              {/* Story Header */}
              <div className="bg-slate-900 p-6 md:p-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                      {story.title}
                    </h2>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="inline-block text-sm font-semibold text-white bg-white bg-opacity-30 px-3 py-1 rounded-full">
                        {story.ageRange}
                      </span>
                      <span className="inline-block text-sm font-semibold text-white bg-white bg-opacity-30 px-3 py-1 rounded-full">
                        {story.creationMethod === 'quick_story' ? '⚡ Quick Story' : '🧙 Story Wizard'}
                      </span>
                    </div>
                    {story.note && (
                      <p className="text-sm text-white bg-fairy-purple-600 bg-opacity-50 px-3 py-1 rounded-lg mt-2 inline-block">
                        ℹ️ {story.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Character Image & Audio Player */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-neutral-50 to-white">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {/* Character Image */}
                  <div className="md:col-span-1">
                    <ImagePlaceholder
                      label={`Character from ${story.title}`}
                      aspectRatio="square"
                      className="rounded-lg shadow-md"
                    />
                  </div>

                  {/* Audio Player */}
                  <div className="md:col-span-2 flex items-center">
                    <div className="w-full">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                        🎧 Listen to the Story
                      </h3>
                      <AudioPlayer
                        src={story.audioSrc}
                        title={`${story.title} - Full Narration`}
                      />
                      <p className="text-xs text-neutral-500 mt-2">
                        30-second narration sample • Full narration available in app
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How This Story Was Created */}
              <div className="p-6 md:p-8 border-t border-neutral-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  📝 How This Story Was Created
                </h3>

                {story.creationMethod === 'quick_story' ? (
                  // Quick Story Method
                  <div className="bg-soft-blue-50 rounded-lg p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-soft-blue-500 text-white rounded-full p-2 flex-shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-neutral-900 mb-1">Quick Story</h4>
                        <p className="text-sm text-neutral-600">
                          Perfect for weeknight bedtimes - just describe what you want in one sentence
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-soft-blue-500">
                      <p className="text-sm font-semibold text-neutral-500 mb-2">USER PROMPT:</p>
                      <p className="text-neutral-800 italic">"{story.prompt}"</p>
                    </div>

                    <p className="text-xs text-neutral-600 mt-3">
                      ⏱️ Generated in ~15 seconds • 1 Fairy Dust
                    </p>
                  </div>
                ) : (
                  // Story Wizard Method
                  <div className="bg-soft-green-50 rounded-lg p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-soft-green-500 text-white rounded-full p-2 flex-shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-3.65-.91-6.5-4.58-6.5-8.5V8.3l6.5-3.17 6.5 3.17V12c0 3.92-2.85 7.59-6.5 8.5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-neutral-900 mb-1">Story Wizard</h4>
                        <p className="text-sm text-neutral-600">
                          Full control over every aspect of your story - perfect for crafting exactly what you envision
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(story.wizardSelections!).map(([key, value]) => (
                        <div key={key} className="bg-white rounded-lg p-3 border border-neutral-200">
                          <p className="text-xs font-semibold text-neutral-500 uppercase mb-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </p>
                          <p className="text-sm text-neutral-800">
                            {Array.isArray(value) ? value.join(', ') : value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-neutral-600 mt-3">
                      ⏱️ Generated in ~20 seconds • 1 Fairy Dust
                    </p>
                  </div>
                )}
              </div>

              {/* Read Full Story - Expandable */}
              <div className="border-t border-neutral-200">
                <button
                  onClick={() => toggleStory(story.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-neutral-900 flex items-center gap-2">
                    📖 {expandedStory === story.id ? 'Hide Full Story' : 'Read Full Story'}
                  </span>
                  <svg
                    className={`w-6 h-6 text-neutral-600 transition-transform ${
                      expandedStory === story.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedStory === story.id && (
                  <div className="p-6 md:p-8 bg-neutral-50 border-t border-neutral-200">
                    <div className="prose prose-lg max-w-none">
                      {story.fullText.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="text-neutral-700 mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-soft-blue-600 to-soft-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Own Stories?
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-soft-blue-50">
            Download FairyAI and start creating personalised bedtime adventures for your family.
          </p>
          <p className="text-lg mb-8 font-semibold">
            6 free Fairy Dust to get started • 7-day Fairy Corner trial • No credit card required
          </p>

          <div className="mb-6">
            <DownloadButtons variant="gradient" />
          </div>

          <p className="text-sm text-soft-blue-100">
            Join thousands of families creating magical bedtime moments
          </p>
        </div>
      </section>
    </div>
  );
};

export default StoriesPage;
