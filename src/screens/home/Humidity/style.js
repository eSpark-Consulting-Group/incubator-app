import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../../utils/fonts';

//Packages

//Files
const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
  TemperatureView: {
    width: height * 0.5,
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
    fontSize: height * 0.04,
    color: '#FF420E',
    fontFamily: Fonts.BalooChettan2,
  },
  tempInputCur: {
    flex: 1,
    fontSize: height * 0.0725,
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
    right: 10,
  },
  setTemp: {
    fontSize: height * 0.04,
    fontFamily: Fonts.BalooChettan2,
    color: '#FF420E',
    top: 4,
    marginVertical: height * 0.008,
  },
  tempInputSet: {
    fontSize: height * 0.0525,
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
  },
  likeInputOxygen: {
    width: height * 0.35,
    height: height * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: height * 0.005,
    backgroundColor: 'white',
    elevation: 2,
    borderWidth: 0.5,
  },
  boxUperStyle: {
    flexDirection: 'row',
  },
  boxLowerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeInputMin: {
    width: height * 0.3,
    height: height * 0.07,
    elevation: width * 0.003,
    backgroundColor: 'white',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: height * 0.005,
  },
});
