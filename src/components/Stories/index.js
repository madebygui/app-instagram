import React from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import Foto from '../../assets/images/foto.jpeg';
import styles from './styles';

const Stories = () => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </ScrollView>
  );
};

const Avatar = () => {
  return (
    <View style={styles.avatarContainer}>
      <View style={styles.border}>
        <Image source={Foto} style={styles.foto} />
      </View>
      <Text style={styles.profile}>guimiranda93</Text>
    </View>
  );
};

export default Stories;
