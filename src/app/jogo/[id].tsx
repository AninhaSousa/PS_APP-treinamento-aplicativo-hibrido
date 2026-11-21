import { useMemo } from 'react';
import {
  ActivityIndicator,
  Image,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { Theme } from '@/constants/theme';
import { useFavorites } from '@/context/favorites-context';
import { useGame } from '@/hooks/use-game';
import { useTheme } from '@/hooks/use-theme';
import { dealLink } from '@/services/api';

export default function DetalheJogo() {
  const isWeb = Platform.OS === 'web';
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { game, stores, status, reload } = useGame(id);
  const { isFavorite, toggleFavorite } = useFavorites();

  const favorited = isFavorite(id);

  const header = (
    <View style={styles.topRow}>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.back}>← Voltar</Text>
      </Pressable>

      {status === 'success' && game && (
        <Pressable
          onPress={() =>
            toggleFavorite({
              gameID: id,
              title: game.info.title,
              thumb: game.info.thumb,
            })
          }
        >
          <Text style={styles.heart}>
            {favorited ? '♥ Favoritado' : '♡ Favoritar'}
          </Text>
        </Pressable>
      )}
    </View>
  );

  if (status === 'loading') {
    return (
      <View style={styles.container}>
        {header}
        <View style={styles.center}>
          <ActivityIndicator size="large" color={theme.text} />
          <Text style={styles.message}>Carregando jogo...</Text>
        </View>
      </View>
    );
  }

  if (status === 'error' || !game) {
    return (
      <View style={styles.container}>
        {header}
        <View style={styles.center}>
          <Text style={styles.error}>
            Não foi possível carregar este jogo. Confira sua conexão.
          </Text>
          <Pressable style={styles.retry} onPress={reload}>
            <Text style={styles.retryText}>Tentar novamente</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  const bestDate = new Date(
    game.cheapestPriceEver.date * 1000,
  ).toLocaleDateString('pt-BR');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={isWeb && styles.webContent}
      showsVerticalScrollIndicator={false}
    >
      {header}

      <Image source={{ uri: game.info.thumb }} style={styles.cover} />

      <Text style={styles.title}>{game.info.title}</Text>

      <Text style={styles.best}>
        Menor preço já registrado: US$ {game.cheapestPriceEver.price} (
        {bestDate})
      </Text>

      <Text style={styles.sectionTitle}>Preços por loja</Text>

      {game.deals.length === 0 && (
        <Text style={styles.message}>Nenhuma oferta disponível agora.</Text>
      )}

      {game.deals.map((deal) => {
        const discount = Math.round(Number(deal.savings));

        return (
          <View key={deal.dealID} style={styles.dealRow}>
            <View style={styles.dealInfo}>
              <Text style={styles.storeName}>
                {stores[deal.storeID] ?? `Loja ${deal.storeID}`}
              </Text>

              <View style={styles.priceRow}>
                {discount > 0 && (
                  <Text style={styles.badge}>-{discount}%</Text>
                )}
                <Text style={styles.oldPrice}>US$ {deal.retailPrice}</Text>
                <Text style={styles.price}>US$ {deal.price}</Text>
              </View>
            </View>

            <Pressable
              style={styles.buy}
              onPress={() => Linking.openURL(dealLink(deal.dealID))}
            >
              <Text style={styles.buyText}>Ver oferta</Text>
            </Pressable>
          </View>
        );
      })}
    </ScrollView>
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

    webContent: {
      maxWidth: 800,
      width: '100%',
      alignSelf: 'center',
      paddingBottom: 40,
    },

    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },

    back: {
      color: theme.primary,
      fontSize: 16,
      fontWeight: '600',
    },

    heart: {
      color: theme.primary,
      fontSize: 16,
      fontWeight: '600',
    },

    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    message: {
      color: theme.textSecondary,
      fontSize: 15,
      marginTop: 12,
      textAlign: 'center',
    },

    error: {
      color: '#ff5a5f',
      fontSize: 15,
      textAlign: 'center',
      marginBottom: 15,
    },

    retry: {
      height: 44,
      paddingHorizontal: 24,
      backgroundColor: theme.primary,
      borderRadius: 22,
      justifyContent: 'center',
      alignItems: 'center',
    },

    retryText: {
      color: theme.onPrimary,
      fontSize: 15,
      fontWeight: '600',
    },

    cover: {
      width: '100%',
      height: 180,
      borderRadius: 12,
      backgroundColor: theme.surface,
      resizeMode: 'contain',
      marginBottom: 20,
    },

    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 8,
    },

    best: {
      fontSize: 14,
      color: theme.textSecondary,
      marginBottom: 25,
    },

    sectionTitle: {
      fontSize: 22,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 15,
    },

    dealRow: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.surface,
      borderRadius: 12,
      padding: 14,
      marginBottom: 12,
      gap: 12,
    },

    dealInfo: {
      flex: 1,
    },

    storeName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.text,
    },

    priceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginTop: 6,
    },

    badge: {
      backgroundColor: theme.primary,
      color: theme.onPrimary,
      fontSize: 12,
      fontWeight: 'bold',
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 4,
      overflow: 'hidden',
    },

    oldPrice: {
      fontSize: 13,
      color: theme.textSecondary,
      textDecorationLine: 'line-through',
    },

    price: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.text,
    },

    buy: {
      height: 38,
      paddingHorizontal: 14,
      backgroundColor: theme.primary,
      borderRadius: 19,
      justifyContent: 'center',
      alignItems: 'center',
    },

    buyText: {
      color: theme.onPrimary,
      fontSize: 13,
      fontWeight: '600',
    },
  });