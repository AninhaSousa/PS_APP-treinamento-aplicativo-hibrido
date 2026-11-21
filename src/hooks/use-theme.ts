import { Theme } from '@/constants/theme';
import { useThemeMode } from '@/context/theme-context';

export function useTheme(): Theme {
  return useThemeMode().theme;
}