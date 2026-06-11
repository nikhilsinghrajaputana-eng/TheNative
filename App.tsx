import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { useColorScheme } from 'react-native';

function App() {
   const isDarkMode = useColorScheme() === 'dark';
  return (
  <SafeAreaProvider>
      <AppNavigator isDarkMode={isDarkMode} />
  </SafeAreaProvider>
  );
}
export default App;
