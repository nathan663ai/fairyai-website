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

        // Fetch all language variants for this story
        const { data, error: fetchError } = await supabase
          .from('fairy_tales')
          .select('*')
          .eq('slug', slug)
          .eq('is_active', true);

        if (fetchError) {
          throw fetchError;
        }

        if (!data || data.length === 0) {
          setStoryVariants([]);
          setLanguages([]);
          return;
        }

        const variants = (data as DbFairyTale[]).map(transformDbToStoryData);
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
