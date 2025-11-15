import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const ButtomSheetApp = () => {

    const bottomSheetRef = useRef(null);
    const router = useRouter();
    const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);


    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheet
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                snapPoints={snapPoints}
                index={0}
                enablePanDownToClose={false}
                backgroundStyle={styles.bottomSheetBackground}
                handleIndicatorStyle={styles.handleIndicator}
            >
                <BottomSheetView style={styles.contentContainer}>
                    {/* <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 120,
                        height: 120,
                    }}> */}
                    <View style={styles.lottieContainer}>
                        <LottieView

                            source={require('../assets/images/taxi.json')}
                            autoPlay
                            loop
                            style={{ width: 120, height: 120 }}
                        />
                    </View>
                    <Text style={styles.title}>Welcome to DarRide</Text>

                    <View style={{ flex: 1 }} />

                    {/* 
                    <View style={styles.ButtonContainer}> */}
                    <TouchableOpacity
                        style={styles.BookButton}
                        onPress={() => router.push("/BookingScreen")}
                    >
                        <Text style={styles.bookButtonText}>Book a Taxi</Text>
                    </TouchableOpacity>            </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView >
    );
};


const styles = StyleSheet.create({

    // handleIndicator: {
    //     background: '#ccc',
    //     width: 40,
    // },
    contentContainer: {
        flex: 1,
        padding: 36,
        alignItems: 'center',
        paddingBottom: 100,
    },
    lottieContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        TextAlign: 'center',
        color: '#000',
    },
    BookButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#4263eb',
        borderRadius: 12,
        
        paddingVertical: 15,
        alignItem: "center",
    },


    bookButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        textAlign: 'center',
    },

})

export default ButtomSheetApp;