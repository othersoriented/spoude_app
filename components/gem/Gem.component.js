import React from 'react'

import {Image, StyleSheet, View} from 'react-native'

const Gem: () => React$Node = () => {
    return (
        <View style={styles.gemWrapper}>
            <Image source={require('../../assets/gems/gem.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    gemWrapper: {
        flexDirection: 'row',
        flex: 0,
        justifyContent: 'flex-end',
        width: '100%'
    },
    gem: {
        flex: 0,
        right: 0,
        color: 'grey'
    }
})

export default Gem