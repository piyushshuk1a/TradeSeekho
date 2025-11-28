import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ModeProvider, useMode } from './src/context/ModeContext';
import { AppNavigator } from './src/navigation/AppNavigator';
import { getTheme } from './src/constants/theme';

// Inner component that has access to ModeContext
const AppContent: React.FC = () => {
  const { isSimulationMode } = useMode();
  const theme = getTheme(isSimulationMode);

  return (
    <PaperProvider theme={theme}>
      <StatusBar style={isSimulationMode ? 'dark' : 'light'} />
      <AppNavigator />
    </PaperProvider>
  );
};

// Main App component with providers
export default function App() {
  return (
    <SafeAreaProvider>
      <ModeProvider>
        <AppContent />
      </ModeProvider>
    </SafeAreaProvider>
  );
}

