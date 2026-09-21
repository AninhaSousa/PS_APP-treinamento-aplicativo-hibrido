import { Slot } from 'expo-router';
import { View, StyleSheet } from 'react-native';

import AppTabs from '@/components/app-tabs';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Slot />
      </View>

      <View style={styles.bottomBar}>
        <AppTabs />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  content: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  bottomBar: {
    backgroundColor: '#ffffff',
  },
});