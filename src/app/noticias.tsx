import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

export default function Noticias() {
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
      title: 'Pit of Goblin será lançado em 3 de novembro para PS5',
      description: 'Notícias • PlayStation 5 • Trailer • Vídeos',
    },
  ];

  return (
    <ScrollView style={styles.container}>
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

      {news.map((item, index) => (
        <View style={styles.newsCard} key={index}>
          <Image source={item.image} style={styles.newsImage} />

          <View style={styles.newsInfo}>
            <Text style={styles.newsTitle}>{item.title}</Text>

            <Text style={styles.newsDescription}>
              {item.description}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
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
    backgroundColor: '#000000',
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeTabText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },

  tab: {
    flex: 1,
    height: 42,
    backgroundColor: '#ffffff',
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
  },

  tabText: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 15,
  },

  newsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 25,
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
    color: '#000000',
    marginBottom: 8,
  },

  newsDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});