import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default function Jogar() {
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
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Jogar</Text>

      <Text style={styles.sectionTitle}>
        Jogados recentemente
      </Text>

      <View style={styles.gamesContainer}>
        {games.map((game, index) => (
          <View style={styles.gameCard} key={index}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    paddingTop: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 20,
  },

  gamesContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },

  gameCard: {
    width: '70%',
    backgroundColor: '#111111',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 25,
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
    color: '#ffffff',
  },

  gameSubtitle: {
    fontSize: 14,
    color: '#cccccc',
    marginTop: 5,
  },

  trophies: {
    marginTop: 15,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#0b28bc',
  },

  trophyLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
  },

  trophyList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  trophy: {
    fontSize: 14,
    color: '#ffffff',
  },
});