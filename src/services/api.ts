const BASE_URL = 'https://www.cheapshark.com/api/1.0';

export type Deal = {
  dealID: string;
  gameID: string;
  storeID: string;
  title: string;
  salePrice: string;
  normalPrice: string;
  savings: string;
  thumb: string;
  metacriticScore: string;
  steamRatingText: string | null;
};

async function get<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, { signal });

  if (!response.ok) {
    throw new Error(`Erro ao buscar dados (código ${response.status}).`);
  }

  return response.json();
}

export function getDeals(pageSize = 20, signal?: AbortSignal) {
  return get<Deal[]>(`/deals?pageSize=${pageSize}`, signal);
}