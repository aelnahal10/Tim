import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import HistoryComp, {historyComp} from '../Components/historyComp'

export default function App() {
    const [hasHistory, setHasHistory] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Hardcoded values need to be replaced with vars */}
                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{global.fname}</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>10</Text>
                        <Text style={[styles.text, styles.subText]}>Past Quizes</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>100,000</Text>
                        <Text style={[styles.text, styles.subText]}>Score</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[{ fontSize: 24 }]}>50</Text>
                        <Text>Stars</Text>

                    </View>
                </View>   
                <HistoryComp></HistoryComp>
            </ScrollView>
           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    subText: {
        fontSize: 12,
        color: 'grey',
        textTransform: "uppercase",
        fontWeight: "500"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
});
