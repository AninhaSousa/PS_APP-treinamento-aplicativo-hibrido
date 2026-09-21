import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default function Jogar() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Jogar</Text>

      <Text style={styles.sectionTitle}>Jogados recentemente</Text>

      {/* Wolverine */}
      <View style={styles.gameCard}>
        <Image
          source={require('@/assets/images/wolverine.png')}
          style={styles.gameImage}
        />

        <View style={styles.gameInfo}>
          <Text style={styles.gameTitle}>Marvel’s Wolverine</Text>

          <Text style={styles.gameSubtitle}>
            Jogado recentemente
          </Text>

          <View style={styles.trophies}>
            <Text style={styles.trophyLabel}>Troféus</Text>

            <View style={styles.trophyList}>
              <Text style={styles.trophy}>🥇 3</Text>
              <Text style={styles.trophy}>🥈 9</Text>
              <Text style={styles.trophy}>🥉 23</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Overwatch */}
      <View style={styles.gameCard}>
        <Image
          source={require('@/assets/images/imagem-fundo-ow.png')}
          style={styles.gameImage}
        />

        <View style={styles.gameInfo}>
          <Text style={styles.gameTitle}>Overwatch</Text>

          <Text style={styles.gameSubtitle}>
            Jogado recentemente
          </Text>

          <View style={styles.trophies}>
            <Text style={styles.trophyLabel}>Troféus</Text>

            <View style={styles.trophyList}>
              <Text style={styles.trophy}>🥇 18</Text>
              <Text style={styles.trophy}>🥈 27</Text>
              <Text style={styles.trophy}>🥉 58</Text>
            </View>
          </View>
        </View>
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
    marginBottom: 15,
  },

  gameCard: {
    backgroundColor: '#111111',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
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
    borderTopColor: '#051f9f',
  },

  trophyLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
  },

  trophyList: {
    flexDirection: 'row',
    gap: 15,
  },

  trophy: {
    fontSize: 14,
    color: '#ffffff',
  },
});