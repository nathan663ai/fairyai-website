import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import DownloadButtons from '../components/ui/DownloadButtons';
import { useStories } from '../hooks/useStories';
import { storyExamples } from '../data/stories';

const StoriesPage: React.FC = () => {
  const { stories: supabaseStories, loading, error } = useStories();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get robot-friendship from hardcoded data (user example - demo content)
  const robotFriendship = storyExamples.find(s => s.id === 'robot-friendship');

  const getTypeBadge = (type: 'ai' | 'classic' | 'user_example') => {
    switch (type) {
      case 'ai':
        return { text: 'Daily AI Story', color: 'bg-gradient-to-r from-soft-blue-100 to-soft-green-100 text-neutral-800' };
      case 'classic':
        return { text: 'Classic Tale', color: 'bg-gradient-to-r from-soft-blue-100 to-soft-green-100 text-neutral-800' };
      case 'user_example':
        return { text: 'User Example', color: 'bg-soft-green-100 text-soft-green-700' };
      default:
        return { text: type, color: 'bg-neutral-100 text-neutral-700' };
    }
  };

  return (
    <div className="pt-16 bg-white min-h-screen">
      <SEO
        title="Example Stories - FairyAI"
        description="Browse example bedtime stories created with FairyAI. Listen to AI-generated tales with narration and original songs in 12 languages."
        canonical="/stories"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Example Stories
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore our daily AI stories and classic tales. Click any story to read, listen, and enjoy original songs.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-soft-blue-600"></div>
              <span className="ml-3 text-neutral-600">Loading stories...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-700 font-medium">Failed to load stories</p>
              <p className="text-red-600 text-sm mt-1">{error}</p>
            </div>
          )}

          {/* Stories Grid */}
          {!loading && !error && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Supabase Stories */}
              {supabaseStories.map((story) => {
                const badge = getTypeBadge(story.type);

                return (
                  <Link
                    key={story.id}
                    to={`/stories/${story.slug}`}
                    className="group bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                  >
                    {/* Story Image */}
                    <div className="relative aspect-square overflow-hidden">
                      {story.imageUrl ? (
                        <img
                          src={story.imageUrl}
                          alt={story.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <ImagePlaceholder
                          label={`Character from ${story.title}`}
                          aspectRatio="square"
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Story Info */}
                    <div className="p-5">
                      <h2 className="font-display text-xl font-bold text-neutral-900 mb-2 group-hover:text-soft-blue-600 transition-colors">
                        {story.title}
                      </h2>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full ${badge.color}`}>
                          {badge.text}
                        </span>
                        {story.isFeatured && (
                          <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-amber-100 text-amber-700">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Call to Action */}
                      <div className="flex items-center text-soft-blue-600 font-medium group-hover:text-soft-blue-700">
                        <span>Click to explore this story</span>
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

              {/* Robot Friendship - Hardcoded User Example */}
              {robotFriendship && (
                <Link
                  to={`/stories/examples/${robotFriendship.id}`}
                  className="group bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Story Image */}
                  <div className="relative aspect-square overflow-hidden">
                    {robotFriendship.imageUrl ? (
                      <img
                        src={robotFriendship.imageUrl}
                        alt={robotFriendship.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <ImagePlaceholder
                        label={`Character from ${robotFriendship.title}`}
                        aspectRatio="square"
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Story Info */}
                  <div className="p-5">
                    <h2 className="font-display text-xl font-bold text-neutral-900 mb-2 group-hover:text-soft-blue-600 transition-colors">
                      {robotFriendship.title}
                    </h2>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-soft-green-100 text-soft-green-700">
                        User Example
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-neutral-600 mb-3 line-clamp-4">
                      {robotFriendship.description}
                    </p>

                    {/* Call to Action */}
                    <div className="flex items-center text-soft-blue-600 font-medium group-hover:text-soft-blue-700">
                      <span>{robotFriendship.tagline}</span>
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
              )}
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Ready to Create Your Own Stories?
          </h2>
          <p className="text-xl mb-6 text-neutral-700">
            Download FairyAI and start creating personalised bedtime adventures for your family.
          </p>
          <p className="text-lg mb-8 font-semibold text-neutral-800">
            Free Fairy Dust • 7-day Fairy Corner trial • No credit card required
          </p>
          <DownloadButtons variant="gradient" />
        </div>
      </section>
    </div>
  );
};

export default StoriesPage;
