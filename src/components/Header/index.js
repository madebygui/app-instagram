import React from 'react';
import {View, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../assets/images/instagram-logo.png';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logoImg} resizeMode="contain" />
      <View style={styles.containerButtons}>
        <Pressable onPress={() => console.log('ADD')}>
          <Icon
            name="add-circle-outline"
            size={30}
            color="black"
            style={styles.buttonIcon}
          />
        </Pressable>
        <Pressable onPress={() => console.log('ADD')}>
          <Icon
            name="heart-outline"
            size={30}
            color="black"
            style={styles.buttonIcon}
          />
        </Pressable>
        <Pressable onPress={() => console.log('ADD')}>
          <Icon
            name="chatbubble-outline"
            size={30}
            color="black"
            style={styles.buttonIcon}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
