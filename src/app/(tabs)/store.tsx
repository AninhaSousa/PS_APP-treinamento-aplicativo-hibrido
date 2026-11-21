import { useMemo, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from 'react-native';

import DealsList from '@/components/deals-list';
import { Theme } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type TabKey = 'novidades' | 'colecoes' | 'ofertas' | 'assinaturas';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'novidades', label: 'Novidades' },
  { key: 'colecoes', label: 'Coleções' },
  { key: 'ofertas', label: 'Ofertas' },
  { key: 'assinaturas', label: 'Assinaturas' },
];

export default function Store() {
  const isWeb = Platform.OS === 'web';
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [tab, setTab] = useState<TabKey>('novidades');

  const games = [
    {
      image: require('@/assets/images/wolverine.png'),
      title: 'Marvel’s Wolverine',
      description:
        'Jogue como o Wolverine. Aniquile os inimigos de maneira brutal e explosiva em uma disputa global pela sobrevivência dos mutantes.',
      price: 'R$ 399,90',
    },
    {
      image: require('@/assets/images/gta.png'),
      title: 'Grand Theft Auto VI: Ultimate Edition',
      description:
        'A história acompanha os protagonistas Lucia Caminos e Jason Duval, um casal de criminosos envolvidos em uma conspiração no estado fictício de Leonida.',
      price: 'R$ 549,90',
    },
    {
      image: require('@/assets/images/cod.png'),
      title: 'Call of Duty®: Black Ops II',
      description:
        'Jogue em uma Guerra Fria do século XXI em um futuro próximo, ambientado em 2025, onde armas e tecnologia avançada se uniram.',
      price: 'R$ 87,45',
    },
    {
      image: require('@/assets/images/aliens.png'),
      title: 'Aliens Roadside',
      description:
        'Jogo de simulação e gerenciamento onde você assume o papel de um alienígena disfarçado de humano.',
      price: 'R$ 82,50',
    },
    {
      image: require('@/assets/images/detroit.png'),
      title: 'Detroit: Become Human',
      description:
        'O mundo foi transformado pelo uso de androides criados pela empresa CyberLife. Máquinas começam a sentir emoções e viram os chamados "divergentes".',
      price: 'R$ 71,50',
    },
    {
      image: require('@/assets/images/forever_ago.png'),
      title: 'Forever Ago',
      description:
        'Após um acontecimento trágico, ele parte em uma viagem de van rumo ao norte em busca de redenção, aceitação e paz com o passado.',
      price: 'Ainda em lançamento',
    },
  ];

  const currentLabel = TABS.find((t) => t.key === tab)?.label;

  return (
    <View style={[styles.container, isWeb && styles.webContainer]}>
      <Text style={styles.title}>PS Store</Text>

      <View style={styles.tabs}>
        {TABS.map((t) => (
          <Pressable
            key={t.key}
            style={t.key === tab ? styles.activeTab : styles.tab}
            onPress={() => setTab(t.key)}
          >
            <Text
              style={t.key === tab ? styles.activeTabText : styles.tabText}
            >
              {t.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.sectionTitle}>{currentLabel}</Text>

      <View style={styles.body}>
        {tab === 'novidades' && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={isWeb && styles.webGamesGrid}>
              {games.map((game, index) => (
                <View
                  style={[styles.card, isWeb && styles.webCard]}
                  key={index}
                >
                  <Image source={game.image} style={styles.gameImage} />

                  <View style={styles.gameInfo}>
                    <Text style={styles.gameTitle}>{game.title}</Text>
                    <Text style={styles.description}>{game.description}</Text>
                    <Text style={styles.price}>{game.price}</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        )}

        {tab === 'ofertas' && <DealsList />}

        {(tab === 'colecoes' || tab === 'assinaturas') && (
          <Text style={styles.soon}>Em breve.</Text>
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

    tabs: {
      flexDirection: 'row',
      marginBottom: 25,
      gap: 8,
    },

    activeTab: {
      flex: 1,
      height: 42,
      backgroundColor: theme.primary,
      borderRadius: 21,
      justifyContent: 'center',
      alignItems: 'center',
    },

    activeTabText: {
      color: theme.onPrimary,
      fontSize: 12,
      fontWeight: '600',
    },

    tab: {
      flex: 1,
      height: 42,
      backgroundColor: theme.surface,
      borderRadius: 21,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.border,
    },

    tabText: {
      color: theme.text,
      fontSize: 12,
      fontWeight: '600',
    },

    sectionTitle: {
      fontSize: 22,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 15,
    },

    soon: {
      color: theme.textSecondary,
      fontSize: 15,
      textAlign: 'center',
      marginTop: 30,
    },

    webGamesGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 20,
    },

    card: {
      width: '82%',
      alignSelf: 'center',
      backgroundColor: theme.surface,
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 20,
    },

    webCard: {
      width: '48%',
      alignSelf: 'flex-start',
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
      marginBottom: 8,
    },

    description: {
      fontSize: 14,
      color: theme.textSecondary,
      lineHeight: 20,
      marginBottom: 12,
    },

    price: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.text,
    },
  });