import { useCallback, useEffect, useState } from 'react';

import { GameSearchResult, searchGames } from '@/services/api';

export type SearchStatus = 'idle' | 'loading' | 'error' | 'empty' | 'success';

export function useGameSearch(query: string) {
  const [results, setResults] = useState<GameSearchResult[]>([]);
  const [status, setStatus] = useState<SearchStatus>('idle');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const term = query.trim();

    if (term.length < 2) {
      setResults([]);
      setStatus('idle');
      return;
    }

    setStatus('loading');

    const controller = new AbortController();

    const timer = setTimeout(() => {
      searchGames(term, controller.signal)
        .then((data) => {
          setResults(data);
          setStatus(data.length === 0 ? 'empty' : 'success');
        })
        .catch((e) => {
          if (e instanceof Error && e.name === 'AbortError') return;
          setStatus('error');
        });
    }, 500);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, attempt]);

  const retry = useCallback(() => setAttempt((a) => a + 1), []);

  return { results, status, retry };
}