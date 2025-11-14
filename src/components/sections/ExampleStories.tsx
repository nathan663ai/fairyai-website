import React from 'react';
import Card from '../ui/Card';
import ImagePlaceholder from '../ui/ImagePlaceholder';

const ExampleStories: React.FC = () => {
  const stories = [
    {
      title: 'Luna\'s Moonlight Concert',
      ageGroup: 'Ages 2-3',
      theme: 'Music, Friendship',
      moral: 'Sharing and kindness',
      excerpt: 'A gentle story created with Quick Story mode, then narrated in British English with the "Shimmer" voice. Added a lullaby song afterward. Luna the bunny plays her magical flute for her forest friends under the moon.',
      details: '400 words • Bedtime-optimised pacing'
    },
    {
      title: 'The Robot Who Painted Rainbows',
      ageGroup: 'Ages 7-9',
      theme: 'Creativity, Self-Expression',
      moral: 'Being yourself',
      excerpt: 'Built with the Story Wizard: 2 custom characters (an inventor robot + a shy artist girl), science fiction setting, moral about being yourself. Continued into 3 chapters forming a mini-book.',
      details: '1000 words per chapter • STEM themes'
    },
    {
      title: 'The Last Library of Lumina',
      ageGroup: 'Ages 10-12',
      theme: 'Knowledge, Courage, Adventure',
      moral: 'Wisdom and bravery',
      excerpt: 'Advanced mode: epic fantasy with 4 custom characters, detailed world-building hints, continued across 5 chapters (1 full book). Added character theme songs and exported the whole series.',
      details: '1500-1800 words per chapter • Complex vocabulary'
    }
  ];

  return (
    <section id="stories" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            From toddler giggles to tween adventures
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Every story is unique, tailored to your child's age and imagination
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="flex flex-col h-full">
              {/* Story Illustration */}
              <ImagePlaceholder
                label="Story Illustration"
                aspectRatio="video"
                className="mb-6"
              />

              {/* Age Group Badge */}
              <div className="inline-block bg-soft-blue-100 text-soft-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-3 self-start">
                {story.ageGroup}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                {story.title}
              </h3>

              {/* Theme & Moral */}
              <div className="text-sm text-neutral-500 mb-3">
                <span className="font-medium">Theme:</span> {story.theme}
                <br />
                <span className="font-medium">Moral:</span> {story.moral}
              </div>

              {/* Excerpt */}
              <p className="text-neutral-600 flex-grow mb-4">
                {story.excerpt}
              </p>

              {/* Details */}
              <div className="text-xs text-neutral-400 border-t border-neutral-200 pt-3">
                {story.details}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleStories;
