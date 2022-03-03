import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../../utils/fonts';

//Packages

//Files
const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
  mainList: {
    height: height * 0.062,
    width: height * 0.6,
    backgroundColor: 'white',
    marginBottom: height * 0.02,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#b098b4c5',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: height * 0.01,
    borderRadius: width * 0.003,
  },
  listView: {
    height: height * 0.07,
    width: width * 0.4,
    backgroundColor: 'white',
    marginBottom: height * 0.02,
    elevation: width * 0.002,
    borderWidth: width * 0.001,
    borderColor: '#b098b4c5',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // paddingHorizontal: width * 0.02,
    // borderRadius:width * .003
    borderBottomLeftRadius: width * 0.005,
    borderTopRightRadius: width * 0.005,
    borderTopLeftRadius: width * 0.025,
    borderBottomRightRadius: width * 0.025,
  },
  listText: {
    fontSize: height * 0.03,
    fontFamily: Fonts.BalooChettanBold,
    color: '#484149c5',
    // fontFamily:'MetalMania-Regular'
  },
  switchView: {
    flexDirection: 'row',
    width: width * 0.44,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchText: {
    fontFamily: Fonts.Handlee,
    fontSize: width * 0.02,
    color: 'red',
  },
  toggleContainer: {
    width: width * 0.06,
    height: height * 0.05,
    borderRadius: width * 0.04,
    padding: width * 0.005,
    elevation: width * 0.003,
  },
  toggleCircle: {
    width: width * 0.02,
    height: height * 0.035,
    borderRadius: width * 0.1,
    backgroundColor: 'white', // rgb(102,134,205)
  },

  // Modal Styling

  modalContainer: {
    elevation: width * 0.005,
    // borderBottomLeftRadius: width * 0.025,
    borderRadius: width * 0.025,
    backgroundColor: 'white',
    maxHeight: height * 0.59,
    maxWidth: width * 0.5,
    // top: height * -0.082,
    left: width * 0.2,
  },
  modalInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.002,
  },
  passInputValue: {
    width: width * 0.25,
    height: height * 0.08,
    backgroundColor: '#23212016',
    paddingLeft: width * 0.01,
    borderRadius: width * 0.002,
  },
  boxConatainer: {
    width: width * 0.47,
    height: height * 0.56,
  },
  boxInner: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: width * 0.025,
    // borderBottomRightRadius: width * 0.025,
    elevation: 2,
  },
  boxHeader: {
    width: width * 0.47,
    height: height * 0.1,
  },
  boxHeaderInner: {
    flex: 1,
    borderTopRightRadius: width * 0.025,
    borderTopLeftRadius: width * 0.025,
    justifyContent: 'center',
    // paddingHorizontal: width * .02,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: width * 0.002,
    backgroundColor: '#e44f3bd5',
  },
  headerHeading: {
    fontFamily: Fonts.Handlee,
    fontSize: width * 0.04,
    color: 'white',
    marginHorizontal: width * 0.05,
    // marginLeft: width * .09,
  },
  headerbotton: {
    height: height * 0.06,
    width: width * 0.1,
    backgroundColor: '#e44f3bd5',
    elevation: width * 0.003,
    borderRadius: width * 0.002,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerbotton2: {
    height: height * 0.06,
    width: width * 0.15,
    backgroundColor: '#e44f3bd5',
    elevation: width * 0.003,
    borderRadius: width * 0.002,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottonText: {
    fontFamily: Fonts.Handlee,
    fontSize: width * 0.015,
    color: 'white',
  },
  boxBodyAlert: {
    width: width * 0.47,
    height: height * 0.27,
  },
  boxBody: {
    width: width * 0.47,
    height: height * 0.45,
    marginTop: 5,
  },
  boxBodyInner: {
    flex: 1,
    // marginTop: height * 0.005,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentInput: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: width * 0.02,
    color: 'gray',
    width: width * 0.25,
    // height: height * 0.1,
    includeFontPadding: false,
    padding: 0,
    margin: 0,
  },
  currentHeading: {
    fontFamily: Fonts.Handlee,
    fontSize: width * 0.04,
    color: 'red',
  },
  multiRow: {
    borderRadius: width * 0.1,
    width: width * 0.4,
    height: height * 0.05,
    margin: width * 0.002,
    backgroundColor: '#23212016',
    paddingHorizontal: width * 0.02,
  },
  multiLabel: {
    paddingLeft: width * 0.2,
    fontSize: width * 0.02,
    fontFamily: Fonts.Handlee,
  },
  boxFooter: {
    width: width * 0.47,
    height: height * 0.1,
  },
  boxFooterInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
