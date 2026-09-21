import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Inicio() {
  return (
    <LinearGradient
      colors={['#011e4e', '#04447c', '#0583b9']}
      style={styles.container}
    >
      <View style={styles.top}>
        <Image
          source={require('@/assets/images/playstation-logo.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>
          Bem-vindo(a) ao{'\n'}PlayStation App
        </Text>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.startText}>Vamos lá!</Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sessão</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 20,
  },

  top: {
    alignItems: 'center',
  },

  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    color: '#ffffff',
    fontSize: 27,
    textAlign: 'center',
    lineHeight: 34,
  },

  bottom: {
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  startText: {
    color: '#ffffff',
    fontSize: 20,
    marginBottom: 18,
  },

  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#000000',
    fontSize: 14,
  },
});