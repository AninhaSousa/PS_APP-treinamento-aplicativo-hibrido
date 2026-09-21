import { View, Text, StyleSheet } from 'react-native';

export default function Noticias() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notícias</Text>
      <Text style={styles.subtitle}>Últimas novidades do PlayStation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 25,
    paddingTop: 50,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: '#555555',
  },
});