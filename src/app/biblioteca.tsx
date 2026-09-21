import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

export default function Biblioteca() {
  const games = [
    require('@/assets/images/wolverine.png'),
    require('@/assets/images/imagem-fundo-ow.png'),
    require('@/assets/images/detroit.png'),
  ];

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Biblioteca</Text>

      <View style={styles.topButtons}>
        <Pressable style={styles.activeTopButton}>
          <Text style={styles.activeTopButtonText}>Jogos</Text>
        </Pressable>

        <Pressable style={styles.topButton}>
          <Text style={styles.topButtonText}>Capturas</Text>
        </Pressable>
      </View>

      <View style={styles.subButtons}>
        <Pressable style={styles.activeSubButton}>
          <Text style={styles.activeSubButtonText}>Jogados</Text>
        </Pressable>

        <Pressable style={styles.subButton}>
          <Text style={styles.subButtonText}>Comprados</Text>
        </Pressable>
      </View>

      <View style={styles.gamesGrid}>
        {games.map((game, index) => (
          <View style={styles.gameCard} key={index}>
            <Image
              source={game}
              style={styles.gameImage}
            />
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
    marginBottom: 25,
  },

  topButtons: {
    flexDirection: 'row',
    marginBottom: 15,
    gap: 10,
  },

  activeTopButton: {
    flex: 1,
    height: 45,
    backgroundColor: '#00439c',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeTopButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },

  topButton: {
    flex: 1,
    height: 45,
    backgroundColor: '#111111',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
  },

  topButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },

  subButtons: {
    flexDirection: 'row',
    marginBottom: 25,
    gap: 20,
  },

  activeSubButton: {
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#00439c',
  },

  activeSubButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },

  subButton: {
    paddingBottom: 8,
  },

  subButtonText: {
    color: '#cccccc',
    fontSize: 15,
  },

  gamesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },

  gameCard: {
    width: '48%',
    backgroundColor: '#111111',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
  },

  gameImage: {
    width: '100%',
    height: 190,
    resizeMode: 'cover',
  },
});