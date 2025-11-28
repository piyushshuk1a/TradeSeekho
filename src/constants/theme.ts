import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

// Seekho Theme (Simulation Mode) - Green & Orange
export const SeekhoTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2E7D32', // Green
    accent: '#E65100', // Orange
    background: '#FFF8E1', // Light Yellow
    surface: '#FFFFFF',
    text: '#000000',
    onSurface: '#000000',
    onBackground: '#000000',
  },
};

// Vyapaar Theme (Real Trading Mode) - Blue
export const VyapaarTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1565C0', // Blue
    accent: '#0288D1', // Light Blue
    background: '#FFFFFF', // White
    surface: '#F5F5F5',
    text: '#000000',
    onSurface: '#000000',
    onBackground: '#000000',
  },
};

// Helper function to get theme based on mode
export const getTheme = (isSimulationMode: boolean) => {
  return isSimulationMode ? SeekhoTheme : VyapaarTheme;
};

