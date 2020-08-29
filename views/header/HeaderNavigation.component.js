import React from 'react'
import {StyleSheet, Text, View} from "react-native";

const HeaderNavigation: () => React$Node = () => {
    return (
        <View style={styles.navbarStyle}>
            <Text style={styles.navbarTextStyle}>NAV PLACEHOLDER</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbarStyle: {
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navbarTextStyle: {
        fontSize: 18,
        color: 'blue',
        fontWeight: 'bold',
    },
})

export default HeaderNavigation