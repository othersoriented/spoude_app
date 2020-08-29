import React from 'react'

import {StyleSheet, Text, View} from 'react-native'

const ExperienceBar: () => React$Node = () => {
    return (
        <View style={styles.experienceBarWrapper}>
            <View style={styles.experienceBarMarker} />
        </View>
    )
}

const styles = StyleSheet.create({
    experienceBarWrapper: {
        flexDirection: 'row',
        backgroundColor: '#F3F3F3',
        flex: 0,
        borderRadius: 18,
        height: 20,
        width: '100%',
        marginBottom: 10
    },
    experienceBarMarker: {
        flex: 0,
        width: 13,
        height: 20,
        backgroundColor: '#6AE38E',
        borderRadius: 18
    }
})

export default ExperienceBar