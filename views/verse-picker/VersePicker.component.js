import React from 'react'

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import ExperienceBar from "../../components/experience-bar/ExperienceBar.component";
import Gem from "../../components/gem/Gem.component";
import VerseChooser from "../../components/verse-chooser/VerseChooser.component";

const VersePicker: () => React$Node = ({changeScreen}) => {
    const onPlusUpClick = e => {
        console.log('click it up')
        if(changeScreen) {
            changeScreen(1) // Book Picker
        }
    }

    return (
        <View style={styles.verseWrapper}>
            {/*This view flows in reverse, on the column*/}
            <TouchableOpacity style={styles.practiceButton}>
                <Text style={styles.practiceButtonText}>Practice</Text>
            </TouchableOpacity>
            <ExperienceBar />
            <Gem />
            <VerseChooser changeUp={onPlusUpClick} />
        </View>
    )
}

const styles = StyleSheet.create({
    verseWrapper: {
        flex: 1,
        flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 22,
        marginBottom: 22,
        shadowColor: '#A9A9A9',
        elevation: 5,
        paddingLeft: 27,
        paddingRight: 27,
        paddingBottom: 22,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24
    },
    practiceButton: {
        flexDirection: 'row',
        flex: 0,
        width: '100%',
        height: 71,
        borderRadius: 20,
        backgroundColor: '#898989',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#BEBEBE',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5,
        elevation: 3,
    },
    practiceButtonText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#B9B9B9'
    },
})

export default VersePicker