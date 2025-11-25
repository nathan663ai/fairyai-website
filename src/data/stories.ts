// Shared story data for StoriesPage and StoryDetailPage

export interface Song {
  id: string;
  title: string;
  style: string;
  url: string;
  duration: number;
}

export interface StoryExample {
  id: string;
  numericId: number;
  title: string;
  ageRange?: string; // Optional - not all stories have age ranges
  imageUrl?: string; // Optional - for stories with real images
  characterImage: string;
  creationMethod: 'quick_story' | 'story_wizard' | 'fairy_corner_daily' | 'fairy_corner_classic' | 'user_example';
  description: string;
  tagline: string;
  audioSrc: string;
  prompt?: string;
  wizardSelections?: {
    characters: string;
    location: string;
    theme: string;
    ageGroup: string;
  };
  note?: string;
  songs?: Song[];
  fullText: string;
}

export const storyExamples: StoryExample[] = [
  {
    id: 'gingerbread-man',
    numericId: 1,
    title: 'The Gingerbread Man',
    imageUrl: 'https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png',
    characterImage: '/images/characters/character5.jpg',
    creationMethod: 'fairy_corner_classic',
    description: 'Classic fairy tale from Fairy Corner library. One of 100+ curated tales with professional narration, custom songs, and multiple languages.',
    tagline: 'Click to explore this timeless tale in 12 languages',
    audioSrc: '/audio/stories/gingerbread-man-narration.mp3',
    songs: [],
    fullText: '', // Will use gingerbread data
  },
  {
    id: 'whispers-tidal-star',
    numericId: 2,
    title: 'Whispers of the Tidal Star',
    imageUrl: 'https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg',
    characterImage: '/images/characters/character6.jpg',
    creationMethod: 'fairy_corner_daily',
    description: 'AI-generated story from Fairy Corner with original narration and songs. A magical tale about discovery and wonder, available in 12 languages with multiple narrators.',
    tagline: 'Click to experience this AI-crafted adventure',
    audioSrc: 'https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/en-GB/narrations/onyx.mp3',
    songs: [],
    fullText: '', // Will use tidal star data
  },
  {
    id: 'robot-friendship',
    numericId: 3,
    title: 'A Robot Learns About Friendship',
    imageUrl: 'https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/stories/067a4db2-9383-4d08-884e-d1dbad16483a/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_067a4db2-9383-4d08-884e-d1dbad16483a_cover.png',
    characterImage: '/images/characters/character7.jpg',
    creationMethod: 'user_example',
    description: 'See how a simple one-sentence prompt adapts across different age groups. From playful simplicity for toddlers to deeper themes for tweens.',
    tagline: 'See how one simple prompt adapts for different age groups',
    audioSrc: '/audio/stories/placeholder.mp3',
    prompt: 'A robot learns about friendship',
    fullText: '', // Will use user example data
  },
];
