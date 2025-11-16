import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";


export default function BookingScreen() {
    const neighborhoods = [
        { label: "Ain Diab", value: "Ain Diab" },
        { label: "Maarif", value: "Maarif" },
        { label: "Sidi Bernoussi", value: "Sidi Bernoussi" },
        { label: "Oulfa", value: "Oulfa" },
        { label: "Derb Sultan", value: "Derb Sultan" },
        { label: "Bourgogne", value: "Bourgogne" },
    ];

    const destinations = [
        { label: "Mosquée Hassan II", value: "Mosquée Hassan II" },
        { label: "Morocco Mall", value: "Morocco Mall" },
        { label: "Twin Center", value: "Twin Center" },
        { label: "Gare Casa Voyageur", value: "Gare Casa Voyageur" },
        { label: "Marina Casablanca", value: "Marina Casablanca" },
    ];
    const [start, setStart] = useState(neighborhoods[0]);
    const [end, setEnd] = useState(destinations[0]);
    const [distance, setDistance] = useState(0);
    const [price, setPrice] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (start && end) {
            const randomDistance = Math.floor(Math.random() * 10) + 2;
            const randomDuration = randomDistance * 3;

            const hour = new Date().getHours();
            const isNight = hour >= 20 || hour < 6;

            const startFee = 7.5;
            const perKm = isNight ? 2.0 : 1.5;

            const total = startFee + randomDistance * perKm;
            setDistance(randomDistance);
            setDuration(randomDuration);
            setPrice(total.toFixed(2));
        }
    }, [start, end]);

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>🚕 Book a Taxi </Text> */}

            <Text style={styles.label}>Starting point :</Text>
            <Dropdown
                style={{
                    height: 50,
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingHorizontal: 10,
                }}
                data={neighborhoods}
                labelField="label"
                valueField="value"
                placeholder="Choose a neighbourhood..."
                onChange={(value) => setStart(value)}
            />


            <Text style={styles.label}>destination :</Text>
            <Dropdown
                style={{
                    height: 50,
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingHorizontal: 10,

                }}
                data={destinations}
                labelField="label"
                valueField="value"
                placeholder="Choose a destinations..."
                onChange={(value) => setEnd(value)}
            />

            {start && end ? (
                <View style={styles.resultBox}>
                    <Text style={styles.result}>Estimated distance: {distance} km</Text>
                    <Text style={styles.result}>Estimated duration: {duration} min</Text>
                    <Text style={styles.result}>Estimated price: {price} MAD</Text>
                    <Text style={styles.result}>
                        (Tarif : {new Date().getHours() >= 20 || new Date().getHours() < 6 ? "Night🌙" : "Day ☀️"})
                    </Text>
                </View>
            ) : null}

            <View style={styles.ButtonContainer}>
                <Button
                    title="Confirm the reservation"
                    color="#d0dddfff"
                    onPress={() => alert("Reservation confirm!")}
                    disabled={!start || !end}

                />
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // background: "#c08b21ff",
        padding: 20,
    },
    title: {
        fonSize: 24,
        fontWeight: "bold",
        marginButtom: 20,
        textAlign: "center",
        color: "#000",

    },
    label: {
        color: "#000",
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 5,
    },
    Dropdown: {
        backgroundColor: "#228be6",
        borderRadius: 10,
        marginBottom: 15,
        width: "100%",
        height: "10%",
        textAlign: "center",



    },
    resultBox: {
        backgroundColor: "#868e96",
        padding: 15,
        borderRadius: 10,
        marginTop: 50,
        alignItems: "center",
        bordeeRadius: 20,
    },
    result: {
        fontSize: 16,
        fontWeight: "500",
        width: 200,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    ButtonContainer: {
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
        alignSelf: 'center',
        backgroundColor: '#4263eb',
        borderRadius: 10,
        padding: 15,

    },
});





