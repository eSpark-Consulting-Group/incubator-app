import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../utils/fonts';
//Packages

//Files
const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff70',
  },
  headerContainer: {
    width: width * 1,
    height: '15%',
    paddingHorizontal: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    elevation: 5,
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomRightRadius: width * 0.03,
    borderBottomLeftRadius: width * 0.03,
    marginBottom: height * 0.01,
    borderColor: '#ff6c6c',
  },
  inerContainer1: {
    width: '100%',
    height: '84%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  notificationIcon: {
    flexDirection: 'row',
  },

  iconAndText: {
    alignItems: 'center',
  },
  alarmText: {
    fontSize: width * 0.015,
    fontFamily: Fonts.Montserrat,
    color: '#484149c5',
  },
  aboveTopText: {
    fontSize: width * 0.015,
    marginHorizontal: width * 0.01,
  },
  topText: {
    fontSize: width * 0.018,
    fontFamily: Fonts.Montserrat,
    color: '#484149c5',
  },

  airHeading: {
    fontSize: height * 0.045,
    fontFamily: Fonts.BalooChettanBold,
    color: '#484149c5',
    alignSelf: 'center',
    textShadowOffset: {
      width: width * 0.003,
      height: height * 0.003,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'white',
  },
  tempHeading: {
    fontSize: height * 0.045,
    fontFamily: Fonts.BalooChettanBold,
    color: '#484149c5',
    alignSelf: 'center',
    textShadowOffset: {
      width: width * 0.003,
      height: height * 0.003,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'white',
  },
  humHeading: {
    fontSize: height * 0.045,
    fontFamily: Fonts.BalooChettanBold,
    color: '#484149c5',
    alignSelf: 'center',
    textShadowOffset: {
      width: width * 0.003,
      height: height * 0.003,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'white',
  },
  weigHeading: {
    fontSize: height * 0.045,
    fontFamily: Fonts.BalooChettanBold,
    color: '#484149c5',
    alignSelf: 'center',
    textShadowOffset: {
      width: width * 0.003,
      height: height * 0.003,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'white',
  },
  Spo2Heading: {
    fontSize: height * 0.045,
    fontFamily: Fonts.BalooChettanBold,
    color: '#484149c5',
    alignSelf: 'center',
    textShadowOffset: {
      width: width * 0.003,
      height: height * 0.003,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'white',
  },
  oxygenHeading: {
    fontSize: height * 0.045,
    fontFamily: Fonts.BalooChettanBold,
    color: '#484149c5',
    alignSelf: 'center',
    textShadowOffset: {
      width: width * 0.003,
      height: height * 0.003,
    },
    textShadowRadius: width * 0.05,
    textShadowColor: 'white',
  },
  inerContainer2: {
    width: width * 1,
    height: height * 0.42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  snoozeText: {
    color: 'white',
    fontSize: height * 0.022,
    fontFamily: Fonts.BalooChettanBold,
  },

  //* new Added Styles:
  headerBackImg: {
    width: width * 1,
    height: height * 0.14,
    position: 'absolute',
    opacity: 0.3,
  },
  containerBackImg: {
    width: width * 1,
    height: height * 1,
    position: 'absolute',
    opacity: 0.5,
  },
  lockBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    left: width * 0.02,
    position: 'absolute',
  },
  headerVerticalBorder: {
    borderWidth: 1,
    borderColor: '#6b6a6a59',
    height: height * 0.12,
    position: 'absolute',
  },
  alarmModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alarmInnerContainer: {
    width: width * 0.4,
    height: height * 0.4,
    borderWidth: height * 0.005,
    borderColor: 'red',
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    borderRadius: width * 0.025,
  },
  alarmBoxContainer: {
    padding: height * 0.02,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  alarmBoxHeader: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: height * 0.05,
  },
  alarmMsgList: {
    flex: 6,
    padding: height * 0.02,
    alignItems: 'flex-start',
    borderRadius: height * 0.035,
  },
  alarmAnimationContainer: {
    flex: 2.5,
    borderRadius: height * 0.035,
    top: 10,
  },
  alarmAnimationStyle: {
    height: height * 0.18,
    width: height * 0.15,
  },
  snoozeBtnStyle: {
    position: 'absolute',
    height: height * 0.1,
    width: height * 0.15,
    backgroundColor: 'red',
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
