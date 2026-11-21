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

export default function Cadastro() {
  const isWeb = Platform.OS === 'web';
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const router = useRouter();
  const { signUp } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password || !confirm) {
      setError('Preencha todos os campos.');
      return;
    }
    if (!email.includes('@')) {
      setError('Digite um e-mail válido.');
      return;
    }
    if (password.length < 6) {
      setError('A senha precisa ter pelo menos 6 caracteres.');
      return;
    }
    if (password !== confirm) {
      setError('As senhas não conferem.');
      return;
    }

    setError('');
    setLoading(true);
    try {
      await signUp(name, email, password);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erro ao criar conta.');
      setLoading(false);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, isWeb && styles.webContent]}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Criar conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor={theme.textSecondary}
        value={name}
        onChangeText={setName}
      />

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

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        placeholderTextColor={theme.textSecondary}
        secureTextEntry
        value={confirm}
        onChangeText={setConfirm}
      />

      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <Pressable
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color={theme.onPrimary} />
        ) : (
          <Text style={styles.buttonText}>Criar conta</Text>
        )}
      </Pressable>

      <Pressable onPress={() => router.replace('/login')}>
        <Text style={styles.link}>Já tem conta? Iniciar sessão</Text>
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

    link: {
      color: theme.textSecondary,
      fontSize: 14,
      textAlign: 'center',
      marginTop: 20,
    },
  });