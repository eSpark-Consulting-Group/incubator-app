import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../../utils/fonts';

//Packages

//Files
const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
  TemperatureView: {
    width: height * 0.5,
    height: height * 0.33,
    margin: height * 0.005,
  },
  Temperature: {
    flex: 1,
    borderRadius: height * 0.05,
    elevation: width * 0.005,
    borderWidth: width * 0.002,
    backgroundColor: 'white',
    padding: height * 0.022,
    borderColor: '#5c5c5c70',
  },
  currentTempText: {
    fontSize: height * 0.04,
    // fontWeight: "bold",
    color: '#FF420E',
    fontFamily: Fonts.BalooChettan2,
  },
  tempInputCur: {
    // position: 'absolute',
    fontSize: width * 0.05,
    fontFamily: Fonts.BalooChettan2,
    color: '#484149c5',
  },
  zeroUper: {
    fontSize: width * 0.017,
    fontFamily: Fonts.BalooChettan2,
    color: '#484149c5',
    left: width * 0.005,
  },
  kgUper: {
    fontSize: height * 0.05,
    fontFamily: Fonts.BalooChettan2,
    color: '#484149c5',
    top: height * 0.05,
    marginLeft: height * 0.015,
    height: height * 0.08,
    width: height * 0.05,
  },
  iconOpenRow: {
    bottom: height * 0.065,
    right: 2,
  },
  setTemp: {
    fontSize: width * 0.023,
    fontFamily: Fonts.BalooChettan2,
    color: '#FF420E',
    top: height * 0.006,
    marginVertical: width * 0.005,
  },
  tempInputSet: {
    fontSize: width * 0.035,
    color: '#484149c5',
    fontFamily: Fonts.BalooChettan2,
  },
  zeroLower: {
    fontSize: width * 0.016,
    fontFamily: Fonts.BalooChettan2,
    color: '#484149c5',
    left: width * 0.004,
    bottom: height * 0.03,
  },
  centiLower: {
    fontSize: width * 0.03,
    fontFamily: Fonts.BalooChettan2,
    color: '#484149c5',
    // top: height * .005,
    marginRight: height * 0.02,
  },

  weighHeaderContainer: {
    height: height * 0.27,
    width: width * 0.29,
    // backgroundColor:'red'
  },
  footerContainer: {
    height: height * 0.12,
    width: width * 0.29,
  },
  likeInputOxygen: {
    width: height * 0.33,
    height: height * 0.22,
    elevation: 2,
    backgroundColor: 'white',
    borderWidth: 0.5,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: height * 0.005,
    justifyContent: 'center',
  },
  boxUperStyle: {
    flexDirection: 'row',
  },
  boxLowerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: height * .02,
  },
  likeInputMin: {
    width: width * 0.2,
    height: height * 0.07,
    borderWidth: 1,
    // flexDirection:"row-reverse",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: height * 0.005,
  },
  // zeroBotton: {
  //   width: height * 0.1,
  //   height: height * 0.07,
  //   borderRadius: 2,
  //   backgroundColor: 'red',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   right: 10,
  //   bottom: 1,
  // },
  zeroBotton2: {
    width: height * 0.1,
    height: height * 0.07,
    backgroundColor: 'red',
    right: height * 0.11,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    top: height * 0.14,
  },
  zeroText: {
    color: 'white',
    fontSize: height * 0.02,
    fontFamily: Fonts.BalooChettanBold,
  },
});
