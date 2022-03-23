import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import Stories from './src/components/Stories';

const App = () => {
  return (
    <View style={styles.main}>
      <Header />
      <Stories />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
  },
});
