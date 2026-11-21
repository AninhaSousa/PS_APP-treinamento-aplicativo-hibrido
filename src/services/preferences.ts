import AsyncStorage from '@react-native-async-storage/async-storage';

export type ThemeMode = 'auto' | 'light' | 'dark';

const THEME_KEY = 'ps.themeMode';

export async function loadThemeMode(): Promise<ThemeMode> {
  const raw = await AsyncStorage.getItem(THEME_KEY);
  return raw === 'light' || raw === 'dark' ? raw : 'auto';
}

export async function saveThemeMode(mode: ThemeMode) {
  await AsyncStorage.setItem(THEME_KEY, mode);
}