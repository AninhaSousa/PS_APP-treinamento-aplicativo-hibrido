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

import { Theme } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function Noticias() {
  const isWeb = Platform.OS === 'web';
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const news = [
    {
      image: require('@/assets/images/imagem-noticia.png'),
      title:
        'The Blood of Dawnwalker recebe dificuldade menor e melhorias no combate no próximo patch',
      description:
        'Confira as últimas notícias, jogos e novidades do universo PlayStation.',
    },
    {
      image: require('@/assets/images/imagem-noticia2.png'),
      title:
        'Trover Saves the Universe é removido das lojas digitais sem aviso prévio',
      description:
        'Trover Saves the Universe é removido das lojas digitais sem aviso prévio.',
    },
    {
      image: require('@/assets/images/imagem-noticia-3.png'),
      title:
        'Pit of Goblin será lançado em 3 de novembro para PS5',
      description:
        'Notícias • PlayStation 5 • Trailer • Vídeos',
    },
    {
      image: require('@/assets/images/lalisa.png'),
      title:
        'Lisa x PlayStation será lançada em outubro',
      description:
        'A colaboração Lisa x PlayStation será lançada em outubro: primeira divulgação do controle sem fio DualSense – Edição limitada da Lisa.',
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={isWeb && styles.webContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Notícias</Text>

      <View style={styles.tabs}>
        <Pressable style={styles.tab}>
          <Text style={styles.tabText}>Notícias oficiais</Text>
        </Pressable>

        <Pressable style={styles.activeTab}>
          <Text style={styles.activeTabText}>PS Blog</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>PS Blog</Text>

      <View style={isWeb && styles.webNewsGrid}>
        {news.map((item, index) => (
          <View
            style={[
              styles.newsCard,
              isWeb && styles.webNewsCard,
            ]}
            key={index}
          >
            <Image
              source={item.image}
              style={styles.newsImage}
            />

            <View style={styles.newsInfo}>
              <Text style={styles.newsTitle}>
                {item.title}
              </Text>

              <Text style={styles.newsDescription}>
                {item.description}
              </Text>
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

    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 20,
    },

    tabs: {
      flexDirection: 'row',
      marginBottom: 25,
      gap: 10,
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
      fontSize: 13,
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
      fontSize: 13,
      fontWeight: '600',
    },

    sectionTitle: {
      fontSize: 22,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 15,
    },

    webNewsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 20,
    },

    newsCard: {
      width: '82%',
      alignSelf: 'center',
      backgroundColor: theme.surface,
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 25,
    },

    webNewsCard: {
      width: '48%',
      alignSelf: 'flex-start',
      marginBottom: 0,
    },

    newsImage: {
      width: '100%',
      height: 180,
      resizeMode: 'cover',
    },

    newsInfo: {
      padding: 15,
    },

    newsTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 8,
    },

    newsDescription: {
      fontSize: 14,
      color: theme.textSecondary,
      lineHeight: 20,
    },
  });