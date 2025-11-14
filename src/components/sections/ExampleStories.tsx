import React from 'react';
import Card from '../ui/Card';
import ImagePlaceholder from '../ui/ImagePlaceholder';

const ExampleStories: React.FC = () => {
  const stories = [
    {
      title: 'Teddy\'s Bedtime Song',
      ageGroup: '2–3 years',
      theme: 'Bedtime Routine',
      moral: 'Comfort and routine',
      excerpt: 'Teddy the bear loves his bedtime routine. First, he brushes his teeth, then he puts on his cozy pajamas. But tonight, Teddy sings a special lullaby that makes the stars twinkle extra bright...'
    },
    {
      title: 'The Robot Who Loved Art',
      ageGroup: '7–9 years',
      theme: 'Creativity & Self-Discovery',
      moral: 'Following your passion',
      excerpt: 'B3-RT worked in a factory building gadgets all day. But every night, he secretly painted colorful pictures. When his paintings are discovered, B3-RT must decide: keep building, or pursue his true calling...'
    },
    {
      title: 'The Secret Library',
      ageGroup: '10–12 years',
      theme: 'Mystery & Adventure',
      moral: 'Knowledge and courage',
      excerpt: 'Maya discovers a hidden door in her school library that leads to an ancient archive filled with magical riddles. To find her way home, she must solve each puzzle before midnight strikes...'
    }
  ];

  return (
    <section id="stories" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Example Stories
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Every story is unique, tailored to your child's imagination
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
              <p className="text-neutral-600 flex-grow">
                {story.excerpt}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleStories;
