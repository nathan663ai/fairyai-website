import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import AudioPlayer from '../components/ui/AudioPlayer';
import SongPlayer from '../components/ui/SongPlayer';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import DownloadButtons from '../components/ui/DownloadButtons';
import { useStory } from '../hooks/useStory';

// Language display names with flags
const languageNames: Record<string, string> = {
  'en-GB': '🇬🇧 English (UK)',
  'en-US': '🇺🇸 English (US)',
  'fr': '🇫🇷 Français',
  'es': '🇪🇸 Español',
  'de': '🇩🇪 Deutsch',
  'it': '🇮🇹 Italiano',
  'pt': '🇵🇹 Português',
  'nl': '🇳🇱 Nederlands',
  'pl': '🇵🇱 Polski',
  'zh': '🇨🇳 中文',
  'ja': '🇯🇵 日本語',
  'ko': '🇰🇷 한국어',
};

const StoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { storyVariants, languages, loading, error } = useStory(slug || '');

  const [selectedLanguage, setSelectedLanguage] = useState<string>('en-GB');
  const [selectedNarrator, setSelectedNarrator] = useState<string>('');

  // Get current story variant based on selected language
  const currentStory = useMemo(() => {
    return storyVariants.find(v => v.languageCode === selectedLanguage) || storyVariants[0];
  }, [storyVariants, selectedLanguage]);

  // Get current narrator
  const currentNarrator = useMemo(() => {
    if (!currentStory) return null;
    return currentStory.narrators.find(n => n.id === selectedNarrator) || currentStory.narrators[0];
  }, [currentStory, selectedNarrator]);

  // Set default language and narrator when data loads
  useEffect(() => {
    if (languages.length > 0 && !languages.includes(selectedLanguage)) {
      setSelectedLanguage(languages[0]);
    }
  }, [languages, selectedLanguage]);

  useEffect(() => {
    if (currentStory?.narrators.length && !currentStory.narrators.find(n => n.id === selectedNarrator)) {
      setSelectedNarrator(currentStory.narrators[0]?.id || '');
    }
  }, [currentStory, selectedNarrator]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'ai':
        return { text: '✨ Daily AI Story', color: 'bg-gradient-to-r from-soft-blue-100 to-soft-green-100 text-neutral-800' };
      case 'classic':
        return { text: '📚 Classic Tale', color: 'bg-gradient-to-r from-soft-blue-100 to-soft-green-100 text-neutral-800' };
      default:
        return { text: type, color: 'bg-neutral-100 text-neutral-700' };
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="pt-16 bg-white min-h-screen">
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
          </div>
        </section>
        <div className="flex justify-center items-center py-24">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-soft-blue-600"></div>
          <span className="ml-3 text-neutral-600">Loading story...</span>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="pt-16 bg-white min-h-screen">
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
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-700 font-medium">Failed to load story</p>
            <p className="text-red-600 text-sm mt-1">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  // Story not found
  if (!currentStory) {
    return <Navigate to="/stories" replace />;
  }

  const badge = getTypeBadge(currentStory.type);

  return (
    <div className="pt-16 bg-white min-h-screen">
      <SEO
        title={`${currentStory.title} - FairyAI Stories`}
        description={`Listen to "${currentStory.title}" - a ${currentStory.type === 'ai' ? 'daily AI-generated' : 'classic'} bedtime story with narration and original songs in 12 languages. Free on FairyAI.`}
        canonical={`/stories/${slug}`}
        ogImage={currentStory.imageUrl}
      />
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
            {currentStory.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            <span className={`inline-block text-sm font-semibold px-3 py-1 rounded-full ${badge.color}`}>
              {badge.text}
            </span>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Language Selector */}
            {languages.length > 1 && (
              <div>
                <label htmlFor="language-select" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Language:
                </label>
                <select
                  id="language-select"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full md:w-64 px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue-500"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {languageNames[lang] || lang}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Context Blurb */}
            <p className="text-neutral-600 text-sm">
              {currentStory.type === 'ai'
                ? 'A daily AI-generated story from Fairy Corner, with professional narration and original songs in 12 languages.'
                : 'One of over 40 classic fairy tales in Fairy Corner, with professional narration and original songs in 12 languages.'}
            </p>

            {/* Story Image */}
            {currentStory.imageUrl ? (
              <img
                src={currentStory.imageUrl}
                alt={currentStory.title}
                loading="lazy"
                className="w-full rounded-lg shadow-lg"
              />
            ) : (
              <ImagePlaceholder
                label={`Cover for ${currentStory.title}`}
                aspectRatio="video"
                className="rounded-lg shadow-lg"
              />
            )}

            {/* Narrator Selector */}
            {currentStory.narrators.length > 0 ? (
              <>
                <div>
                  <label htmlFor="narrator-select" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Narrator:
                  </label>
                  <select
                    id="narrator-select"
                    value={selectedNarrator}
                    onChange={(e) => setSelectedNarrator(e.target.value)}
                    className="w-full md:w-64 px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue-500"
                  >
                    {currentStory.narrators.map((narrator) => (
                      <option key={narrator.id} value={narrator.id}>
                        {narrator.name} ({Math.floor(narrator.duration / 60)}:{(narrator.duration % 60).toString().padStart(2, '0')})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Audio Player */}
                {currentNarrator && (
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">🎧 Listen to Story</h3>
                    <AudioPlayer
                      src={currentNarrator.audioUrl}
                      title={`${currentStory.title} - ${currentNarrator.name}`}
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="bg-soft-blue-50 rounded-lg p-6 border border-soft-blue-200">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">🎧 Story Narration</h3>
                <p className="text-sm text-neutral-700">
                  Narrations for this language are coming soon! In the meantime, you can read the full story below or switch to another language to hear the narration.
                </p>
              </div>
            )}

            {/* Songs */}
            {currentStory.songs.length > 0 ? (
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">🎵 Songs from this Story</h3>
                <SongPlayer songs={currentStory.songs} />
              </div>
            ) : (
              <div className="bg-soft-green-50 rounded-lg p-6 border border-soft-green-200">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">🎵 Story Songs</h3>
                <p className="text-sm text-neutral-700">
                  Songs for this language are coming soon! Switch to another language to hear the songs, or enjoy the full story below.
                </p>
              </div>
            )}

            {/* Full Story Text */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">📖 Full Story</h3>
              <div className="bg-neutral-50 rounded-lg p-6 max-h-[600px] overflow-y-auto">
                {currentStory.content.split('\n\n').map((paragraph, idx) => {
                  const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                  return (
                    <p key={idx} className="text-neutral-700 mb-4 leading-relaxed">
                      {parts.map((part, partIdx) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={partIdx} className="font-bold text-neutral-900">{part.slice(2, -2)}</strong>;
                        }
                        return <span key={partIdx}>{part}</span>;
                      })}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-r from-soft-blue-50 to-soft-green-50 rounded-lg p-6">
              {currentStory.type === 'ai' ? (
                <>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">✨ About AI-Generated Stories</h4>
                  <p className="text-sm text-neutral-700 mb-3">
                    This is an example of the <strong>AI-generated daily stories</strong> available in the Fairy Corner section of FairyAI. Every day, a brand new story is created using advanced AI, complete with professional narration and custom songs in <strong>12 languages</strong>.
                  </p>
                  <p className="text-sm text-neutral-700 mb-3">
                    These daily stories provide <strong>fresh, original content</strong> that keeps bedtime exciting and unpredictable. Unlike the classic tales, AI stories explore new characters, settings, and adventures, giving children something different to enjoy each night.
                  </p>
                  <p className="text-sm text-neutral-700">
                    Best of all, Fairy Corner content requires <strong>no Fairy Dust</strong> and is included with your subscription, with new stories added automatically every single day.
                  </p>
                </>
              ) : (
                <>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">📚 About This Classic Tale</h4>
                  <p className="text-sm text-neutral-700 mb-3">
                    <strong>{currentStory.title}</strong> is one of over 100 classic fairy tales and nursery rhymes available in the <strong>Fairy Corner</strong> section of the FairyAI app. These are professionally crafted, well-known stories that children love, each adapted with care to include engaging narration and custom songs.
                  </p>
                  <p className="text-sm text-neutral-700 mb-3">
                    Unlike user-generated stories, Fairy Corner tales are <strong>pre-made and always available</strong> in the app with no Fairy Dust required. Each story is offered in <strong>12 languages</strong> with multiple narrator voices, making bedtime stories accessible to families around the world.
                  </p>
                  <p className="text-sm text-neutral-700">
                    All the content you see on this website, including this story with all its language versions, narrations, and songs, is available in the FairyAI app today.
                  </p>
                </>
              )}
            </div>
          </div>
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
            6 free Fairy Dust • 7-day Fairy Corner trial • No credit card required
          </p>
          <DownloadButtons variant="gradient" />
        </div>
      </section>
    </div>
  );
};

export default StoryDetailPage;
