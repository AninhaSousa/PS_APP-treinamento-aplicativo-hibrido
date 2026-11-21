import { Tabs } from 'expo-router';
import { Text } from 'react-native';

import { useTheme } from '@/hooks/use-theme';

export default function TabsLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.text,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: theme.surface,
        },
        tabBarLabelStyle: { fontSize: 11 },
      }}
    >
      <Tabs.Screen
        name="jogar"
        options={{
          title: 'Jogar',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 22, color }}>🎮</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="noticias"
        options={{
          title: 'Notícias',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 22, color }}>📰</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          title: 'PS Store',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 22, color }}>🛒</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="biblioteca"
        options={{
          title: 'Biblioteca',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 22, color }}>▣</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 22, color }}>⌕</Text>
          ),
        }}
      />
    </Tabs>
  );
}