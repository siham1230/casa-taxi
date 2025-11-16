// import { useRouter } from "expo-router";
// import { useEffect } from "react";
// import { Image, StyleSheet, Text, View } from "react-native";
// import Animated, { FadeIn, ZoomIn } from "react-native-reanimated";

// // SplashScreen.preventAutoHideAsync();
// const SplashImage = Image.resolveAssetSource(require("../assets/images/Redtaxi.png")).uri;

// export default function SplashScreen() {
//     const router = useRouter();

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             router.replace("/"); 
//         }, 3000);

//         return () => clearTimeout(timeout);
//     }, [router]);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.appName}>DarRide</Text>
//             <Animated.Image
//                 entering={FadeIn.duration(1000).and(ZoomIn.springify().duration(1000))}
//                 source={{ uri: SplashImage }}
//                 style={styles.logo}
//                 resizeMode="contain"
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#FFD54F", // jaune doux
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     appName: {
//         fontSize: 32,
//         fontWeight: "bold",
//         color: "#d32f2f", // rouge taxi
//         marginBottom: 20,
//     },
//     logo: {
//         width: 200,
//         height: 200,
//     },
// });
