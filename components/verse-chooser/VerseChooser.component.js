import React from 'react'

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const VerseChooser: () => React$Node = ({changeUp}) => {
    const onClickRandom = e => {
        console.log('click random')
    }
    return (
        <View style={styles.versePicker}>
            <Text style={styles.promptText}>Choose a Bible verse:</Text>
            <View style={styles.buttonBar}>
                <TouchableOpacity onPress={changeUp}>
                    <Image source={require('../../assets/plus/add.png')} />
                </TouchableOpacity>
                <TouchableOpacity onClick={onClickRandom}
                    style={styles.randomButton}>
                    <Image
                        style={styles.randomButtonImage}
                        source={require('../../assets/random/random.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    versePicker: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 24,
        shadowColor: '#BFBFBF',
        shadowOffset: {
            width: 5,
            height: 0
        },
        paddingTop: 5,
        paddingBottom: 10,
        marginBottom: 10,
        shadowRadius: 6,
        elevation: 2,
        width: '100%'
    },
    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    randomButton: {
        backgroundColor: '#23B9EB',
        borderRadius: 67/2,
        height: 67,
        width: 67,
        marginLeft: 73,
        alignItems: 'center',
        justifyContent: 'center'
    },
    randomButtonImage: {
        flex: 0,
        width: 36,
        height: 31
    },
    promptText: {
        fontSize: 29,
        fontWeight: 'bold',
        marginBottom: 68,
        textAlign: 'center',
    }
})

export default VerseChooser