import React from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from '../ui/AudioPlayer';

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

// Song Examples Data - matches actual songs from Gingerbread Man
const songExamples = [
  {
    id: 1,
    title: 'Run Run Run (Epic Adventure)',
    fromStory: 'The Gingerbread Man',
    audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/epic_adventure.mp3',
  },
  {
    id: 2,
    title: 'Singalong Version',
    fromStory: 'The Gingerbread Man',
    audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/singalong.mp3',
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

const ExperienceTheMagic: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-soft-blue-50 to-soft-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-slate-900">Real Stories, Real Magic </span>
            <span className="text-2xl">✨</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Hear actual stories and songs created by FairyAI. These are real examples from the app.
          </p>
        </div>

        {/* Story Examples with Audio */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center mb-3 text-slate-900">
            Sample Stories
          </h3>
          <p className="text-center text-neutral-600 mb-10">
            Listen to narration samples from real FairyAI stories
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {storyExamples.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Story Image */}
                <div className="relative h-48">
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Story Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display text-xl font-bold text-slate-900">
                      {story.title}
                    </h4>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-soft-blue-600 bg-soft-blue-50 px-2 py-1 rounded-full">
                        {story.ageRange}
                      </span>
                      <span className="text-xs font-semibold text-soft-green-600 bg-soft-green-50 px-2 py-1 rounded-full text-center">
                        ⚡ Generated in 30s
                      </span>
                    </div>
                  </div>

                  <p className="text-neutral-600 mb-4 text-sm">
                    {story.description}
                  </p>

                  {/* Audio Player */}
                  {story.id !== 3 && (
                    <div className="mb-4">
                      <AudioPlayer
                        src={story.audioSrc}
                        title="Story Narration Sample"
                      />
                    </div>
                  )}

                  {/* Read Full Story Button */}
                  <Link
                    to={story.linkTo}
                    className="block text-center bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
                  >
                    {story.id === 3 ? 'See Age Variations' : 'Read Full Story'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Song Samples */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center mb-3 text-slate-900">
            Sample Songs
          </h3>
          <p className="text-center text-neutral-600 mb-10">
            Every story can become a personalised song
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {songExamples.map((song) => (
              <div
                key={song.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
              >
                {/* Song Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-fairy-purple-100 to-soft-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-fairy-purple-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-slate-900">
                      {song.title}
                    </h4>
                    <p className="text-sm text-neutral-500">
                      From: <span className="text-soft-green-600 font-semibold">{song.fromStory}</span>
                    </p>
                  </div>
                </div>

                {/* Audio Player */}
                <AudioPlayer src={song.audioSrc} title={`Listen to ${song.title}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Character Gallery */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center mb-3 text-slate-900">
            Character Gallery
          </h3>
          <p className="text-center text-neutral-600 mb-2">
            Build your own cast of characters that persist across stories
          </p>
          <p className="text-center text-sm font-semibold text-soft-blue-600 mb-10">
            All characters created in seconds using FairyAI's 6 unique art styles
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {characters.map((character) => (
              <div
                key={character.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
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
              </div>
            ))}
          </div>

          {/* CTA below character gallery */}
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-soft-blue-600 font-semibold hover:text-soft-green-600 transition-colors"
            >
              Learn how to create your own characters
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTheMagic;
