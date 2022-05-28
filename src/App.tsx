import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome title='Welcome goFinances-ReactNative'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
