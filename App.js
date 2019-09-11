/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import Routes from './src/navigation/Routes';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#002f6c" barStyle="light-content" />
      <Routes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
