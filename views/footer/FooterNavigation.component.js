import React from 'react'
import {StyleSheet,Text, View} from 'react-native'

const FooterNavigation: () => React$Node = () => {
    return (
        <View style={styles.footerNavStyle}>
            <Text style={styles.navbarTextStyle}>FOOTER NAV PLACEHOLDER</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbarTextStyle: {
        fontSize: 18,
        color: 'blue',
        fontWeight: 'bold',
    },
    footerNavStyle: {
        height: 78,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default FooterNavigation