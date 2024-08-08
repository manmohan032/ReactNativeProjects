// screens/SplashScreen.js

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps,NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackPrams } from '../App';

type SplashScreenProps = NativeStackScreenProps<RootStackPrams ,"SplashScreen">;


export default function SplashScreen({ navigation }:SplashScreenProps) {
  useEffect(() => {
    // Navigate to Home after 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NewsApp</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
