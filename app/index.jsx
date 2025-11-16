import Map from '../Components/Map';


export default function Index() {
    return <Map />;
};


// import { useRouter } from "expo-router";
// import { useEffect } from "react";
// import { Image, StyleSheet, Text, View } from "react-native";
// import Animated, { FadeInDown, ZoomInDown } from "react-native-reanimated";

// // const SplashImage = Image.resolveAssetSource(require("../assets/images/Redtaxi.png")).uri;

// export default function Index() {
//     const router = useRouter();

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             router.replace("/home"); // ou "/map" selon le nom que vous avez choisi
//         }, 3000);

//         return () => clearTimeout(timeout);
//     }, [router]);

//     return (
//         <View style={styles.container}>
//             {/* <Text style={styles.appName}>DarRide</Text> */}
//             <Animated.Text
//                 entering={FadeInDown.duration(800)}
//                 style={styles.AppName}>
//       DarRide

//                 </Animated.Text>
//                 <Animated.Image
//                 entering={ZoomInDown.duration(1000).delay(200)}
//                 source={require("../assets/images/icone.png")}
//                 style={styles.logo}
//                 resizeMode= "contain"
//                 />
            
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#228be6",
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     appName: {
//         fontSize: 32,
//         fontWeight: "bold",
//         color: "#black",
//         marginBottom: 20,
//     },
//     logo: {
//         width: 200,
//         height: 200,
//     },
// });
