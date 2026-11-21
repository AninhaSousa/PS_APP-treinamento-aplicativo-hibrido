import { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

import DealsList from '@/components/deals-list';
import { Theme } from '@/constants/theme';
import { useGameSearch } from '@/hooks/use-game-search';
import { useTheme } from '@/hooks/use-theme';

export default function Explorar() {
  const isWeb = Platform.OS === 'web';
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const router = useRouter();

  const [query, setQuery] = useState('');
  const { results, status, retry } = useGameSearch(query);

  return (
    <View style={[styles.container, isWeb && styles.webContainer]}>
      <Text style={styles.title}>Explorar</Text>

      <TextInput
        style={styles.search}
        placeholder="Pesquisar jogos"
        placeholderTextColor={theme.textSecondary}
        autoCapitalize="none"
        autoCorrect={false}
        value={query}
        onChangeText={setQuery}
      />

      <View style={styles.body}>
        {status === 'idle' && (
          <>
            <Text style={styles.sectionTitle}>Ofertas em destaque</Text>
            <DealsList />
          </>
        )}

        {status === 'loading' && (
          <View style={styles.center}>
            <ActivityIndicator size="large" color={theme.text} />
            <Text style={styles.message}>Buscando jogos...</Text>
          </View>
        )}

        {status === 'error' && (
          <View style={styles.center}>
            <Text style={styles.error}>
              Não foi possível buscar os jogos. Confira sua conexão.
            </Text>
            <Pressable style={styles.button} onPress={retry}>
              <Text style={styles.buttonText}>Tentar novamente</Text>
            </Pressable>
          </View>
        )}

        {status === 'empty' && (
          <View style={styles.center}>
            <Text style={styles.message}>
              Nenhum jogo encontrado para “{query.trim()}”.
            </Text>
          </View>
        )}

        {status === 'success' && (
          <FlatList
            data={results}
            keyExtractor={(item) => item.gameID}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
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

                <View style={styles.info}>
                  <Text style={styles.gameTitle} numberOfLines={2}>
                    {item.external}
                  </Text>
                  <Text style={styles.from}>
                    a partir de US$ {item.cheapest}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        )}
      </View>
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

    body: {
      flex: 1,
    },

    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 20,
    },

    search: {
      height: 45,
      backgroundColor: theme.surface,
      borderRadius: 8,
      paddingHorizontal: 15,
      fontSize: 16,
      color: theme.text,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: theme.border,
    },

    sectionTitle: {
      fontSize: 22,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 15,
    },

    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
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

    button: {
      height: 44,
      paddingHorizontal: 24,
      backgroundColor: theme.primary,
      borderRadius: 22,
      justifyContent: 'center',
      alignItems: 'center',
    },

    buttonText: {
      color: theme.onPrimary,
      fontSize: 15,
      fontWeight: '600',
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

    info: {
      flex: 1,
      padding: 12,
    },

    gameTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      color: theme.text,
    },

    from: {
      fontSize: 14,
      color: theme.textSecondary,
      marginTop: 6,
    },
  });