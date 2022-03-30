import React, {useState} from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AvatarImg from '../../assets/images/foto.jpeg';
import styles from './styles';

const Post = () => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.flexRow}>
          <Image source={AvatarImg} style={styles.avatar} />
          <Text style={styles.name}>photosbyen</Text>
        </View>
        <Pressable>
          <MaterialIcon name="more-horiz" color="black" size={20} />
        </Pressable>
      </View>
      <View style={styles.image}>
        <Image source={AvatarImg} style={styles.postImage} />
      </View>
      <View style={styles.actions}>
        <View style={styles.flexRow}>
          {liked ? (
            <Pressable onPress={() => setLiked(false)}>
              <Ionicon
                style={styles.iconActions}
                name="heart"
                size={20}
                color="red"
              />
            </Pressable>
          ) : (
            <Pressable onPress={() => setLiked(true)}>
              <Ionicon
                style={styles.iconActions}
                name="heart-outline"
                size={20}
                color="black"
              />
            </Pressable>
          )}
          <Pressable>
            <Ionicon
              style={styles.iconActions}
              name="chatbubble-outline"
              size={20}
              color="black"
            />
          </Pressable>
          <Pressable>
            <Ionicon
              style={styles.iconActions}
              name="send-outline"
              size={20}
              color="black"
            />
          </Pressable>
        </View>
        <Ionicon name="bookmark-outline" size={20} color="black" />
      </View>
      <View style={styles.likes}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Text style={styles.likesText}>
          Curtido por{' '}
          <Text style={styles.likesTextBold}>
            {liked ? 'jose' : 'guimiranda93'}
          </Text>{' '}
          e <Text style={styles.likesTextBold}>outros</Text>
        </Text>
      </View>
    </View>
  );
};

const Avatar = () => {
  return <Image source={AvatarImg} style={styles.foto} />;
};

export default Post;
