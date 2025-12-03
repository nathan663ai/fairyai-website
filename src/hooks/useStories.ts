import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { DbFairyTale, StorySummary, transformDbToSummary } from '../lib/types';

interface UseStoriesResult {
  stories: StorySummary[];
  loading: boolean;
  error: string | null;
}

export function useStories(): UseStoriesResult {
  const [stories, setStories] = useState<StorySummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStories() {
      try {
        setLoading(true);
        setError(null);

        // Fetch unique stories (one per slug, preferring en-GB)
        const { data, error: fetchError } = await supabase
          .from('fairy_tales')
          .select('id, slug, title, image_url, type, is_featured, language_code')
          .eq('is_active', true)
          .order('is_featured', { ascending: false })
          .order('title', { ascending: true });

        if (fetchError) {
          throw fetchError;
        }

        if (!data) {
          setStories([]);
          return;
        }

        // Deduplicate by slug, preferring en-GB version
        const storyMap = new Map<string, DbFairyTale>();
        for (const row of data as DbFairyTale[]) {
          const existing = storyMap.get(row.slug);
          if (!existing || row.language_code === 'en-GB') {
            storyMap.set(row.slug, row);
          }
        }

        const uniqueStories = Array.from(storyMap.values()).map(transformDbToSummary);
        setStories(uniqueStories);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch stories');
      } finally {
        setLoading(false);
      }
    }

    fetchStories();
  }, []);

  return { stories, loading, error };
}
