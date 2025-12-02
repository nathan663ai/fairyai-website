import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import DownloadButtons from '../components/ui/DownloadButtons';
import { UserExampleStory, robotFriendshipStory } from '../data/userExampleStories';

type AgeGroup = '2-3' | '4-6' | '7-9';

const UserExampleStoryPage: React.FC = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const [selectedAge, setSelectedAge] = useState<AgeGroup>('4-6');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the appropriate story based on ID
  let story: UserExampleStory | null = null;
  if (storyId === 'robot-friendship') {
    story = robotFriendshipStory;
  }

  // If story not found, redirect to stories page
  if (!story) {
    return <Navigate to="/stories" replace />;
  }

  const currentVariation = story.ageVariations[selectedAge];

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/stories"
            className="inline-flex items-center text-soft-blue-600 hover:text-soft-blue-700 font-medium mb-3 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Stories
          </Link>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
            {story.title}
          </h1>
          <p className="text-neutral-600 text-sm">
            {story.promptType === 'simple'
              ? `Created from a simple prompt: "${story.promptText}"`
              : 'Created from a detailed prompt with specific themes and characters.'
            }
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">

            {/* Story Cover Image */}
            {currentVariation.imageUrl && (
              <img
                src={currentVariation.imageUrl}
                alt={`Cover illustration for Ages ${currentVariation.context.ageRange}`}
                loading="lazy"
                className="w-full rounded-lg shadow-lg"
              />
            )}

            {/* Age Selector + Story Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-neutral-900">Full Story</h3>
                <select
                  id="age-select"
                  value={selectedAge}
                  onChange={(e) => setSelectedAge(e.target.value as AgeGroup)}
                  className="px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue-500 text-neutral-900 text-sm"
                >
                  <option value="2-3">Ages 2-3</option>
                  <option value="4-6">Ages 4-6</option>
                  <option value="7-9">Ages 7-9</option>
                </select>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4 md:p-6 max-h-[500px] overflow-y-auto border border-neutral-200">
                {currentVariation.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-neutral-700 mb-4 leading-relaxed last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-r from-soft-blue-50 to-soft-green-50 rounded-xl p-5 border border-soft-blue-100">
              <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">Age-Adaptive Stories</h4>
              <p className="text-neutral-700 text-sm">
                The same prompt adapts for each age group. FairyAI automatically adjusts vocabulary, complexity, and themes based on your child's age.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-fairy-gold-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Ready to Create Your Own Stories?
          </h2>
          <p className="text-lg mb-6 text-white/90">
            Download FairyAI and start creating personalised bedtime adventures.
          </p>
          <p className="text-base mb-8 font-semibold">
            6 free Fairy Dust • 7-day Fairy Corner trial • No credit card required
          </p>
          <DownloadButtons />
        </div>
      </section>
    </div>
  );
};

export default UserExampleStoryPage;
