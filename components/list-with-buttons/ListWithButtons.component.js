import React from 'react'

import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native'

const ListWithButtons: () => React$Node = ({
    changeScreen,
    currentScreen,
    selections,
    listItems
}) => {
    return (
        <FlatList style={styles.listWrapper}
                  data={listItems}
                  keyExtractor={item => item.abbr}
                  numColumns={5}
                  extraData={selections}
                  contentContainerStyle={styles.contentWrapper}
                  renderItem={(item, index) => {
                      let stylesButton = [styles.itemButton],
                          stylesButtonText = [styles.itemButtonText]
                      if(selections.book === item.index) {
                          stylesButton.push(styles.itemButtonSelected)
                          stylesButtonText.push(styles.itemButtonTextSelected)
                      }
                      return (
                          <TouchableOpacity style={stylesButton}
                                onPress={_ => {
                                    changeScreen(currentScreen + 1, index)
                                }}>
                                <Text style={stylesButtonText}>
                                    {item.item.abbr.toUpperCase()}
                                </Text>
                          </TouchableOpacity>
                          // <Text>{item.item.abbr}</Text>
                      )
                  }} />
    )
}

const styles = StyleSheet.create({
    listWrapper: {
        flex: 1,
    },
    contentWrapper: {
        justifyContent: 'space-evenly',
        paddingTop: 5
    },
    itemButton: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#707070',
        marginRight: 14,
        marginBottom: 26
    },
    itemButtonSelected: {
        backgroundColor: '#23B9EB'
    },
    itemButtonTextSelected: {
        color: 'white'
    },
    itemButtonText: {
        fontWeight: 'bold'
    },
})

export default ListWithButtons