import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Inicio() {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Text style={styles.logo}>PS</Text>

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

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003791',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 20,
  },

  top: {
    alignItems: 'center',
  },

  logo: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#ffffff',
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