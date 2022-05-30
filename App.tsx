
import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  
} from '@expo-google-fonts/poppins';

import Dashboard from './src/Dashboard';
import theme from './src/global/theme';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [ fontsLoad ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoad) {
    return <AppLoading/>
  }


  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}


