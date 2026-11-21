import { useMemo, useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

import { Theme } from '@/constants/theme';
import { useAuth } from '@/context/auth-context';
import { useTheme } from '@/hooks/use-theme';

export default function Login() {
  const isWeb = Platform.OS === 'web';
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const router = useRouter();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password) {
      setError('Preencha e-mail e senha.');
      return;
    }

    setError('');
    setLoading(true);
    try {
      await signIn(email, password);
      router.replace('/jogar'); // provisório, sai quando protegermos as rotas
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erro ao entrar.');
      setLoading(false);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, isWeb && styles.webContent]}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Iniciar sessão</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor={theme.textSecondary}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={theme.textSecondary}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <Pressable
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color={theme.onPrimary} />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </Pressable>
    </ScrollView>
  );
}

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },

    content: {
      flexGrow: 1,
      justifyContent: 'center',
      padding: 25,
    },

    webContent: {
      maxWidth: 420,
      width: '100%',
      alignSelf: 'center',
    },

    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 30,
    },

    input: {
      height: 48,
      backgroundColor: theme.surface,
      borderRadius: 8,
      paddingHorizontal: 15,
      fontSize: 16,
      color: theme.text,
      marginBottom: 15,
      borderWidth: 1,
      borderColor: theme.border,
    },

    error: {
      color: '#ff5a5f',
      fontSize: 14,
      marginBottom: 15,
    },

    button: {
      height: 48,
      backgroundColor: theme.primary,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
    },

    buttonDisabled: {
      opacity: 0.6,
    },

    buttonText: {
      color: theme.onPrimary,
      fontSize: 16,
      fontWeight: '600',
    },
  });