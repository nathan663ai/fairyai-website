// Database types for fairy_tales table

export interface DbNarrator {
  id: string;
  name: string;
  duration: number;
  audio_url: string;
}

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
  narrations: DbNarrator[];
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
    narrators: (row.narrations || []).map(n => ({
      id: n.id,
      name: n.name,
      duration: n.duration,
      audioUrl: n.audio_url,
    })),
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
