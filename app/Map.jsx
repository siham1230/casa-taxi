import React, { useState } from 'react';

import { Button, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function Map() {
    const [region, setRegion] = useState({
        latitude: 33.5731,
        longitude: -7.5898,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    });
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={region}
                onRegionChangeComplete={setRegion}
            >
                <Marker
                    coordinate={{ latitude: 33.5731, longitude: -7.5898 }}
                    title="Casablanca"
                />
            </MapView>

            <View style={styles.ButtonContainer}>
                <Button
                 title="Reserver un Taxi"
                  onPress={() => alert('En train de recherche')}
                    color="#25444aff"
                />
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        // width: '100%',
        // height: '100%',
    },

    ButtonContainer: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
        backgroundColor: '#ffd43b',
        borderRadius: 10,
        padding: 5,
    }

});