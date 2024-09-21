import React from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router'; // Expo Router's Stack
import { theme } from '@/constants/Colors';

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="signUp" />
        <Stack.Screen name="feed" />
        <Stack.Screen name="accountScreen" />
      </Stack>
      
    </View>
  );
}
