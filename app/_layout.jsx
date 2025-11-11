import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';


export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Accuile" }} />
      {/* <Stack.Screen name="Map" options={{ title: "map "}}/> */}
      </Stack>
      );

}  
