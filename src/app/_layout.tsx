import { Stack } from 'expo-router';

import { AuthProvider } from '@/context/auth-context';
import { useTheme } from '@/hooks/use-theme';

function RootNavigator() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.background },
      }}
    />
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}