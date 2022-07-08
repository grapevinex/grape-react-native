import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const GabbaLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: '#f6f6f6',
    background: '#FFF',
    border: '#f6f6f6',
  },
};

export const GabbaDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    card: '#000',
    background: '#020202',
    border: '#000',
  },
};
