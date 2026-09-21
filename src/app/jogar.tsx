import { View, Text, StyleSheet, Image } from 'react-native';

export default function Jogar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogar</Text>

      <Text style={styles.sectionTitle}>Continue jogando</Text>

      <View style={styles.gameCard}>
        <Image
          source={require('@/assets/images/imagem-fundo-ow.png')}
          style={styles.gameImage}
        />

        <View style={styles.gameInfo}>
          <Text style={styles.gameTitle}>Seu jogo</Text>
          <Text style={styles.gameSubtitle}>Continuar jogando</Text>
        </View>
      </View>
    </View>
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
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 15,
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

  gameInfo: {
    padding: 15,
  },

  gameTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },

  gameSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
});