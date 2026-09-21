import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

export default function Explorar() {
  const games = [
    require('@/assets/images/wolverine.png'),
    require('@/assets/images/gta.png'),
    require('@/assets/images/cod.png'),
    require('@/assets/images/aliens.png'),
    require('@/assets/images/detroit.png'),
    require('@/assets/images/forever_ago.png'),
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Explorar</Text>

      <TextInput
        style={styles.search}
        placeholder="Pesquisar"
        placeholderTextColor="#777777"
      />

      <View style={styles.buttons}>
        <Pressable style={styles.activeButton}>
          <Text style={styles.activeButtonText}>Jogos</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Jogadores</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Tendências</Text>

      <View style={styles.gamesGrid}>
        {games.map((game, index) => (
          <View style={styles.gameCard} key={index}>
            <Image source={game} style={styles.gameImage} />
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
    marginBottom: 20,
  },

  search: {
    height: 45,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000000',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#dddddd',
  },

  buttons: {
    flexDirection: 'row',
    marginBottom: 25,
    gap: 10,
  },

  activeButton: {
    flex: 1,
    height: 42,
    backgroundColor: '#000000',
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },

  button: {
    flex: 1,
    height: 42,
    backgroundColor: '#ffffff',
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
  },

  buttonText: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 15,
  },

  gamesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },

  gameCard: {
    width: '48%',
    backgroundColor: '#ffffff',
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