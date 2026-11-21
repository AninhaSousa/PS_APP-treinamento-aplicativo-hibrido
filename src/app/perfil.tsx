import { useMemo } from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

import { Theme } from '@/constants/theme';
import { useAuth } from '@/context/auth-context';
import { useFavorites } from '@/context/favorites-context';
import { useTheme } from '@/hooks/use-theme';

export default function Perfil() {
  const isWeb = Platform.OS === 'web';
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const router = useRouter();
  const { user, signOut } = useAuth();
  const { favorites } = useFavorites();

  const initial = user?.name?.trim().charAt(0).toUpperCase() ?? '?';

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, isWeb && styles.webContent]}
      showsVerticalScrollIndicator={false}
    >
      <Pressable onPress={() => router.back()}>
        <Text style={styles.back}>← Voltar</Text>
      </Pressable>

      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initial}</Text>
        </View>

        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      <View style={styles.stat}>
        <Text style={styles.statNumber}>{favorites.length}</Text>
        <Text style={styles.statLabel}>
          {favorites.length === 1 ? 'jogo favoritado' : 'jogos favoritados'}
        </Text>
      </View>

      <Pressable
        style={styles.settings}
        onPress={() => router.push('/configuracoes')}
      >
        <Text style={styles.settingsText}>Configurações</Text>
        <Text style={styles.arrow}>›</Text>
      </Pressable>

      <Pressable style={styles.logout} onPress={signOut}>
        <Text style={styles.logoutText}>Sair da conta</Text>
      </Pressable>
    </ScrollView>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },

    content: {
      padding: 20,
      paddingTop: 40,
    },

    webContent: {
      maxWidth: 600,
      width: '100%',
      alignSelf: 'center',
    },

    back: {
      color: theme.primary,
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 25,
    },

    header: {
      alignItems: 'center',
      marginBottom: 30,
    },

    avatar: {
      width: 90,
      height: 90,
      borderRadius: 45,
      backgroundColor: theme.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
    },

    avatarText: {
      color: theme.onPrimary,
      fontSize: 38,
      fontWeight: 'bold',
    },

    name: {
      fontSize: 26,
      fontWeight: 'bold',
      color: theme.text,
    },

    email: {
      fontSize: 15,
      color: theme.textSecondary,
      marginTop: 4,
    },

    stat: {
      backgroundColor: theme.surface,
      borderRadius: 12,
      padding: 20,
      alignItems: 'center',
      marginBottom: 20,
    },

    statNumber: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.text,
    },

    statLabel: {
      fontSize: 14,
      color: theme.textSecondary,
      marginTop: 4,
    },

    settings: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.surface,
      borderRadius: 12,
      padding: 18,
      marginBottom: 20,
    },

    settingsText: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.text,
    },

    arrow: {
      fontSize: 22,
      color: theme.textSecondary,
    },

    logout: {
      height: 48,
      borderRadius: 24,
      borderWidth: 1,
      borderColor: theme.border,
      justifyContent: 'center',
      alignItems: 'center',
    },

    logoutText: {
      color: '#ff5a5f',
      fontSize: 16,
      fontWeight: '600',
    },
  });