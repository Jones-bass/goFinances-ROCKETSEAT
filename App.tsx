
import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  
} from '@expo-google-fonts/poppins';

import theme from './src/global/theme';
import AppLoading from 'expo-app-loading';
import { Register } from './src/screen/Register';

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
      <Register />
    </ThemeProvider>
  );
}


