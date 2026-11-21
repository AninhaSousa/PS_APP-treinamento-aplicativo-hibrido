import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useColorScheme } from 'react-native';

import { Colors, Theme } from '@/constants/theme';
import {
  ThemeMode,
  loadThemeMode,
  saveThemeMode,
} from '@/services/preferences';

type ThemeContextType = {
  mode: ThemeMode;
  theme: Theme;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const system = useColorScheme();
  const [mode, setModeState] = useState<ThemeMode>('auto');

  useEffect(() => {
    loadThemeMode()
      .then(setModeState)
      .catch(() => {});
  }, []);

  const setMode = (next: ThemeMode) => {
    setModeState(next);
    saveThemeMode(next).catch(() => {});
  };

  const scheme =
    mode === 'auto' ? (system === 'light' ? 'light' : 'dark') : mode;
  const theme = scheme === 'light' ? Colors.light : Colors.dark;

  return (
    <ThemeContext value={{ mode, theme, setMode }}>{children}</ThemeContext>
  );
}

export function useThemeMode() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useThemeMode deve ser usado dentro do ThemeModeProvider');
  }
  return ctx;
}