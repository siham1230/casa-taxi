import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-safe-area-context";
 
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView  style={{flex: 1 }}>

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Map" options={{ title: "Home " }} />
        <Stack.Screen name="BookingScreen" options={{ title: "Reservation"}} />
        </Stack>
        </SafeAreaView>
            </GestureHandlerRootView>

  );
}  


