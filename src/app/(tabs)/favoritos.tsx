import { useMemo } from 'react';
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

import { Theme } from '@/constants/theme';
import { useFavorites } from '@/context/favorites-context';
import { useTheme } from '@/hooks/use-theme';

export default function Favoritos() {
  const isWeb = Platform.OS === 'web';
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const router = useRouter();
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <View style={[styles.container, isWeb && styles.webContainer]}>
      <Text style={styles.title}>Favoritos</Text>

      {favorites.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.emptyTitle}>Nenhum favorito ainda</Text>
          <Text style={styles.emptyText}>
            Abra um jogo na PS Store e toque em ♡ Favoritar para ele aparecer
            aqui.
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.gameID}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <Pressable
              style={styles.card}
              onPress={() =>
                router.push({
                  pathname: '/jogo/[id]',
                  params: { id: item.gameID },
                })
              }
            >
              <Image source={{ uri: item.thumb }} style={styles.thumb} />

              <Text style={styles.gameTitle} numberOfLines={2}>
                {item.title}
              </Text>

              <Pressable
                style={styles.remove}
                onPress={() => toggleFavorite(item)}
                hitSlop={10}
              >
                <Text style={styles.removeText}>♥</Text>
              </Pressable>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 20,
      paddingTop: 40,
    },

    webContainer: {
      maxWidth: 1200,
      width: '100%',
      alignSelf: 'center',
      paddingHorizontal: 40,
    },

    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 25,
    },

    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },

    emptyTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 8,
    },

    emptyText: {
      fontSize: 15,
      color: theme.textSecondary,
      textAlign: 'center',
      lineHeight: 22,
    },

    list: {
      paddingBottom: 20,
    },

    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.surface,
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 15,
    },

    thumb: {
      width: 120,
      height: 70,
      resizeMode: 'cover',
    },

    gameTitle: {
      flex: 1,
      fontSize: 15,
      fontWeight: 'bold',
      color: theme.text,
      paddingHorizontal: 12,
    },

    remove: {
      paddingHorizontal: 16,
    },

    removeText: {
      fontSize: 22,
      color: theme.primary,
    },
  });