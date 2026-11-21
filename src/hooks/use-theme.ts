import { useColorScheme } from 'react-native';

import { Colors, Theme } from '@/constants/theme';

export function useTheme(): Theme {
  const scheme = useColorScheme();
  return scheme === 'light' ? Colors.light : Colors.dark;
}