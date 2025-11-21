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
  creationMethod: 'quick_story' | 'story_wizard' | 'fairy_corner_daily' | 'fairy_corner_classic';
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
    id: 'luna-brave-bunny',
    numericId: 1,
    title: 'Luna the Brave Bunny',
    ageRange: '4-6 years',
    characterImage: '/images/characters/character1.jpg',
    creationMethod: 'quick_story',
    description: 'User-created story generated with a simple prompt in seconds.',
    tagline: 'Click to read the full story and hear the narration',
    audioSrc: '/audio/stories/luna-narration.mp3',
    prompt: 'A brave bunny goes on an adventure to find a missing moon crystal and learns about courage and kindness.',
    fullText: `[Story text will be added by user - placeholder for now]\n\nOnce upon a time, in a magical forest where the trees whispered secrets and the flowers glowed with moonlight, there lived a brave little bunny named Luna...\n\n[Full story content goes here]\n\nThe End.`,
  },
  {
    id: 'space-dragon-young',
    numericId: 2,
    title: 'The Friendly Space Dragon',
    ageRange: '5-8 years',
    characterImage: '/images/characters/character2.jpg',
    creationMethod: 'story_wizard',
    description: 'Crafted with Story Wizard: choose characters, settings, themes, and age group.',
    tagline: 'Click to explore this adventure and listen along',
    audioSrc: '/audio/stories/dragon-narration.mp3',
    wizardSelections: {
      characters: 'Cosmo the Space Dragon',
      location: 'Outer Space',
      theme: 'Adventure & Friendship',
      ageGroup: '5-8 years',
    },
    fullText: `[Story text will be added by user - placeholder for now]\n\nFar, far away in the depths of space, between the twinkling stars and swirling galaxies, lived a dragon named Cosmo...\n\n[Full story content goes here]\n\nThe End.`,
  },
  {
    id: 'space-dragon-older',
    numericId: 3,
    title: 'The Friendly Space Dragon',
    ageRange: '10-12 years',
    characterImage: '/images/characters/character3.jpg',
    creationMethod: 'story_wizard',
    description: 'Same prompt as above, but tailored for older children with more complex language.',
    tagline: 'Click to see how the same story adapts to different ages',
    audioSrc: '/audio/stories/space-narration.mp3',
    note: 'Same prompt, different age group',
    wizardSelections: {
      characters: 'Cosmo the Space Dragon',
      location: 'Outer Space',
      theme: 'Adventure & Friendship',
      ageGroup: '10-12 years',
    },
    fullText: `[Story text will be added by user - placeholder for now]\n\nIn the vast expanse of the cosmos, where nebulae swirled in kaleidoscopic patterns and distant galaxies whispered ancient secrets, there existed a dragon unlike any other...\n\n[Full story content goes here]\n\nThe End.`,
  },
  {
    id: 'fairy-corner-daily',
    numericId: 4,
    title: 'The Magic Paint Box',
    characterImage: '/images/characters/character4.jpg',
    creationMethod: 'fairy_corner_daily',
    description: 'AI-generated daily story from Fairy Corner, complete with narration and songs. A new story every day in 12 languages.',
    tagline: 'Click to read and enjoy today\'s musical adventure',
    audioSrc: '/audio/stories/fairy-corner-daily-narration.mp3',
    songs: [
      { id: 'song1', title: '[Song 1]', style: 'singalong', url: '/audio/songs/fairy-corner-daily-song1.mp3', duration: 120 },
      { id: 'song2', title: '[Song 2]', style: 'playful', url: '/audio/songs/fairy-corner-daily-song2.mp3', duration: 110 },
    ],
    fullText: `[Story text will be added by user - placeholder for now]\n\nThis is a daily AI-generated story from the Fairy Corner.\n\n[Full story content goes here]\n\nThe End.`,
  },
  {
    id: 'gingerbread-man',
    numericId: 5,
    title: 'The Gingerbread Man',
    imageUrl: 'https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png',
    characterImage: '/images/characters/character5.jpg',
    creationMethod: 'fairy_corner_classic',
    description: 'Classic fairy tale from Fairy Corner library. One of 100+ curated tales with professional narration, custom songs, and multiple languages.',
    tagline: 'Click to explore this timeless tale in 4 languages',
    audioSrc: '/audio/stories/gingerbread-man-narration.mp3',
    songs: [],
    fullText: '', // Will use gingerbread data
  },
];
