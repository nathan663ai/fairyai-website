import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import VideoPlayer from '../ui/VideoPlayer';
import Card from '../ui/Card';

// Story Examples Data - matches actual stories on Stories Page
const storyExamples = [
  {
    id: 1,
    title: 'The Gingerbread Man',
    ageRange: 'Classic Tale',
    description: 'A beloved fairy tale about a gingerbread cookie who comes to life and runs away',
    audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/nova.mp3',
    voice: 'Nova',
    imageUrl: 'https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png',
    linkTo: '/stories/the_gingerbread_man',
    isUserExample: false
  },
  {
    id: 2,
    title: 'Goldilocks and the Three Bears',
    ageRange: 'Classic Tale',
    description: 'The timeless story of a curious girl and three bears with porridge, chairs, and beds',
    audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/ai_stories/goldilocks_and_the_three_bears/narrations/en/echo.mp3',
    voice: 'Echo',
    imageUrl: 'https://d1mmspri4wgcne.cloudfront.net/classic-tales/Goldilocks+and+the+Three+Bears.png',
    linkTo: '/stories/goldilocks_and_the_three_bears',
    isUserExample: false
  },
  {
    id: 3,
    title: 'Whispers from the Beanstalk',
    ageRange: 'Daily AI Story',
    description: 'A magical AI-generated bedtime adventure with professional narration and songs',
    audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-from-the-beanstalk-375b3b33/narrations/en-GB/shimmer.mp3',
    voice: 'Shimmer',
    imageUrl: 'https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-from-the-beanstalk-375b3b33/cover.jpg',
    linkTo: '/stories/whispers-from-the-beanstalk-375b3b33',
    isUserExample: false
  },
  {
    id: 4,
    title: 'The Lantern of Brave Dreams',
    ageRange: 'Daily AI Story',
    description: 'An enchanting AI-crafted tale about courage and following your dreams',
    audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-lantern-of-brave-dreams-1d9f0a65/narrations/en-GB/onyx.mp3',
    voice: 'Onyx',
    imageUrl: 'https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-lantern-of-brave-dreams-1d9f0a65/cover.jpg',
    linkTo: '/stories/the-lantern-of-brave-dreams-1d9f0a65',
    isUserExample: false
  },
  {
    id: 5,
    title: 'A Robot Learns About Friendship',
    ageRange: 'User Example',
    description: 'See how one simple prompt adapts across different age groups',
    audioSrc: '',
    voice: '',
    imageUrl: 'https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/stories/067a4db2-9383-4d08-884e-d1dbad16483a/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_067a4db2-9383-4d08-884e-d1dbad16483a_cover.png',
    linkTo: '/stories/examples/robot-friendship',
    isUserExample: true
  },
];

// Song Examples Data - organized by category for tabs
type SongCategory = 'classic' | 'ai' | 'nursery';

interface SongData {
  id: string;
  title: string;
  style: string;
  storyTitle: string;
  audioSrc: string;
}

const songsByCategory: Record<SongCategory, SongData[]> = {
  classic: [
    { id: 'classic-1', title: 'Run, Run, Run!', style: 'epic_adventure', storyTitle: 'The Gingerbread Man', audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/epic_adventure.mp3' },
    { id: 'classic-2', title: 'Candy Trail', style: 'rap', storyTitle: 'Hansel and Gretel', audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/classic-tales/hansel_and_gretel/rap.mp3' },
    { id: 'classic-3', title: 'Stitch by Stitch', style: 'magical_pop_rock', storyTitle: 'The Brave Little Tailor', audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_brave_little_tailor/magical_pop_rock.mp3' },
    { id: 'classic-4', title: 'Follow the Piper', style: 'singalong', storyTitle: 'The Pied Piper of Hamelin', audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_pied_piper_of_hamelin/singalong.mp3' },
    { id: 'classic-5', title: 'Tower of Stars', style: 'enchanted_synth_pop', storyTitle: 'Rapunzel', audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/classic-tales/rapunzel/enchanted_synth_pop.mp3' },
  ],
  ai: [
    { id: 'ai-1', title: 'The Giggly Witch and the Runaway Berries', style: 'singalong', storyTitle: "Bumblefizz and the Whimsical Witches' Picnic", audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/ai_stories/bumblefizz-and-the-whimsical-witches-picnic-c0dd266c/songs/audio/98572fcb-b03d-42ef-a240-0753c9217ed1.mp3' },
    { id: 'ai-2', title: "The Bubble-Ship's Wild Ride", style: 'epic_adventure', storyTitle: "Pibble's Planet Gigglepop Goof-Up!", audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/ai_stories/pibble-s-planet-gigglepop-goof-up-036fb9b7/songs/audio/5989ef20-1b17-42bc-84e1-5ca7d58d7f99.mp3' },
    { id: 'ai-3', title: "The Pearl's Secret Glow", style: 'magical_pop_rock', storyTitle: 'Bibblet and the Mystery of the Coral Kingdom', audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/ai_stories/bibblet-and-the-mystery-of-the-coral-kingdom-110a5183/songs/audio/bd6a857f-bb67-4007-93a9-94cf24669bea.mp3' },
    { id: 'ai-4', title: 'The Kite and the Breeze', style: 'enchanted_synth_pop', storyTitle: 'Lena and the Fluttering Red Kite', audioSrc: 'https://apiboxfiles.erweima.ai/M2U0ZmI1MmUtMmM0NS00MjViLThiOGItNjk1YmRkMjgwMzhl.mp3' },
    { id: 'ai-5', title: 'Footprints in the Whispering Woods', style: 'epic_adventure', storyTitle: 'Sibley and the Secret of the Whispering Woods', audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/ai_stories/sibley-and-the-secret-of-the-whispering-woods-f288f540/songs/audio/c228d783-df45-4298-9c3c-b9126a8f5dcc.mp3' },
  ],
  nursery: [
    { id: 'nursery-1', title: 'Five Little Monkeys Remix', style: 'rap', storyTitle: 'Five Little Monkeys Jumping on the Bed', audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/nursery-rhymes/five_little_monkeys_jumping_on_the_bed/en-GB/rap.mp3' },
    { id: 'nursery-2', title: 'Starfire Odyssey', style: 'epic_adventure', storyTitle: 'Twinkle Twinkle Little Star', audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/nursery-rhymes/twinkle_twinkle_little_star/en-GB/epic_adventure.mp3' },
    { id: 'nursery-3', title: 'Humpty Dumpty Remix', style: 'pop', storyTitle: 'Humpty Dumpty', audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/nursery-rhymes/humpty_dumpty/en-GB/pop.mp3' },
    { id: 'nursery-4', title: 'The Brave Farmer MacDonald', style: 'epic_adventure', storyTitle: 'Old MacDonald Had a Farm', audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/nursery-rhymes/old_macdonald_had_a_farm/en-GB/epic_adventure.mp3' },
    { id: 'nursery-5', title: 'Row Row Remix', style: 'rap', storyTitle: 'Row Row Row Your Boat', audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/nursery-rhymes/row_row_row_your_boat/en-GB/rap.mp3' },
  ],
};

const songTabs: { id: SongCategory; label: string }[] = [
  { id: 'classic', label: 'Classic Tales' },
  { id: 'ai', label: 'Daily AI Stories' },
  { id: 'nursery', label: 'Nursery Rhymes' },
];

// Character Gallery Data - Real character images from app
const characters = [
  {
    id: 1,
    name: "Sparkle",
    imageSrc: "https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/8553a425-d604-4de2-bea9-7ce556fccb2c/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_8553a425-d604-4de2-bea9-7ce556fccb2c_style_Style1.png"
  },
  {
    id: 2,
    name: "Captain Whiskers",
    imageSrc: "https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/f51c1e70-9c50-4322-a5ee-96f51ba43d40/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_f51c1e70-9c50-4322-a5ee-96f51ba43d40_style_Style6.png"
  },
  {
    id: 3,
    name: "Astro",
    imageSrc: "https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/aa8854a1-ae57-4f38-8894-85aed2f84789/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_aa8854a1-ae57-4f38-8894-85aed2f84789_style_Style3.png"
  },
  {
    id: 4,
    name: "Ember",
    imageSrc: "https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/4028445e-cd22-4167-a8dd-3bd4d7306dbf/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_4028445e-cd22-4167-a8dd-3bd4d7306dbf_style_Style2.png"
  },
  {
    id: 5,
    name: "Melody",
    imageSrc: "https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/91609a2a-2825-4d75-bec3-51501c09035c/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_91609a2a-2825-4d75-bec3-51501c09035c_style_Style4.png"
  },
  {
    id: 6,
    name: "Zoom",
    imageSrc: "https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/e0362249-d97d-4050-844a-88feb4dfa93f/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_e0362249-d97d-4050-844a-88feb4dfa93f_style_Style5.png"
  },
  {
    id: 7,
    name: "Oliver",
    imageSrc: "https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/5633ddcc-dd2c-4a66-bf3f-8ea6a6e38ec7/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_5633ddcc-dd2c-4a66-bf3f-8ea6a6e38ec7_style_Style4.png"
  },
  {
    id: 8,
    name: "Coral",
    imageSrc: "https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/a8ee270e-e84c-40c6-b718-9de9e752aad9/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_a8ee270e-e84c-40c6-b718-9de9e752aad9_style_Style1.png"
  }
];

// Carousel Arrow Button component
const CarouselArrow: React.FC<{
  direction: 'left' | 'right';
  onClick: () => void;
}> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`hidden md:flex absolute ${direction === 'left' ? 'left-0 -translate-x-4' : 'right-0 translate-x-4'} top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg items-center justify-center transition-all hover:scale-110`}
    aria-label={`Scroll ${direction}`}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-6 h-6 text-neutral-700" />
    ) : (
      <ChevronRight className="w-6 h-6 text-neutral-700" />
    )}
  </button>
);

// Helper to format duration
const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const ExperienceTheMagic: React.FC = () => {
  const storyCarouselRef = useRef<HTMLDivElement>(null);
  const characterCarouselRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Unified audio player state (handles both stories and songs)
  const [currentAudioId, setCurrentAudioId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Song tab state
  const [activeSongTab, setActiveSongTab] = useState<SongCategory>('classic');

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right', amount: number) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
    }
  };

  // Unified audio play handler - only one audio plays at a time
  const handleAudioPlay = useCallback((audioId: string, audioSrc: string) => {
    if (currentAudioId === audioId && isPlaying) {
      // Pause current audio
      audioRef.current?.pause();
      setIsPlaying(false);
    } else if (currentAudioId === audioId && !isPlaying) {
      // Resume current audio
      audioRef.current?.play();
      setIsPlaying(true);
    } else {
      // Play new audio (stops any currently playing)
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsLoading(true);
      const audio = new Audio(audioSrc);
      audioRef.current = audio;

      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
        setIsLoading(false);
      });
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });
      audio.addEventListener('canplay', () => {
        setIsLoading(false);
      });

      audio.play();
      setCurrentAudioId(audioId);
      setIsPlaying(true);
      setCurrentTime(0);
      setDuration(0);
    }
  }, [currentAudioId, isPlaying]);

  // Seek handler for progress bar click
  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>, audioDuration: number) => {
    if (audioRef.current && audioDuration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      const newTime = percentage * audioDuration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }, []);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Get current song info (for song player section) - search all categories
  const currentSong = currentAudioId?.startsWith('song-')
    ? Object.values(songsByCategory).flat().find(s => `song-${s.id}` === currentAudioId)
    : null;

  return (
    <section className="py-6 md:py-10 bg-gradient-to-br from-white via-soft-blue-50 to-soft-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            <span className="text-slate-900">Real Stories, Real Magic </span>
            <span className="text-2xl">✨</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Hear actual stories and songs created by FairyAI. These are real examples from the app.
          </p>
        </div>

        {/* VideoPlayer - From Old Hero */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <VideoPlayer
                src="/videos/hero-demo.mp4"
                poster="/images/posters/hero-poster.jpg"
                aspectRatio="portrait"
                className="shadow-2xl"
                autoplay={true}
                muted={true}
                loop={true}
                comingSoonText="App Demo Video Coming Soon"
              />
            </div>
          </div>
        </div>

        {/* Story Examples with Audio - CAROUSEL */}
        <div className="mb-12">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center mb-2 text-slate-900">
            Sample Stories
          </h3>
          <p className="text-center text-neutral-600 mb-6">
            Swipe to hear narration samples from real FairyAI stories
          </p>

          <div className="relative">
            <CarouselArrow direction="left" onClick={() => scroll(storyCarouselRef, 'left', 320)} />
            <CarouselArrow direction="right" onClick={() => scroll(storyCarouselRef, 'right', 320)} />

            <div
              ref={storyCarouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
            >
              {storyExamples.map((story) => (
                <div key={story.id} className="flex-shrink-0 w-80 snap-start">
                  <Card className="h-full overflow-hidden p-0">
                    {/* Story Image */}
                    <div className="relative h-40">
                      <img
                        src={story.imageUrl}
                        alt={story.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Story Info */}
                    <div className="p-4">
                      {/* Centered Badge */}
                      <div className="flex justify-center mb-2">
                        <span className="text-xs font-semibold text-soft-blue-600 bg-soft-blue-50 px-2 py-1 rounded-full">
                          {story.ageRange}
                        </span>
                      </div>

                      {/* Title below badge */}
                      <h4 className="font-display text-lg font-bold text-slate-900 text-center mb-2">
                        {story.title}
                      </h4>

                      <p className="text-neutral-600 mb-3 text-sm text-center">
                        {story.description}
                      </p>

                      {/* Audio Player - Two Row Layout */}
                      {!story.isUserExample && story.audioSrc && (() => {
                        const storyAudioId = `story-${story.id}`;
                        const isThisPlaying = currentAudioId === storyAudioId && isPlaying;
                        const isThisActive = currentAudioId === storyAudioId;
                        const displayTime = isThisActive ? currentTime : 0;
                        const displayDuration = isThisActive ? duration : 0;
                        const isThisLoading = isThisActive && isLoading;

                        return (
                          <div className="mb-3 bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                            {/* Row 1: Play button, Label, Voice */}
                            <div className="flex items-center gap-3 mb-2">
                              <button
                                onClick={() => handleAudioPlay(storyAudioId, story.audioSrc)}
                                disabled={isThisLoading}
                                className="flex-shrink-0 w-10 h-10 bg-fairy-gold-500 hover:bg-fairy-gold-600 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                                aria-label={isThisPlaying ? 'Pause' : 'Play'}
                              >
                                {isThisLoading ? (
                                  <svg className="w-5 h-5 text-white animate-spin" viewBox="0 0 24 24" fill="none">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                  </svg>
                                ) : isThisPlaying ? (
                                  <Pause className="w-5 h-5 text-white" fill="currentColor" />
                                ) : (
                                  <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
                                )}
                              </button>
                              <span className="font-medium text-neutral-800 text-sm">Listen to Narration</span>
                              <span className="ml-auto text-xs text-neutral-500 bg-neutral-200 px-2 py-0.5 rounded-full">
                                Voice: {story.voice}
                              </span>
                            </div>

                            {/* Row 2: Time + Full-width Progress Bar + Duration */}
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-neutral-500 font-medium tabular-nums w-10 text-right">
                                {formatDuration(Math.floor(displayTime))}
                              </span>
                              <div
                                className="flex-1 h-2 bg-neutral-200 rounded-full cursor-pointer relative group"
                                onClick={(e) => isThisActive && handleSeek(e, displayDuration)}
                              >
                                {/* Progress fill */}
                                <div
                                  className="absolute inset-y-0 left-0 bg-fairy-gold-500 rounded-full transition-all"
                                  style={{ width: displayDuration > 0 ? `${(displayTime / displayDuration) * 100}%` : '0%' }}
                                />
                                {/* Thumb/handle */}
                                {isThisActive && displayDuration > 0 && (
                                  <div
                                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-fairy-gold-500 rounded-full shadow-md transition-all group-hover:scale-110"
                                    style={{ left: `calc(${(displayTime / displayDuration) * 100}% - 8px)` }}
                                  />
                                )}
                              </div>
                              <span className="text-xs text-neutral-500 font-medium tabular-nums w-10">
                                {displayDuration > 0 ? formatDuration(Math.floor(displayDuration)) : '--:--'}
                              </span>
                            </div>
                          </div>
                        );
                      })()}

                      {/* Story Button */}
                      <Link
                        to={story.linkTo}
                        className="block text-center bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 text-sm"
                      >
                        {story.isUserExample ? 'See Age Variations' : 'Explore Story'}
                      </Link>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            {/* Swipe Hint - Mobile Only */}
            <p className="text-center text-sm text-neutral-500 mt-2 md:hidden flex items-center justify-center gap-1">
              <ChevronLeft className="w-4 h-4" /> Swipe to explore <ChevronRight className="w-4 h-4" />
            </p>
          </div>
        </div>

        {/* Song Samples - Tabbed Track List */}
        <div className="mb-12">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center mb-2 text-slate-900">
            Sample Songs
          </h3>
          <p className="text-center text-neutral-600 mb-6">
            Every story can become a personalised song
          </p>

          {/* Track List Container */}
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md border border-neutral-200 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-neutral-200">
              {songTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSongTab(tab.id)}
                  className={`flex-1 px-3 py-3 text-sm font-medium transition-colors ${
                    activeSongTab === tab.id
                      ? 'text-fairy-gold-600 border-b-2 border-fairy-gold-500 bg-fairy-gold-50'
                      : 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Track List */}
            <div className="divide-y divide-neutral-100">
              {songsByCategory[activeSongTab].map((song) => {
                const songAudioId = `song-${song.id}`;
                const isCurrentSong = currentAudioId === songAudioId;
                const isThisSongPlaying = isCurrentSong && isPlaying;

                return (
                  <div
                    key={song.id}
                    className={`flex items-center gap-3 p-4 hover:bg-neutral-50 transition-colors cursor-pointer ${isCurrentSong ? 'bg-amber-50' : ''}`}
                    onClick={() => handleAudioPlay(songAudioId, song.audioSrc)}
                  >
                    {/* Play/Pause Button */}
                    <button
                      className="flex-shrink-0 w-10 h-10 bg-fairy-gold-500 hover:bg-fairy-gold-600 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 shadow-md"
                      aria-label={isThisSongPlaying ? 'Pause' : 'Play'}
                    >
                      {isThisSongPlaying ? (
                        <Pause className="w-5 h-5" fill="currentColor" />
                      ) : (
                        <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                      )}
                    </button>

                    {/* Song Info */}
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold text-neutral-900 truncate ${isCurrentSong ? 'text-fairy-gold-600' : ''}`}>
                        {song.title}
                      </p>
                      <p className="text-sm text-neutral-500 truncate">
                        From: <span className="text-soft-green-600 font-medium">{song.storyTitle}</span>
                      </p>
                    </div>

                    {/* Style Badge - hidden on AI tab to allow longer titles */}
                    {activeSongTab !== 'ai' && (
                      <span className="text-xs text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full flex-shrink-0">
                        {song.style.replace(/_/g, ' ')}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Now Playing Bar */}
            {currentSong ? (
              <div className="bg-neutral-50 border-t border-neutral-200 p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold text-fairy-gold-500 uppercase tracking-wide">
                    Now Playing
                  </span>
                  <span className="text-sm font-medium text-neutral-700 truncate">
                    {currentSong.title}
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-500 w-10 text-right">
                    {formatDuration(Math.floor(currentTime))}
                  </span>
                  <div
                    className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden cursor-pointer"
                    onClick={(e) => {
                      if (audioRef.current && duration > 0) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const percentage = clickX / rect.width;
                        const newTime = percentage * duration;
                        audioRef.current.currentTime = newTime;
                        setCurrentTime(newTime);
                      }
                    }}
                  >
                    <div
                      className="h-full bg-fairy-gold-500 rounded-full transition-all pointer-events-none"
                      style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                    />
                  </div>
                  <span className="text-xs text-neutral-500 w-10">
                    {formatDuration(Math.floor(duration))}
                  </span>
                </div>
              </div>
            ) : (
              <div className="bg-neutral-50 border-t border-neutral-200 p-4 text-center">
                <p className="text-sm text-neutral-400">
                  Select a song to play
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Character Gallery - CAROUSEL */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center mb-2 text-slate-900">
            Character Gallery
          </h3>
          <p className="text-center text-neutral-600 mb-1">
            Build your own cast of characters that persist across stories
          </p>
          <p className="text-center text-sm font-semibold text-soft-blue-600 mb-6">
            All characters created in seconds using FairyAI's 6 unique art styles
          </p>

          <div className="relative">
            <CarouselArrow direction="left" onClick={() => scroll(characterCarouselRef, 'left', 200)} />
            <CarouselArrow direction="right" onClick={() => scroll(characterCarouselRef, 'right', 200)} />

            <div
              ref={characterCarouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
            >
              {characters.map((character) => (
                <div key={character.id} className="flex-shrink-0 w-48 snap-start">
                  <Card className="p-0 overflow-hidden">
                    {/* Character Image */}
                    <div className="aspect-square relative">
                      <img
                        src={character.imageSrc}
                        alt={character.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-3 text-center">
                      <p className="text-sm font-semibold text-neutral-700">
                        {character.name}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            {/* Swipe Hint - Mobile Only */}
            <p className="text-center text-sm text-neutral-500 mt-2 md:hidden flex items-center justify-center gap-1">
              <ChevronLeft className="w-4 h-4" /> Swipe to explore <ChevronRight className="w-4 h-4" />
            </p>
          </div>

          {/* CTA below character gallery */}
          <div className="text-center mt-8">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-soft-blue-600 font-semibold hover:text-soft-green-600 transition-colors"
            >
              Learn how to create your own characters →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTheMagic;
