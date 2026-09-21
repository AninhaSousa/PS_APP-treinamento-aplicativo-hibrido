import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

export default function Biblioteca() {
  const games = [
    {
      image: require('@/assets/images/wolverine.png'),
      title: 'Marvel’s Wolverine',
    },
    {
      image: require('@/assets/images/imagem-fundo-ow.png'),
      title: 'Overwatch',
    },
    {
      image: require('@/assets/images/detroit.png'),
      title: 'Detroit: Become Human',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Biblioteca</Text>

      <Text style={styles.sectionTitle}>Seus jogos</Text>

      <View style={styles.gamesGrid}>
        {games.map((game, index) => (
          <View style={styles.gameCard} key={index}>
            <Image source={game.image} style={styles.gameImage} />

            <Text style={styles.gameTitle}>{game.title}</Text>
          </View>
        ))}
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

  gamesGrid: {
    gap: 15,
  },

  gameCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
  },

  gameImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },

  gameTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    padding: 15,
  },
});