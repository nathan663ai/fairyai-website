import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import AudioPlayer from '../ui/AudioPlayer';
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
    imageUrl: 'https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png',
    linkTo: '/stories/gingerbread-man'
  },
  {
    id: 2,
    title: 'Whispers of the Tidal Star',
    ageRange: 'Daily AI Story',
    description: 'A calming bedtime tale about a magical adventure by the ocean at twilight',
    audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/en-GB/shimmer.mp3',
    imageUrl: 'https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg',
    linkTo: '/stories/whispers-tidal-star'
  },
  {
    id: 3,
    title: 'A Robot Learns About Friendship',
    ageRange: 'User Example',
    description: 'See how one simple prompt adapts across different age groups',
    audioSrc: '/audio/stories/placeholder.mp3',
    imageUrl: 'https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/stories/067a4db2-9383-4d08-884e-d1dbad16483a/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_067a4db2-9383-4d08-884e-d1dbad16483a_cover.png',
    linkTo: '/stories/examples/robot-friendship'
  },
];

// Song Examples Data - easy to update array
const sampleSongs = [
  {
    id: 'gingerbread-epic',
    title: 'Run Run Run',
    fromStory: 'The Gingerbread Man',
    audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/epic_adventure.mp3',
    duration: 154, // seconds
  },
  {
    id: 'gingerbread-singalong',
    title: 'Gingerbread Singalong',
    fromStory: 'The Gingerbread Man',
    audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/singalong.mp3',
    duration: 118,
  },
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

  // Song player state
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right', amount: number) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
    }
  };

  // Handle song play/pause
  const handleSongClick = (songId: string, audioSrc: string) => {
    if (currentSongId === songId && isPlaying) {
      // Pause current song
      audioRef.current?.pause();
      setIsPlaying(false);
    } else if (currentSongId === songId && !isPlaying) {
      // Resume current song
      audioRef.current?.play();
      setIsPlaying(true);
    } else {
      // Play new song
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(audioSrc);
      audioRef.current = audio;

      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });

      audio.play();
      setCurrentSongId(songId);
      setIsPlaying(true);
    }
  };

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Get current song info
  const currentSong = sampleSongs.find(s => s.id === currentSongId);

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
                      <div className="flex items-start justify-between mb-2 gap-2">
                        <h4 className="font-display text-lg font-bold text-slate-900">
                          {story.title}
                        </h4>
                        <span className="text-xs font-semibold text-soft-blue-600 bg-soft-blue-50 px-2 py-1 rounded-full flex-shrink-0">
                          {story.ageRange}
                        </span>
                      </div>

                      <p className="text-neutral-600 mb-3 text-sm">
                        {story.description}
                      </p>

                      {/* Audio Player */}
                      {story.id !== 3 && (
                        <div className="mb-3">
                          <AudioPlayer
                            src={story.audioSrc}
                            title="Story Narration Sample"
                          />
                        </div>
                      )}

                      {/* Read Full Story Button */}
                      <Link
                        to={story.linkTo}
                        className="block text-center bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 text-sm"
                      >
                        {story.id === 3 ? 'See Age Variations' : 'Read Full Story'}
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

        {/* Song Samples - Vertical Track List */}
        <div className="mb-12">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center mb-2 text-slate-900">
            Sample Songs
          </h3>
          <p className="text-center text-neutral-600 mb-6">
            Every story can become a personalised song
          </p>

          {/* Track List Container */}
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md border border-neutral-200 overflow-hidden">
            {/* Track List */}
            <div className="divide-y divide-neutral-100">
              {sampleSongs.map((song) => {
                const isCurrentSong = currentSongId === song.id;
                const isThisSongPlaying = isCurrentSong && isPlaying;

                return (
                  <div
                    key={song.id}
                    className={`flex items-center gap-3 p-4 hover:bg-neutral-50 transition-colors cursor-pointer ${isCurrentSong ? 'bg-amber-50' : ''}`}
                    onClick={() => handleSongClick(song.id, song.audioSrc)}
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
                        From: <span className="text-soft-green-600 font-medium">{song.fromStory}</span>
                      </p>
                    </div>

                    {/* Duration */}
                    <span className="text-sm text-neutral-400 flex-shrink-0">
                      {formatDuration(song.duration)}
                    </span>
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
