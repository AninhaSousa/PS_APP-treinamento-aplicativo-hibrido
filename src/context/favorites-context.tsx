import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import { useAuth } from '@/context/auth-context';
import {
  Favorite,
  loadFavorites,
  saveFavorites,
} from '@/services/favorites';

type FavoritesContextType = {
  favorites: Favorite[];
  isFavorite: (gameID: string) => boolean;
  toggleFavorite: (item: Favorite) => void;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const email = user?.email;
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    if (!email) {
      setFavorites([]);
      return;
    }

    loadFavorites(email)
      .then(setFavorites)
      .catch(() => setFavorites([]));
  }, [email]);

  const isFavorite = (gameID: string) =>
    favorites.some((f) => f.gameID === gameID);

  const toggleFavorite = (item: Favorite) => {
    if (!email) return;

    const next = isFavorite(item.gameID)
      ? favorites.filter((f) => f.gameID !== item.gameID)
      : [item, ...favorites];

    setFavorites(next);
    saveFavorites(email, next).catch(() => {});
  };

  return (
    <FavoritesContext value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error('useFavorites deve ser usado dentro do FavoritesProvider');
  }
  return ctx;
}