import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import DownloadButtons from '../components/ui/DownloadButtons';
import { UserExampleStory } from '../data/userExampleStories';
import { robotFriendshipStory, dragonHeightsStory } from '../data/userExampleStories';

type AgeGroup = '2-3' | '4-6' | '7-9' | '10-12';

const ageLabels: Record<AgeGroup, string> = {
  '2-3': 'Simple & Playful',
  '4-6': 'Adventure Begins',
  '7-9': 'Growing Complexity',
  '10-12': 'Deeper Themes',
};

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
  } else if (storyId === 'dragon-afraid-heights') {
    story = dragonHeightsStory;
  }

  // If story not found, redirect to stories page
  if (!story) {
    return <Navigate to="/stories" replace />;
  }

  const currentVariation = story.ageVariations[selectedAge];

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/stories"
            className="inline-flex items-center text-soft-blue-600 hover:text-soft-blue-700 font-medium mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Stories
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            {story.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-soft-green-100 text-soft-green-700">
              {story.promptType === 'simple' ? '⚡ Simple Prompt' : '📝 Detailed Prompt'}
            </span>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">

            {/* Age Group Selector - Dropdown style like StoryDetailPage */}
            <div>
              <label htmlFor="age-select" className="block text-sm font-semibold text-neutral-700 mb-2">
                Select Age Group:
              </label>
              <select
                id="age-select"
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value as AgeGroup)}
                className="w-full md:w-64 px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue-500 text-neutral-900 font-medium"
              >
                <option value="2-3">Ages 2-3 ({ageLabels['2-3']})</option>
                <option value="4-6">Ages 4-6 ({ageLabels['4-6']})</option>
                <option value="7-9">Ages 7-9 ({ageLabels['7-9']})</option>
                <option value="10-12">Ages 10-12 ({ageLabels['10-12']})</option>
              </select>
            </div>

            {/* Prompt Showcase Box */}
            <div className={`rounded-xl p-5 md:p-6 border-2 ${story.promptType === 'simple' ? 'bg-gradient-to-br from-soft-green-50 to-soft-blue-50 border-soft-green-200' : 'bg-gradient-to-br from-soft-blue-50 to-soft-green-50 border-soft-blue-200'}`}>
              <div className="flex items-center mb-3">
                <span className="text-xl mr-2">✨</span>
                <span className="font-semibold text-neutral-900">The Prompt That Created This Story</span>
              </div>

              {story.promptType === 'simple' ? (
                <div className="bg-white rounded-lg p-4">
                  <p className="text-lg md:text-xl font-medium text-neutral-900 text-center italic">
                    "{story.promptText}"
                  </p>
                  <p className="text-sm text-neutral-600 text-center mt-3">
                    That's it—just one simple sentence! See how FairyAI adapts this idea for different ages.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-lg p-4">
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    {story.promptText.split('**').map((part, idx) => {
                      if (idx % 2 === 1) {
                        return <strong key={idx} className="font-bold text-neutral-900">{part}</strong>;
                      }
                      return <span key={idx}>{part}</span>;
                    })}
                  </p>
                  {story.promptDetails && (
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-200">
                      {story.promptDetails.theme && (
                        <div>
                          <span className="text-xs font-semibold text-neutral-500 uppercase">Theme:</span>
                          <p className="text-sm text-neutral-900 font-medium">{story.promptDetails.theme}</p>
                        </div>
                      )}
                      {story.promptDetails.moral && (
                        <div>
                          <span className="text-xs font-semibold text-neutral-500 uppercase">Moral:</span>
                          <p className="text-sm text-neutral-900 font-medium">{story.promptDetails.moral}</p>
                        </div>
                      )}
                      {story.promptDetails.setting && (
                        <div>
                          <span className="text-xs font-semibold text-neutral-500 uppercase">Setting:</span>
                          <p className="text-sm text-neutral-900 font-medium">{story.promptDetails.setting}</p>
                        </div>
                      )}
                      {story.promptDetails.targetAge && (
                        <div>
                          <span className="text-xs font-semibold text-neutral-500 uppercase">Target Age:</span>
                          <p className="text-sm text-neutral-900 font-medium">{story.promptDetails.targetAge}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Story Cover Image */}
            {currentVariation.imageUrl && (
              <img
                src={currentVariation.imageUrl}
                alt={`Cover illustration for Ages ${currentVariation.context.ageRange}`}
                className="w-full rounded-lg shadow-lg"
              />
            )}

            {/* Story Info Bar - Compact version */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center bg-soft-blue-50 px-3 py-2 rounded-lg text-sm font-medium text-soft-blue-700 border border-soft-blue-200">
                📖 {currentVariation.context.length}
              </span>
              <span className="inline-flex items-center bg-soft-green-50 px-3 py-2 rounded-lg text-sm font-medium text-soft-green-700 border border-soft-green-200">
                💫 {currentVariation.context.moral}
              </span>
            </div>

            {/* Full Story Text */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">📖 Full Story</h3>
              <div className="bg-neutral-50 rounded-lg p-4 md:p-6 max-h-[500px] overflow-y-auto border border-neutral-200">
                {currentVariation.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-neutral-700 mb-4 leading-relaxed last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Info Card - moved to bottom */}
            <div className="bg-gradient-to-r from-soft-blue-50 to-soft-green-50 rounded-xl p-5 md:p-6 border border-soft-blue-100">
              <h4 className="font-display text-lg font-bold text-neutral-900 mb-3">About User-Created Stories</h4>
              <p className="text-neutral-700 mb-3 leading-relaxed">
                This example showcases what you can build with FairyAI. From simple one-sentence ideas to detailed prompts with specific themes and characters, the app brings your imagination to life.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                <strong className="text-neutral-900">The same prompt, four different stories:</strong> FairyAI automatically adapts vocabulary, complexity, and themes based on your child's age group.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-soft-blue-500 to-soft-green-500 text-white">
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
