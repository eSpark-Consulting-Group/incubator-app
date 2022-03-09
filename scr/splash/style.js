import {StyleSheet, Dimensions} from 'react-native';

//Packages

//Files
const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 1,
    height: height * 1,
  },
  activityIndi: {
    bottom: width * 0.1,
  },
  animationTextStyle: {
    color: 'white',
    fontSize: width * 0.07,
    marginTop: width * 0.01,
  },
});
