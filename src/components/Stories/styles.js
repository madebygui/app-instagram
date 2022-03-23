import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    height: 90,
  },
  foto: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  border: {
    borderColor: 'pink',
    borderWidth: 3,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    fontSize: 9,
    color: 'black',
    marginTop: 3,
  },
});
