import React from 'react'
import {StyleSheet, Text, View} from "react-native";

const AdSpace: () => React$Node = () => {
    return (
        <View style={styles.adSpace}>
            <Text style={styles.adSpaceText}>AD SPACE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    adSpace: {
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkgrey'
    },
    adSpaceText: {
        fontSize: 40,
        color: 'grey',
        fontWeight: 'bold'
    }
})

export default AdSpace