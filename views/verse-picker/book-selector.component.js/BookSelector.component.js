import React from 'react'

import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Bible from '../../../bible.config'
import ListWithButtons from "../../../components/list-with-buttons/ListWithButtons.component";

const BookSelector: () => React$Node = ({
    selections,
    changeScreen,
    currentScreen
}) => {
    const onGoBack = _ => {
        changeScreen(currentScreen - 1)
    }
    return (
        <View style={styles.bookWrapper}>
            <View style={styles.bookControls}>
                <View style={styles.listControls}>
                    <TouchableOpacity
                        onPress={onGoBack}
                        style={styles.listButton}>
                        <Image source={require('../../../assets/list/list.png')} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.titleText}>Select Book</Text>
                <View style={[styles.listControls, styles.buttonBar]}>
                    <TouchableOpacity style={[styles.button, styles.blueButton]}>
                        <Text style={styles.buttonText}>Bible</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.disabledButton]}>
                        <Text style={styles.buttonText}>Topic</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <SafeAreaView style={styles.bookList}>
                <ListWithButtons changeScreen={changeScreen}
                                 currentScreen={currentScreen}
                                 selections={selections}
                                 listItems={Bible} />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    bookWrapper: {
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
    bookControls: {
        height: 130,
        flex: 0,
        borderTopColor: '#EAEAEA',
        borderTopWidth: 1,
        width: '100%'
    },
    bookList: {
        flex: 1,
        width: '100%',
    },
    listControls: {
        flexDirection: 'row',
        flex: 0,
        width: '100%',
    },
    buttonBar: {
        paddingTop: 22,
        justifyContent: 'space-evenly'
    },
    listButton: {
        marginTop: 19
    },
    titleText: {
        fontSize: 16,
        position: 'absolute',
        left: 0,
        width: '100%',
        textAlign: 'center',
        marginTop: 6
    },
    button: {
        flex: 0,
        width: 164,
        height: 65,
        borderRadius: 20,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        shadowColor: '#BEBEBE',
        shadowOffset: {
            height: 2,
            width: 2
        },
        elevation: 3
    },
    blueButton: {
        backgroundColor: '#23B9EB'
    },
    disabledButton: {
        backgroundColor: '#BBBBBB'
    }
})

export default BookSelector