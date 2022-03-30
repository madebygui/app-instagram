import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import Stories from './src/components/Stories';
import Post from './src/components/Post';

const App = () => {
  return (
    <View style={styles.main}>
      <Header />
      <Stories />
      <Post />
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
