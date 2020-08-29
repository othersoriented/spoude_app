/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FooterNavigation from "./views/footer/FooterNavigation.component";
import AdSpace from "./views/ads/AdSpace.component";
import HeaderNavigation from "./views/header/HeaderNavigation.component";

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={false} />
      <HeaderNavigation />
      <SafeAreaView style={styles.savStyle}>
        {/*Implement some switching to handle different views...*/}
      </SafeAreaView>
      <AdSpace />
      <FooterNavigation />
    </>
  );
};

const styles = StyleSheet.create({
  savStyle: {
    backgroundColor: Colors.white,
    flex: 1
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    marginBottom: 40
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
