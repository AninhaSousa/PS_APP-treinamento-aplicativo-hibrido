import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export default function Noticias() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notícias</Text>

      <Text style={styles.sectionTitle}>Últimas novidades</Text>

      <View style={styles.newsCard}>
        <Image
          source={require('@/assets/images/imagem-noticia.png')}
          style={styles.newsImage}
        />

        <View style={styles.newsInfo}>
          <Text style={styles.newsTitle}>
            The Blood of Dawnwalker recebe dificuldade menor e melhorias no combate no próximo patch
          </Text>

          <Text style={styles.newsDescription}>
            Confira as últimas notícias, jogos e novidades do universo PlayStation.
          </Text>
        </View>
      </View>

      <View style={styles.newsCard}>
        <Image
          source={require('@/assets/images/imagem-noticia2.png')}
          style={styles.newsImage}
        />

        <View style={styles.newsInfo}>
          <Text style={styles.newsTitle}>
            Trover Saves the Universe é removido das lojas digitais sem aviso prévio
          </Text>

          <Text style={styles.newsDescription}>
            Confira mais sobre.
          </Text>
        </View>
      </View>

      <View style={styles.newsCard}>
        <Image
          source={require('@/assets/images/imagem-noticia-3.png')}
          style={styles.newsImage}
        />

        <View style={styles.newsInfo}>
          <Text style={styles.newsTitle}>
            Pit of Goblin será lançado em 3 de novembro para PS5
          </Text>

          <Text style={styles.newsDescription}>
            Notícias • PlayStation 5 • Trailer • Vídeos
          </Text>
        </View>
      </View>
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
    marginBottom: 25,
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