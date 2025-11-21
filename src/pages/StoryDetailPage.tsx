import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import AudioPlayer from '../components/ui/AudioPlayer';
import SongPlayer from '../components/ui/SongPlayer';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import DownloadButtons from '../components/ui/DownloadButtons';
import { gingerbreadStoryEnGB, gingerbreadStoryEnUS, gingerbreadStoryFR, gingerbreadStoryES, gingerbreadStoryDE, gingerbreadStoryIT, gingerbreadStoryPT, gingerbreadStoryNL } from '../data/gingerbreadStory';
import { storyExamples } from '../data/stories';

const StoryDetailPage: React.FC = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const story = storyExamples.find(s => s.id === storyId);

  const [selectedLanguage, setSelectedLanguage] = useState<'en-GB' | 'en-US' | 'fr' | 'es' | 'de' | 'it' | 'pt' | 'nl'>('en-GB');
  const [selectedNarrator, setSelectedNarrator] = useState<string>('onyx');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If story not found, redirect to stories page
  if (!story) {
    return <Navigate to="/stories" replace />;
  }

  // Get current gingerbread data if applicable
  const currentGingerbread =
    selectedLanguage === 'en-GB' ? gingerbreadStoryEnGB :
    selectedLanguage === 'en-US' ? gingerbreadStoryEnUS :
    selectedLanguage === 'fr' ? gingerbreadStoryFR :
    selectedLanguage === 'es' ? gingerbreadStoryES :
    selectedLanguage === 'de' ? gingerbreadStoryDE :
    selectedLanguage === 'it' ? gingerbreadStoryIT :
    selectedLanguage === 'pt' ? gingerbreadStoryPT :
    gingerbreadStoryNL;

  const currentNarrator = currentGingerbread.narrators.find(n => n.id === selectedNarrator) || currentGingerbread.narrators[0];

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

  const badge = getCreationMethodBadge(story.creationMethod);

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
            {story.id === 'gingerbread-man' ? currentGingerbread.title : story.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {story.ageRange && (
              <span className="inline-block text-sm font-semibold bg-white px-3 py-1 rounded-full">
                {story.ageRange}
              </span>
            )}
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
            {/* Gingerbread Man - Enhanced with Language & Narrators */}
            {story.id === 'gingerbread-man' ? (
              <>
                {/* Language Selector */}
                <div>
                  <label htmlFor="language-select" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Language:
                  </label>
                  <select
                    id="language-select"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value as 'en-GB' | 'en-US' | 'fr' | 'es' | 'de' | 'it' | 'pt' | 'nl')}
                    className="w-full md:w-64 px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue-500"
                  >
                    <option value="en-GB">🇬🇧 English (UK)</option>
                    <option value="en-US">🇺🇸 English (US)</option>
                    <option value="fr">🇫🇷 Français</option>
                    <option value="es">🇪🇸 Español</option>
                    <option value="de">🇩🇪 Deutsch</option>
                    <option value="it">🇮🇹 Italiano</option>
                    <option value="pt">🇵🇹 Português</option>
                    <option value="nl">🇳🇱 Nederlands</option>
                  </select>
                </div>

                {/* Story Image */}
                <img
                  src={currentGingerbread.imageUrl}
                  alt={currentGingerbread.title}
                  className="w-full rounded-lg shadow-lg"
                />

                {/* Narrator Selector */}
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
                    {currentGingerbread.narrators.map((narrator) => (
                      <option key={narrator.id} value={narrator.id}>
                        {narrator.name} ({Math.floor(narrator.duration / 60)}:{(narrator.duration % 60).toString().padStart(2, '0')})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Audio Player */}
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">🎧 Listen to Story</h3>
                  <AudioPlayer
                    src={currentNarrator.audioUrl}
                    title={`${currentGingerbread.title} - ${currentNarrator.name}`}
                  />
                </div>

                {/* Songs */}
                {currentGingerbread.songs.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">🎵 Songs from this Story</h3>
                    <SongPlayer songs={currentGingerbread.songs} />
                  </div>
                )}

                {/* Full Story Text */}
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">📖 Full Story</h3>
                  <div className="bg-neutral-50 rounded-lg p-6 max-h-[600px] overflow-y-auto">
                    {currentGingerbread.content.split('\n\n').map((paragraph, idx) => {
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
                  <p className="text-sm text-neutral-700">
                    <strong>Classic Fairy Tale:</strong> One of 100+ curated classic fairy tales and nursery rhymes, all with professional narration and custom songs. Always available in the Fairy Corner library.
                  </p>
                </div>
              </>
            ) : (
              /* Other Stories - Standard Layout */
              <>
                {/* Character Image */}
                <ImagePlaceholder
                  label={`Character from ${story.title}`}
                  aspectRatio="square"
                  className="rounded-lg shadow-lg"
                />

                {/* Audio Player */}
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">🎧 Listen to Story</h3>
                  <AudioPlayer
                    src={story.audioSrc}
                    title={story.title}
                  />
                  <p className="text-xs text-neutral-500 mt-2">
                    30-second sample • Full narration in app
                  </p>
                </div>

                {/* Songs (if available) */}
                {story.songs && story.songs.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">🎵 Songs from this Story</h3>
                    <SongPlayer songs={story.songs} />
                  </div>
                )}

                {/* Creation Method Info */}
                {story.creationMethod === 'quick_story' && (
                  <div className="bg-soft-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold text-neutral-900 mb-2">⚡ Quick Story</h4>
                    <p className="text-sm text-neutral-700 mb-2">
                      <strong>User Prompt:</strong> "{story.prompt}"
                    </p>
                    <p className="text-xs text-neutral-600">⏱️ Generated in ~15 seconds • 1 Fairy Dust</p>
                  </div>
                )}

                {story.creationMethod === 'story_wizard' && story.wizardSelections && (
                  <div className="bg-soft-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-neutral-900 mb-2">🧙 Story Wizard</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(story.wizardSelections).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-neutral-600">{key}:</span>
                          <span className="text-neutral-900 ml-1">{value}</span>
                        </div>
                      ))}
                    </div>
                    {story.note && <p className="text-xs text-neutral-600 mt-2">ℹ️ {story.note}</p>}
                  </div>
                )}

                {story.creationMethod === 'fairy_corner_daily' && (
                  <div className="bg-gradient-to-r from-soft-blue-50 to-soft-green-50 rounded-lg p-6">
                    <p className="text-sm text-neutral-700">
                      <strong>Daily AI Story:</strong> A brand new story is created every day in 12 languages, complete with narration and songs. No Fairy Dust required.
                    </p>
                  </div>
                )}

                {/* Full Story Text */}
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">📖 Full Story</h3>
                  <div className="bg-neutral-50 rounded-lg p-6 max-h-[600px] overflow-y-auto">
                    {story.fullText.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-neutral-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            )}
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

export default StoryDetailPage;
