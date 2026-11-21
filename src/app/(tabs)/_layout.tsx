import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#00439c',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopColor: '#111111',
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