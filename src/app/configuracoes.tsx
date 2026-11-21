import { useMemo } from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

import { Theme } from '@/constants/theme';
import { useThemeMode } from '@/context/theme-context';
import { useTheme } from '@/hooks/use-theme';
import type { ThemeMode } from '@/services/preferences';

const OPTIONS: { value: ThemeMode; label: string; hint: string }[] = [
  { value: 'auto', label: 'Automático', hint: 'Segue o tema do aparelho' },
  { value: 'light', label: 'Claro', hint: 'Fundo branco' },
  { value: 'dark', label: 'Escuro', hint: 'Fundo preto' },
];

export default function Configuracoes() {
  const isWeb = Platform.OS === 'web';
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const router = useRouter();
  const { mode, setMode } = useThemeMode();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, isWeb && styles.webContent]}
      showsVerticalScrollIndicator={false}
    >
      <Pressable onPress={() => router.back()}>
        <Text style={styles.back}>← Voltar</Text>
      </Pressable>

      <Text style={styles.title}>Configurações</Text>

      <Text style={styles.sectionTitle}>Tema</Text>

      {OPTIONS.map((option) => {
        const selected = option.value === mode;

        return (
          <Pressable
            key={option.value}
            style={[styles.option, selected && styles.optionSelected]}
            onPress={() => setMode(option.value)}
          >
            <View style={styles.optionText}>
              <Text style={styles.optionLabel}>{option.label}</Text>
              <Text style={styles.optionHint}>{option.hint}</Text>
            </View>

            <Text style={styles.check}>{selected ? '✓' : ''}</Text>
          </Pressable>
        );
      })}

      <Text style={styles.footer}>
        Sua escolha fica salva neste aparelho.
      </Text>
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
      padding: 20,
      paddingTop: 40,
    },

    webContent: {
      maxWidth: 600,
      width: '100%',
      alignSelf: 'center',
    },

    back: {
      color: theme.primary,
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 25,
    },

    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 30,
    },

    sectionTitle: {
      fontSize: 22,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 15,
    },

    option: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.surface,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.border,
      padding: 16,
      marginBottom: 12,
    },

    optionSelected: {
      borderColor: theme.primary,
      borderWidth: 2,
    },

    optionText: {
      flex: 1,
    },

    optionLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.text,
    },

    optionHint: {
      fontSize: 13,
      color: theme.textSecondary,
      marginTop: 2,
    },

    check: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.primary,
      width: 24,
      textAlign: 'right',
    },

    footer: {
      fontSize: 13,
      color: theme.textSecondary,
      marginTop: 15,
      textAlign: 'center',
    },
  });