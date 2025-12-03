import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { DbFairyTale, StoryData, transformDbToStoryData } from '../lib/types';

interface UseStoryResult {
  // All language variants of this story
  storyVariants: StoryData[];
  // Available language codes
  languages: string[];
  loading: boolean;
  error: string | null;
}

export function useStory(slug: string): UseStoryResult {
  const [storyVariants, setStoryVariants] = useState<StoryData[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStory() {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        console.log('[useStory] Fetching story with slug:', slug);

        // Fetch all language variants for this story
        const { data, error: fetchError } = await supabase
          .from('fairy_tales')
          .select('*')
          .eq('slug', slug)
          .eq('is_active', true);

        console.log('[useStory] Supabase response:', { data, error: fetchError, rowCount: data?.length });

        if (fetchError) {
          console.error('[useStory] Supabase error:', fetchError);
          throw fetchError;
        }

        if (!data || data.length === 0) {
          console.warn('[useStory] No data found for slug:', slug);
          setStoryVariants([]);
          setLanguages([]);
          return;
        }

        console.log('[useStory] Raw data sample:', data[0]);
        const variants = (data as DbFairyTale[]).map(transformDbToStoryData);
        console.log('[useStory] Transformed variants:', variants.length, variants[0]);
        const langCodes = variants.map(v => v.languageCode);

        // Sort languages with en-GB first
        langCodes.sort((a, b) => {
          if (a === 'en-GB') return -1;
          if (b === 'en-GB') return 1;
          return a.localeCompare(b);
        });

        setStoryVariants(variants);
        setLanguages(langCodes);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch story');
      } finally {
        setLoading(false);
      }
    }

    fetchStory();
  }, [slug]);

  return { storyVariants, languages, loading, error };
}
