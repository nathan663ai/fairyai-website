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
    narrators: row.narrations
      ? Object.entries(row.narrations).map(([id, entry]) => ({
          id,
          name: id.charAt(0).toUpperCase() + id.slice(1), // Capitalize: "echo" -> "Echo"
          duration: entry.duration,
          audioUrl: entry.audio_url,
        }))
      : [],
    songs: (row.songs || []).map(s => ({
      id: s.id,
      title: s.title,
      style: s.style,
      url: s.url,
      duration: s.duration,
      coverUrl: s.cover_url,
    })),
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
