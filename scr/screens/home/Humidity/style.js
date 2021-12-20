import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../../utils/fonts';

//Packages

//Files
const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
  TemperatureView: {
    width: width * 0.32,
    height: height * 0.33,
    margin: width * 0.005,
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
    fontSize: width * 0.026,
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
  centiUper: {
    fontSize: width * 0.04,
    fontFamily: Fonts.BalooChettan2,
    color: '#484149c5',
  },
  iconOpenRow: {
    bottom: height * 0.065,
    right: width * 0.011,
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
    marginRight: height * 0.02,
  },

  skinInerContainer: {
    flex: 1,
  },
  skinIner: {
    flex: 1,
    paddingHorizontal: height * 0.01,
    // backgroundColor:'red'
  },
  likeInputOxygen: {
    width: width * 0.23,
    height: height * 0.1,
    borderWidth: 1,
    // flexDirection: "row-reverse",
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
});
