
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'

import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,

} from '@expo-google-fonts/poppins';

import theme from './src/global/theme';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';
import { StatusBar } from 'react-native';
import { SignIn } from './src/screen/SignIn';

export default function App() {
  const [fontsLoad] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoad) {
    return <AppLoading />
  }


  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
      <StatusBar
                backgroundColor="transparent"
                translucent
                barStyle="light-content"
            />
        <SignIn/>
      </NavigationContainer>

    </ThemeProvider>
  );
}


