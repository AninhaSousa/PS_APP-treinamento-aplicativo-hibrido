import { Stack } from 'expo-router';

import { AuthProvider, useAuth } from '@/context/auth-context';
import { useTheme } from '@/hooks/use-theme';

function RootNavigator() {
  const theme = useTheme();
  const { user, isLoading } = useAuth();

  if (isLoading) return null;

  const isLoggedIn = !!user;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.background },
      }}
    >
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="jogo/[id]" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}