import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import DownloadButtons from '../components/ui/DownloadButtons';
import { UserExampleStory } from '../data/userExampleStories';
import { robotFriendshipStory, dragonHeightsStory } from '../data/userExampleStories';

type AgeGroup = '2-4' | '5-7' | '8-10' | '11-12';

const UserExampleStoryPage: React.FC = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const [selectedAge, setSelectedAge] = useState<AgeGroup>('5-7');

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
              ✨ User-Created Example
            </span>
            <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-soft-blue-100 text-soft-blue-700">
              {story.promptType === 'simple' ? '⚡ Simple Prompt' : '📝 Detailed Prompt'}
            </span>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">

            {/* Prompt Showcase Box */}
            <div className={`rounded-xl p-6 border-2 ${story.promptType === 'simple' ? 'bg-gradient-to-br from-soft-green-50 to-soft-blue-50 border-soft-green-200' : 'bg-gradient-to-br from-soft-blue-50 to-soft-green-50 border-soft-blue-200'}`}>
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">✨</span>
                <span className="font-semibold text-neutral-900">The Prompt That Created This Story</span>
              </div>

              {story.promptType === 'simple' ? (
                // Simple Prompt Display
                <div className="bg-white rounded-lg p-4 mb-3">
                  <p className="text-xl font-medium text-neutral-900 text-center italic">
                    "{story.promptText}"
                  </p>
                </div>
              ) : (
                // Detailed Prompt Display
                <>
                  <div className="bg-white rounded-lg p-4 mb-3">
                    <p className="text-neutral-700 leading-relaxed mb-4">
                      {story.promptText.split('**').map((part, idx) => {
                        if (idx % 2 === 1) {
                          return <strong key={idx} className="font-bold text-neutral-900">{part}</strong>;
                        }
                        return <span key={idx}>{part}</span>;
                      })}
                    </p>
                    {story.promptDetails && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-4 border-t border-neutral-200">
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
                </>
              )}

              <div className="text-center text-sm text-neutral-600 bg-white bg-opacity-60 rounded-lg p-3">
                {story.promptType === 'simple' ? (
                  <p>That's it—just one simple sentence! Watch how FairyAI adapts this idea for different ages below.</p>
                ) : (
                  <p>See how specific details help create a richer, more targeted story. Try adding themes, settings, and character details in your prompts!</p>
                )}
              </div>
            </div>

            {/* Context Blurb - Create Your Own Stories */}
            <div className="bg-gradient-to-r from-soft-blue-50 to-soft-green-50 rounded-xl p-6 border border-soft-blue-100">
              <h2 className="font-display text-2xl font-bold text-neutral-900 mb-3">Create Your Own Stories</h2>
              <p className="text-neutral-700 mb-3 leading-relaxed">
                These examples showcase what you can build with FairyAI. From detailed prompts with specific themes and characters, to simple one-sentence ideas, the app brings your imagination to life with professional narrations and custom songs.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                <strong className="text-neutral-900">Try it yourself:</strong> Each example shows the exact prompt used, so you can see how easy it is to create magical bedtime stories for your children.
              </p>
            </div>

            {/* Age Group Selector */}
            <div className="bg-white rounded-xl p-6 border-2 border-neutral-200">
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-4 text-center">
                See How The Story Adapts By Age
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {(['2-4', '5-7', '8-10', '11-12'] as AgeGroup[]).map((age) => (
                  <button
                    key={age}
                    onClick={() => setSelectedAge(age)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedAge === age
                        ? 'bg-soft-blue-500 border-soft-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-white border-neutral-300 text-neutral-700 hover:border-soft-blue-400 hover:shadow-md'
                    }`}
                  >
                    <div className="text-lg font-bold mb-1">Ages {age}</div>
                    <div className={`text-xs ${selectedAge === age ? 'text-white opacity-90' : 'text-neutral-500'}`}>
                      {age === '2-4' && 'Simple & Playful'}
                      {age === '5-7' && 'Adventure Begins'}
                      {age === '8-10' && 'Growing Complexity'}
                      {age === '11-12' && 'Deeper Themes'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Age Context Card */}
            <div className="bg-gradient-to-br from-soft-green-50 to-soft-blue-50 rounded-xl p-6 border border-soft-green-200">
              <h4 className="font-display text-lg font-bold text-neutral-900 mb-3">
                Story Style for Ages {currentVariation.context.ageRange}
              </h4>
              <ul className="space-y-2 mb-4">
                {currentVariation.context.styleNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start text-neutral-700">
                    <span className="text-soft-blue-600 mr-2">•</span>
                    <span>{note}</span>
                  </li>
                ))}
                <li className="flex items-start text-neutral-700">
                  <span className="text-soft-blue-600 mr-2">•</span>
                  <span>Length: {currentVariation.context.length}</span>
                </li>
              </ul>
              <div className="bg-white rounded-lg p-3 border border-soft-green-300">
                <span className="text-sm font-semibold text-neutral-700">💫 Moral: </span>
                <span className="text-sm text-neutral-900">{currentVariation.context.moral}</span>
              </div>
            </div>

            {/* Story Cover Image */}
            {currentVariation.imageUrl && (
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">🎨 Story Cover</h3>
                <img
                  src={currentVariation.imageUrl}
                  alt={`Cover illustration for Ages ${currentVariation.context.ageRange}`}
                  className="w-full rounded-lg shadow-lg border border-neutral-200"
                />
              </div>
            )}

            {/* Full Story Text */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">📖 Full Story</h3>
              <div className="bg-neutral-50 rounded-lg p-6 max-h-[600px] overflow-y-auto border border-neutral-200">
                {currentVariation.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-neutral-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-4 text-center text-sm text-neutral-500 italic">
                Note: Full story content with narration and songs will be added soon!
              </div>
            </div>

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

export default UserExampleStoryPage;
