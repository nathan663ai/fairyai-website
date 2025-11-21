import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import AudioPlayer from '../components/ui/AudioPlayer';
import SongPlayer from '../components/ui/SongPlayer';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import DownloadButtons from '../components/ui/DownloadButtons';
import { gingerbreadStoryEnGB, gingerbreadStoryEnUS, gingerbreadStoryFR, gingerbreadStoryES, gingerbreadStoryDE, gingerbreadStoryIT, gingerbreadStoryPT, gingerbreadStoryNL, gingerbreadStoryPL, gingerbreadStoryZH, gingerbreadStoryJA, gingerbreadStoryKO } from '../data/gingerbreadStory';
import { tidalStarStoryEnGB, tidalStarStoryEnUS, tidalStarStoryFR, tidalStarStoryES, tidalStarStoryDE, tidalStarStoryIT, tidalStarStoryPT, tidalStarStoryNL, tidalStarStoryPL, tidalStarStoryZH, tidalStarStoryJA, tidalStarStoryKO } from '../data/tidalStarStory';
import { storyExamples } from '../data/stories';

const StoryDetailPage: React.FC = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const story = storyExamples.find(s => s.id === storyId);

  const [selectedLanguage, setSelectedLanguage] = useState<'en-GB' | 'en-US' | 'fr' | 'es' | 'de' | 'it' | 'pt' | 'nl' | 'pl' | 'zh' | 'ja' | 'ko'>('en-GB');
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
    selectedLanguage === 'nl' ? gingerbreadStoryNL :
    selectedLanguage === 'pl' ? gingerbreadStoryPL :
    selectedLanguage === 'zh' ? gingerbreadStoryZH :
    selectedLanguage === 'ja' ? gingerbreadStoryJA :
    gingerbreadStoryKO;

  const currentNarrator = currentGingerbread.narrators.find(n => n.id === selectedNarrator) || currentGingerbread.narrators[0];

  // Get current tidal star data if applicable
  const currentTidalStar =
    selectedLanguage === 'en-GB' ? tidalStarStoryEnGB :
    selectedLanguage === 'en-US' ? tidalStarStoryEnUS :
    selectedLanguage === 'fr' ? tidalStarStoryFR :
    selectedLanguage === 'es' ? tidalStarStoryES :
    selectedLanguage === 'de' ? tidalStarStoryDE :
    selectedLanguage === 'it' ? tidalStarStoryIT :
    selectedLanguage === 'pt' ? tidalStarStoryPT :
    selectedLanguage === 'nl' ? tidalStarStoryNL :
    selectedLanguage === 'pl' ? tidalStarStoryPL :
    selectedLanguage === 'zh' ? tidalStarStoryZH :
    selectedLanguage === 'ja' ? tidalStarStoryJA :
    tidalStarStoryKO;

  const currentTidalStarNarrator = currentTidalStar.narrators.find(n => n.id === selectedNarrator) || currentTidalStar.narrators[0];

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
      case 'user_example':
        return { text: '👤 User Example', color: 'bg-soft-green-100 text-soft-green-700' };
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
            {story.id === 'gingerbread-man' ? currentGingerbread.title :
             story.id === 'whispers-tidal-star' ? currentTidalStar.title :
             story.title}
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
                    onChange={(e) => setSelectedLanguage(e.target.value as 'en-GB' | 'en-US' | 'fr' | 'es' | 'de' | 'it' | 'pt' | 'nl' | 'pl' | 'zh' | 'ja' | 'ko')}
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
                    <option value="pl">🇵🇱 Polski</option>
                    <option value="zh">🇨🇳 中文</option>
                    <option value="ja">🇯🇵 日本語</option>
                    <option value="ko">🇰🇷 한국어</option>
                  </select>
                </div>

                {/* Context Blurb - Classic Fairy Tales */}
                <div className="bg-gradient-to-r from-soft-blue-50 to-soft-green-50 rounded-xl p-6 border border-soft-blue-100">
                  <h2 className="font-display text-2xl font-bold text-neutral-900 mb-3">Classic Fairy Tales</h2>
                  <p className="text-neutral-700 mb-4 leading-relaxed">
                    These are timeless stories that have delighted children for generations. Our Fairy Corner features over 40 beloved classics—from The Three Little Pigs to Little Red Riding Hood—reimagined with beautiful narrations and original songs. Every story is available in 9 languages, making bedtime magical for families around the world.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center bg-white px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 border border-neutral-200">
                      📚 Familiar characters children already love
                    </span>
                    <span className="inline-flex items-center bg-white px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 border border-neutral-200">
                      👨‍👩‍👧 Stories parents remember from childhood
                    </span>
                    <span className="inline-flex items-center bg-white px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 border border-neutral-200">
                      🎵 Original songs in various musical styles
                    </span>
                    <span className="inline-flex items-center bg-white px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 border border-neutral-200">
                      🌍 Available in 9 languages
                    </span>
                    <span className="inline-flex items-center bg-white px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 border border-neutral-200">
                      ✨ Free for all subscribers
                    </span>
                  </div>
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
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">📚 About This Classic Tale</h4>
                  <p className="text-sm text-neutral-700 mb-3">
                    <strong>The Gingerbread Man</strong> is one of over 100 classic fairy tales and nursery rhymes available in the <strong>Fairy Corner</strong> section of the FairyAI app. These are professionally crafted, well-known stories that children love, each adapted with care to include engaging narration and custom songs.
                  </p>
                  <p className="text-sm text-neutral-700 mb-3">
                    Unlike user-generated stories, Fairy Corner tales are <strong>pre-made and always available</strong> in the app—no Fairy Dust required! Each story is offered in <strong>12 languages</strong> with multiple narrator voices, making bedtime stories accessible to families around the world.
                  </p>
                  <p className="text-sm text-neutral-700">
                    All the content you see on this website, including this story with all its language versions, narrations, and songs, is available in the FairyAI app today.
                  </p>
                </div>
              </>
            ) : story.id === 'whispers-tidal-star' ? (
              /* Whispers of the Tidal Star - Enhanced with Language & Narrators */
              <>
                {/* Language Selector */}
                <div>
                  <label htmlFor="language-select" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Language:
                  </label>
                  <select
                    id="language-select"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value as 'en-GB' | 'en-US' | 'fr' | 'es' | 'de' | 'it' | 'pt' | 'nl' | 'pl' | 'zh' | 'ja' | 'ko')}
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
                    <option value="pl">🇵🇱 Polski</option>
                    <option value="zh">🇨🇳 中文</option>
                    <option value="ja">🇯🇵 日本語</option>
                    <option value="ko">🇰🇷 한국어</option>
                  </select>
                </div>

                {/* Context Blurb - AI-Generated Daily Stories */}
                <div className="bg-gradient-to-r from-soft-blue-50 to-soft-green-50 rounded-xl p-6 border border-soft-blue-100">
                  <h2 className="font-display text-2xl font-bold text-neutral-900 mb-3">AI-Generated Daily Stories</h2>
                  <p className="text-neutral-700 mb-4 leading-relaxed">
                    Every day, FairyAI creates brand new adventures with fresh themes, morals, and locations. These aren't just variations—they're completely original stories designed for different age groups, ensuring your child always has something new to discover.
                  </p>

                  {/* Coming Soon Box */}
                  <div className="bg-white rounded-lg p-4 mb-4 border border-soft-blue-200">
                    <h3 className="font-semibold text-neutral-900 mb-2 flex items-center">
                      <span className="mr-2">🎁</span>
                      Coming Soon
                    </h3>
                    <ul className="space-y-1 text-sm text-neutral-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Age-specific stories (2-4, 5-7, 8-10, 11-12) tailored to your child's development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Recurring characters who continue their adventures across multiple stories</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Stories that grow with your child</span>
                      </li>
                    </ul>
                  </div>

                  {/* Current Story Description */}
                  <div className="bg-white rounded-lg p-4 border border-soft-green-200">
                    <h3 className="font-semibold text-neutral-900 mb-2">About This Story</h3>
                    <p className="text-sm text-neutral-700 mb-3 leading-relaxed">
                      This calming bedtime tale follows <strong>Lila</strong> and <strong>Finn</strong> on a gentle moonlit adventure. Featuring poetic language and soothing imagery, it's designed for children aged <strong>6-10</strong> to help them transition peacefully to sleep. Perfect for winding down after a busy day.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center bg-soft-blue-50 px-3 py-1 rounded-full text-xs font-medium text-soft-blue-700">
                        🌙 Calming
                      </span>
                      <span className="inline-flex items-center bg-soft-blue-50 px-3 py-1 rounded-full text-xs font-medium text-soft-blue-700">
                        🌊 Ocean Adventure
                      </span>
                      <span className="inline-flex items-center bg-soft-blue-50 px-3 py-1 rounded-full text-xs font-medium text-soft-blue-700">
                        ⭐ Magical
                      </span>
                      <span className="inline-flex items-center bg-soft-blue-50 px-3 py-1 rounded-full text-xs font-medium text-soft-blue-700">
                        Ages 6-10
                      </span>
                    </div>
                  </div>
                </div>

                {/* Story Image */}
                <img
                  src={currentTidalStar.imageUrl}
                  alt={currentTidalStar.title}
                  className="w-full rounded-lg shadow-lg"
                />

                {/* Narrator Selector or Coming Soon Message */}
                {currentTidalStar.narrators.length > 0 ? (
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
                        {currentTidalStar.narrators.map((narrator) => (
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
                        src={currentTidalStarNarrator.audioUrl}
                        title={`${currentTidalStar.title} - ${currentTidalStarNarrator.name}`}
                      />
                    </div>
                  </>
                ) : (
                  /* No narrations available */
                  <div className="bg-soft-blue-50 rounded-lg p-6 border border-soft-blue-200">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">🎧 Story Narration</h3>
                    <p className="text-sm text-neutral-700">
                      Narrations for this language are coming soon! In the meantime, you can read the full story below or switch to another language to hear the narration.
                    </p>
                  </div>
                )}

                {/* Songs or Coming Soon Message */}
                {currentTidalStar.songs.length > 0 ? (
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">🎵 Songs from this Story</h3>
                    <SongPlayer songs={currentTidalStar.songs} />
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
                    {currentTidalStar.content.split('\n\n').map((paragraph, idx) => {
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
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">✨ About AI-Generated Stories</h4>
                  <p className="text-sm text-neutral-700 mb-3">
                    This is an example of the <strong>AI-generated daily stories</strong> available in the Fairy Corner section of FairyAI. Every day, a brand new story is created using advanced AI, complete with professional narration and custom songs—all in <strong>12 languages</strong>.
                  </p>
                  <p className="text-sm text-neutral-700 mb-3">
                    These daily stories provide <strong>fresh, original content</strong> that keeps bedtime exciting and unpredictable. Unlike the classic tales, AI stories explore new characters, settings, and adventures, giving children something different to enjoy each night.
                  </p>
                  <p className="text-sm text-neutral-700">
                    Best of all, Fairy Corner content requires <strong>no Fairy Dust</strong>—it's included with your subscription, with new stories added automatically every single day.
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
                    <h4 className="text-lg font-semibold text-neutral-900 mb-3">✨ About AI-Generated Stories</h4>
                    <p className="text-sm text-neutral-700 mb-3">
                      This is an example of the <strong>AI-generated daily stories</strong> available in the Fairy Corner section of FairyAI. Every day, a brand new story is created using advanced AI, complete with professional narration and custom songs—all in <strong>12 languages</strong>.
                    </p>
                    <p className="text-sm text-neutral-700 mb-3">
                      These daily stories provide <strong>fresh, original content</strong> that keeps bedtime exciting and unpredictable. Unlike the classic tales, AI stories explore new characters, settings, and adventures, giving children something different to enjoy each night.
                    </p>
                    <p className="text-sm text-neutral-700">
                      Best of all, Fairy Corner content requires <strong>no Fairy Dust</strong>—it's included with your subscription, with new stories added automatically every single day.
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
