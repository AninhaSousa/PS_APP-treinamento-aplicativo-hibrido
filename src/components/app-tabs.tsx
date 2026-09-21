import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

export default function AppTabs() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { name: 'index', label: 'Início', icon: '⌂' },
    { name: 'explore', label: 'Explorar', icon: '⌕' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active =
          pathname === `/${tab.name}` ||
          (tab.name === 'index' && pathname === '/');

        return (
          <Pressable
            key={tab.name}
            style={styles.tab}
            onPress={() => {
              if (tab.name === 'index') {
                router.push('/');
              } else {
                router.push('/explore');
              }
            }}
          >
            <Text style={[styles.icon, active && styles.activeText]}>
              {tab.icon}
            </Text>

            <Text style={[styles.label, active && styles.activeText]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: 24,
    color: '#666666',
    marginBottom: 4,
  },

  label: {
    fontSize: 12,
    color: '#666666',
  },

  activeText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});