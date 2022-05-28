import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface WelProps {
  title: string,
}

export default function Welcome({title}: WelProps) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
