import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../../utils/fonts';

//Packages

//Files
const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
  TemperatureView: {
    width: width * 0.32,
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
    fontSize: height * 0.08,
    fontFamily: Fonts.BalooChettan2,
    color: '#484149c5',
  },

  centiUper: {
    fontSize: height * 0.06,
    fontFamily: Fonts.BalooChettan2,
    color: '#484149c5',
  },
  iconOpenRow: {
    bottom: height * 0.065,
    right: width * 0.011,
  },
  setTemp: {
    fontSize: height * 0.04,
    fontFamily: Fonts.BalooChettan2,
    color: '#FF420E',
    top: height * 0.006,
    marginVertical: height * 0.005,
  },
  tempInputSet: {
    fontSize: height * 0.06,
    color: '#484149c5',
    fontFamily: Fonts.BalooChettan2,
  },
  centiLower: {
    fontSize: height * 0.05,
    fontFamily: Fonts.BalooChettan2,
    color: '#484149c5',
    // bottom: height * .01,
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
    // flexDirection: "row-reverse",
    alignItems: 'center',
    borderRadius: height * 0.005,
    justifyContent: 'center',
    elevation: width * 0.003,
    backgroundColor: 'white',
    borderWidth: 0.5,
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
    elevation: width * 0.003,
    backgroundColor: 'white',
    borderWidth: 0.5,
    // flexDirection:"row-reverse",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: height * 0.005,
  },
});
