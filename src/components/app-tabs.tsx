import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

export default function AppTabs() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { name: 'index', label: 'Início', icon: '⌂' },
    { name: 'jogar', label: 'Jogar', icon: '🎮' },
    { name: 'noticias', label: 'Notícias', icon: '📰' },
    { name: 'store', label: 'PS Store', icon: '🛒' },
    { name: 'biblioteca', label: 'Biblioteca', icon: '▣' },
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
              } else if (tab.name === 'jogar') {
                router.push('/jogar');
              } else if (tab.name === 'noticias') {
                router.push('/noticias');
              } else if (tab.name === 'store') {
                router.push('/store');
              } else if (tab.name === 'biblioteca') {
                router.push('/biblioteca');
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
    backgroundColor: '#000000',
    borderTopWidth: 1,
    borderTopColor: '#111111',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: 22,
    color: '#ffffff',
    marginBottom: 4,
  },

  label: {
    fontSize: 11,
    color: '#ffffff',
  },

  activeText: {
    color: '#00439c',
    fontWeight: 'bold',
  },
});