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

        // Fetch specific stories by slug (only show these on the website)
        const allowedSlugs = ['the_gingerbread_man', 'whispers-from-the-beanstalk-375b3b33', 'the-lantern-of-brave-dreams-1d9f0a65', 'goldilocks_and_the_three_bears'];
        console.log('[useStories] Fetching stories with slugs:', allowedSlugs);

        const { data, error: fetchError } = await supabase
          .from('fairy_tales')
          .select('id, slug, title, image_url, type, is_featured, language_code')
          .eq('is_active', true)
          .in('slug', allowedSlugs)
          .order('is_featured', { ascending: false })
          .order('title', { ascending: true });

        console.log('[useStories] Supabase response:', { data, error: fetchError, rowCount: data?.length });

        if (fetchError) {
          console.error('[useStories] Supabase error:', fetchError);
          throw fetchError;
        }

        if (!data) {
          console.warn('[useStories] No data returned');
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
        console.log('[useStories] Unique stories:', uniqueStories);
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
