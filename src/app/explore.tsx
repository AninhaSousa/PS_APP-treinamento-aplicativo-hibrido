import { View, Text, StyleSheet } from 'react-native';

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorar</Text>
      <Text>Conteúdos do PlayStation</Text>
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
});