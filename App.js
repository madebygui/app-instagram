import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './src/components/Header';

const App = () => {
  return (
    <View style={styles.main}>
      <Header />
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
