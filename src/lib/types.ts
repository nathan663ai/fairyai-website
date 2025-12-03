// Database types for fairy_tales table

// Database narration entry (keyed by narrator id like "echo", "nova")
export interface DbNarrationEntry {
  duration: number;
  audio_url: string;
}

// Narrations stored as object: { "echo": { duration, audio_url }, "nova": { ... } }
export type DbNarrations = Record<string, DbNarrationEntry>;

export interface DbSong {
  id: string;
  title: string;
  style: string;
  url: string;
  duration: number;
  cover_url: string;
}

// Raw database row from fairy_tales table
export interface DbFairyTale {
  id: string;
  slug: string;
  title: string;
  content: string;
  image_url: string;
  narrations: DbNarrations | null;
  songs: DbSong[];
  type: 'ai' | 'classic';
  language_code: string;
  is_active: boolean;
  is_featured: boolean;
}

// Transformed types matching existing app interface
export interface Narrator {
  id: string;
  name: string;
  duration: number;
  audioUrl: string;
}

export interface Song {
  id: string;
  title: string;
  style: string;
  url: string;
  duration: number;
  coverUrl: string;
}

export interface StoryData {
  id: string;
  title: string;
  languageCode: string;
  type: string;
  slug: string;
  imageUrl: string;
  content: string;
  narrators: Narrator[];
  songs: Song[];
}

// Story summary for list view (StoriesPage)
export interface StorySummary {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  type: 'ai' | 'classic';
  isFeatured: boolean;
}

// Helper to convert narrations object to array
function transformNarrations(narrations: DbNarrations | null | undefined): Narrator[] {
  if (!narrations || typeof narrations !== 'object') {
    return [];
  }
  // Handle object format: { "echo": { duration, audio_url }, ... }
  return Object.entries(narrations).map(([id, entry]) => ({
    id,
    name: id.charAt(0).toUpperCase() + id.slice(1), // Capitalize: "echo" -> "Echo"
    duration: entry?.duration || 0,
    audioUrl: entry?.audio_url || '',
  }));
}

// Helper to convert songs (handles both array and object formats)
function transformSongs(songs: DbSong[] | Record<string, DbSong> | null | undefined): Song[] {
  if (!songs) {
    return [];
  }
  // If it's an array, map directly
  if (Array.isArray(songs)) {
    return songs.map(s => ({
      id: s.id,
      title: s.title,
      style: s.style,
      url: s.url,
      duration: s.duration,
      coverUrl: s.cover_url,
    }));
  }
  // If it's an object, convert using Object.entries
  if (typeof songs === 'object') {
    return Object.entries(songs).map(([id, s]) => ({
      id,
      title: s.title,
      style: s.style,
      url: s.url,
      duration: s.duration,
      coverUrl: s.cover_url,
    }));
  }
  return [];
}

// Transform database row to app format
export function transformDbToStoryData(row: DbFairyTale): StoryData {
  return {
    id: row.id,
    title: row.title,
    languageCode: row.language_code,
    type: row.type,
    slug: row.slug,
    imageUrl: row.image_url,
    content: row.content,
    narrators: transformNarrations(row.narrations),
    songs: transformSongs(row.songs),
  };
}

// Transform database row to summary for list view
export function transformDbToSummary(row: DbFairyTale): StorySummary {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    imageUrl: row.image_url,
    type: row.type,
    isFeatured: row.is_featured,
  };
}
