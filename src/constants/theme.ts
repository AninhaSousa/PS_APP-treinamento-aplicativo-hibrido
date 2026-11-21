export type Theme = {
  background: string;
  surface: string;
  border: string;
  text: string;
  textSecondary: string;
  primary: string;
  onPrimary: string;
  gold: string;
};

export const Colors: { dark: Theme; light: Theme } = {
  dark: {
    background: '#000000',
    surface: '#111111',
    border: '#333333',
    text: '#ffffff',
    textSecondary: '#cccccc',
    primary: '#00439c',
    onPrimary: '#ffffff',
    gold: '#F3C300',
  },
  light: {
    background: '#ffffff',
    surface: '#f2f2f2',
    border: '#dddddd',
    text: '#111111',
    textSecondary: '#555555',
    primary: '#00439c',
    onPrimary: '#ffffff',
    gold: '#F3C300',
  },
};