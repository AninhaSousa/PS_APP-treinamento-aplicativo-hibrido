import { useCallback, useEffect, useState } from 'react';

import { Deal, getDeals } from '@/services/api';

export type DealsStatus = 'loading' | 'error' | 'empty' | 'success';

export function useDeals() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [status, setStatus] = useState<DealsStatus>('loading');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    setStatus('loading');

    getDeals(20, controller.signal)
      .then((data) => {
        setDeals(data);
        setStatus(data.length === 0 ? 'empty' : 'success');
      })
      .catch((e) => {
        if (e instanceof Error && e.name === 'AbortError') return;
        setStatus('error');
      });

    return () => controller.abort();
  }, [attempt]);

  const reload = useCallback(() => setAttempt((a) => a + 1), []);

  return { deals, status, reload };
}