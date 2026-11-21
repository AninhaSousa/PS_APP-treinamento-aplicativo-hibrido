import { useMemo } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

import { Theme } from '@/constants/theme';
import { useAuth } from '@/context/auth-context';
import { useTheme } from '@/hooks/use-theme';

export default function Jogar() {
  const isWeb = Platform.OS === 'web';
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const router = useRouter();
  const { user } = useAuth();

  const initial = user?.name?.trim().charAt(0).toUpperCase() ?? '?';

  const games = [
    {
      image: require('@/assets/images/wolverine.png'),
      title: 'Marvel’s Wolverine',
      gold: 3,
      silver: 9,
      bronze: 23,
    },
    {
      image: require('@/assets/images/imagem-fundo-ow.png'),
      title: 'Overwatch',
      gold: 18,
      silver: 27,
      bronze: 58,
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={isWeb && styles.webContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Jogar</Text>
          <Text style={styles.greeting}>Olá, {user?.name}</Text>
        </View>

        <Pressable
          style={styles.avatar}
          onPress={() => router.push('/perfil')}
        >
          <Text style={styles.avatarText}>{initial}</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>
        Jogados recentemente
      </Text>

      <View style={isWeb ? styles.webGamesGrid : styles.gamesContainer}>
        {games.map((game, index) => (
          <View
            style={[
              styles.gameCard,
              isWeb && styles.webGameCard,
            ]}
            key={index}
          >
            <Image
              source={game.image}
              style={styles.gameImage}
            />

            <View style={styles.gameInfo}>
              <Text style={styles.gameTitle}>
                {game.title}
              </Text>

              <Text style={styles.gameSubtitle}>
                Jogado recentemente
              </Text>

              <View style={styles.trophies}>
                <Text style={styles.trophyLabel}>
                  Troféus
                </Text>

                <View style={styles.trophyList}>
                  <Text style={styles.trophy}>
                    🥇 {game.gold}
                  </Text>

                  <Text style={styles.trophy}>
                    🥈 {game.silver}
                  </Text>

                  <Text style={styles.trophy}>
                    🥉 {game.bronze}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
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
      maxWidth: 1200,
      width: '100%',
      alignSelf: 'center',
      paddingHorizontal: 40,
      paddingBottom: 40,
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30,
    },

    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.text,
    },

    greeting: {
      fontSize: 15,
      color: theme.textSecondary,
      marginTop: 2,
    },

    avatar: {
      width: 46,
      height: 46,
      borderRadius: 23,
      backgroundColor: theme.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },

    avatarText: {
      color: theme.onPrimary,
      fontSize: 20,
      fontWeight: 'bold',
    },

    sectionTitle: {
      fontSize: 22,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 20,
    },

    gamesContainer: {
      alignItems: 'center',
      paddingBottom: 20,
    },

    webGamesGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 20,
    },

    gameCard: {
      width: '82%',
      backgroundColor: theme.surface,
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 25,
    },

    webGameCard: {
      width: '48%',
      marginBottom: 0,
    },

    gameImage: {
      width: '100%',
      height: 180,
      resizeMode: 'cover',
    },

    gameInfo: {
      padding: 15,
    },

    gameTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.text,
    },

    gameSubtitle: {
      fontSize: 14,
      color: theme.textSecondary,
      marginTop: 5,
    },

    trophies: {
      marginTop: 15,
      paddingTop: 12,
      borderTopWidth: 1,
      borderTopColor: theme.gold,
    },

    trophyLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 8,
    },

    trophyList: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    trophy: {
      fontSize: 14,
      color: theme.text,
    },
  });