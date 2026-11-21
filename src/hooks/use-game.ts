import { useCallback, useEffect, useState } from 'react';

import { GameDetails, getGameById, getStores } from '@/services/api';

export type GameStatus = 'loading' | 'error' | 'success';

export function useGame(id: string) {
  const [game, setGame] = useState<GameDetails | null>(null);
  const [stores, setStores] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<GameStatus>('loading');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    setStatus('loading');

    Promise.all([
      getGameById(id, controller.signal),
      getStores(controller.signal),
    ])
      .then(([gameData, storeList]) => {
        setGame(gameData);
        setStores(
          Object.fromEntries(storeList.map((s) => [s.storeID, s.storeName])),
        );
        setStatus('success');
      })
      .catch((e) => {
        if (e instanceof Error && e.name === 'AbortError') return;
        setStatus('error');
      });

    return () => controller.abort();
  }, [id, attempt]);

  const reload = useCallback(() => setAttempt((a) => a + 1), []);

  return { game, stores, status, reload };
}