import { View, Text, StyleSheet } from 'react-native';

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PlayStation</Text>
      <Text style={styles.text}>Iniciar sessão</Text>
      <Text style={styles.text}>Criar conta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },

  text: {
    color: '#000000',
  },
});