import { useMemo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Theme } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import type { Deal } from '@/services/api';

export default function DealCard({ deal }: { deal: Deal }) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const discount = Math.round(Number(deal.savings));

  return (
    <View style={styles.card}>
      <Image source={{ uri: deal.thumb }} style={styles.thumb} />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {deal.title}
        </Text>

        <View style={styles.priceRow}>
          {discount > 0 && <Text style={styles.badge}>-{discount}%</Text>}
          <Text style={styles.oldPrice}>US$ {deal.normalPrice}</Text>
          <Text style={styles.price}>US$ {deal.salePrice}</Text>
        </View>
      </View>
    </View>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      flexDirection: 'row',
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
      justifyContent: 'space-between',
    },

    title: {
      fontSize: 15,
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
  });