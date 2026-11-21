import { useMemo } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DealCard from '@/components/deal-card';
import { Theme } from '@/constants/theme';
import { useDeals } from '@/hooks/use-deals';
import { useTheme } from '@/hooks/use-theme';

export default function DealsList() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { deals, status, reload } = useDeals();

  if (status === 'loading') {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={theme.text} />
        <Text style={styles.message}>Carregando ofertas...</Text>
      </View>
    );
  }

  if (status === 'error') {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>
          Não foi possível carregar as ofertas. Confira sua conexão.
        </Text>
        <Pressable style={styles.button} onPress={reload}>
          <Text style={styles.buttonText}>Tentar novamente</Text>
        </Pressable>
      </View>
    );
  }

  if (status === 'empty') {
    return (
      <View style={styles.center}>
        <Text style={styles.message}>Nenhuma oferta encontrada no momento.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={deals}
      keyExtractor={(item) => item.dealID}
      renderItem={({ item }) => <DealCard deal={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
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
  });