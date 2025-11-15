// import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import ButtomSheetApp from '../Components/ButtomSheetApp';
import { useRideStore } from './useRideStore';


function Map() {
    const { setDepart, setDestination, setDistance } = useRideStore();
    const handleConfirm = () => {
        setDepart({ latitude: 33.5899, longitude: -7.6039 });
        setDestination({ latitude: 33.5731, longitude: -7.5898 });
        setDistance(4200);

        // router.push("/BookingScreen");

    };

    // const router = useRouter();
    const [region, setRegion] = useState({
        latitude: 33.5731,
        longitude: -7.5898,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    });

    const taxiLocations = [
        { id: 1, name: 'Aéroport Mohammed V📍', latitude: 33.60874, longitude: -7.63301 },
        { id: 2, name: 'Gare Casa-Voyageurs📍', latitude: 33.58980, longitude: -7.59094 },
        { id: 3, name: 'Morocco Mall📍', latitude: 33.57609, longitude: -7.70690 },
        { id: 4, name: 'Twin Center📍', latitude: 33.58673, longitude: -7.63217 },
        { id: 5, name: 'Marina de Casablanca📍', latitude: 33.60825, longitude: -7.62395 },
        { id: 6, name: 'Mosquée Hassan II📍', latitude: 33.60840, longitude: -7.63263 },
        { id: 7, name: 'Quartier des Habous📍', latitude: 33.57764, longitude: -7.61012 },
        { id: 8, name: 'Ain Diab📍', latitude: 33.58899, longitude: -7.67363 },
        { id: 9, name: 'Boulevard Zerktouni📍', latitude: 33.58879, longitude: -7.63362 },
        { id: 10, name: 'Marché Central📍', latitude: 33.59466, longitude: -7.61214 },

    ];
    const [taxis, setTaxis] = useState([
        { id: "taxi1", latitude: 33.57609, longitude: -7.70690 },
        { id: "taxi2", latitude: 33.60840, longitude: -7.63263 },
        { id: "taxi3", latitude: 33.58980, longitude: -7.59094 },
        { id: "taxi4", latitude: 33.58980, longitude: -7.59094 },

    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTaxis((prevTaxis) =>
                prevTaxis.map((taxi) => ({
                    ...taxi,
                    latitude: taxi.latitude + (Math.random() - 0.5) * 0.002,
                    longitude: taxi.longitude + (Math.random() - 0.5) * 0.002,

                }))
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    // const handleBook = () => {
    //     try {
    //         router.push("/BookingScreen");
    //     } catch (error) {
    //         console.error("booking not working")
    //     }

    // }

    return (
        <View style={styles.container}>

            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={region}
                onRegionChangeComplete={setRegion}

            >
                {taxiLocations.map((location) => (
                    <Marker
                        key={location.id}
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                        title={location.name}
                        description='Taxi avaible here'
                        pinColor="red"
                    />
                ))}
                {taxis.map((taxi) => (
                    <Marker
                        key={taxi.id}
                        coordinate={{
                            latitude: taxi.latitude,
                            longitude: taxi.longitude,

                        }}
                    >

                        <LottieView
                            source={require("../assets/images/taxi.json")}
                            autoPlay
                            loop
                            style={{ width: 50, height: 50 }}
                        />


                    </Marker>
                ))}

            </MapView>
            < ButtomSheetApp style={styles.bottomSheet} />

            {/* <View style={styles.ButtonContainer}>
                <Button
                    title="Book a Taxi"
                    onPress={() => router.push("/BookingScreen")}
                    color="#f0f0f0"
                />
            </View> */}

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
    },
    ButtonContainer: {
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
        alignSelf: 'center',
        backgroundColor: '#4263eb',
        borderRadius: 30,
        padding: 15,
    },

    bottomSheet: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0, // ou juste hauteur nécessaire
        zIndex: 10, // au-dessus de la map
    },

});
export default Map;
