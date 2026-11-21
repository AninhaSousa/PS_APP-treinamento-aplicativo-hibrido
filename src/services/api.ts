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

export type GameDeal = {
  storeID: string;
  dealID: string;
  price: string;
  retailPrice: string;
  savings: string;
};

export type GameDetails = {
  info: { title: string; thumb: string };
  cheapestPriceEver: { price: string; date: number };
  deals: GameDeal[];
};

export type Store = {
  storeID: string;
  storeName: string;
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

export function getGameById(id: string, signal?: AbortSignal) {
  return get<GameDetails>(`/games?id=${encodeURIComponent(id)}`, signal);
}

export function getStores(signal?: AbortSignal) {
  return get<Store[]>('/stores', signal);
}

export function dealLink(dealID: string) {
  return `https://www.cheapshark.com/redirect?dealID=${dealID}`;
}