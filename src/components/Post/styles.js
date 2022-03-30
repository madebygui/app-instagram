import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  image: {},
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  name: {
    fontSize: 14,
    color: 'black',
    marginLeft: 10,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postImage: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  iconActions: {
    marginRight: 10,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  foto: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: -10,
  },
  likesText: {
    color: 'black',
    fontSize: 10,
    marginLeft: 20,
  },
  likesTextBold: {
    fontWeight: 'bold',
  },
});
