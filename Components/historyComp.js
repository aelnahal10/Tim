import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';


function HistoryComp() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'lightgreen', margin:50, padding:10, minHeight: 300, borderRadius: 20}}>
            <Text>Looks like you need to do some more quizes</Text>
        </View>
    )
}

export default HistoryComp
