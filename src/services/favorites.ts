import AsyncStorage from '@react-native-async-storage/async-storage';

export type Favorite = {
  gameID: string;
  title: string;
  thumb: string;
};

const keyFor = (email: string) => `ps.favorites.${email}`;

export async function loadFavorites(email: string): Promise<Favorite[]> {
  const raw = await AsyncStorage.getItem(keyFor(email));
  return raw ? JSON.parse(raw) : [];
}

export async function saveFavorites(email: string, list: Favorite[]) {
  await AsyncStorage.setItem(keyFor(email), JSON.stringify(list));
}