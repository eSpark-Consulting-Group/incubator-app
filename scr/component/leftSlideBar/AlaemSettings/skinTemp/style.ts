import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../../../utils/fonts';

//Packages

//Files
const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
  mainList: {
    height: height * 0.07,
    width: width * 0.3,
    backgroundColor: 'white',
    marginBottom: height * 0.02,
    elevation: width * 0.002,
    borderWidth: width * 0.001,
    borderColor: '#b098b4c5',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: width * 0.01,
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
    paddingHorizontal: width * 0.02,
    // borderRadius:width * .003
    borderBottomLeftRadius: width * 0.005,
    borderTopRightRadius: width * 0.005,
    borderTopLeftRadius: width * 0.025,
    borderBottomRightRadius: width * 0.025,
  },
  listText: {
    fontSize: width * 0.015,
    fontFamily: Fonts.BalooChettanBold,
    color: '#484149c5',
    // fontFamily:'MetalMania-Regular'
  },
  toggleContainer: {
    width: width * 0.09,
    height: height * 0.07,
    borderRadius: width * 0.04,
    padding: width * 0.005,
    elevation: width * 0.003,
  },
  toggleCircle: {
    width: width * 0.03,
    height: height * 0.05,
    borderRadius: width * 0.1,
    backgroundColor: 'white', // rgb(102,134,205)
  },

  // Modal Styling

  modal: {
    elevation: width * 0.005,
    borderBottomLeftRadius: width * 0.005,
    borderTopRightRadius: width * 0.005,
    borderTopLeftRadius: width * 0.025,
    borderBottomRightRadius: width * 0.025,
    backgroundColor: 'white',
    maxHeight: height * 0.5,
    maxWidth: width * 0.43,
    top: height * 0.155,
    left: width * 0.035,
  },
  modalInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: width * 0.4,
    height: height * 0.45,
  },
  modalContainerInner: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: width * 0.005,
    borderTopRightRadius: width * 0.005,
    borderTopLeftRadius: width * 0.025,
    borderBottomRightRadius: width * 0.025,
    elevation: width * 0.015,
  },
  headerContainer: {
    width: width * 0.4,
    height: height * 0.1,
  },
  headerInner: {
    flex: 1,
    borderTopRightRadius: width * 0.005,
    borderTopLeftRadius: width * 0.025,
    justifyContent: 'center',
    paddingLeft: width * 0.02,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: width * 0.002,
    backgroundColor: '#e44f3bd5',
  },
  backBotton: {
    position: 'absolute',
    left: width * 0.0,
    height: height * 0.09,
    width: width * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerHeading: {
    fontFamily: Fonts.Handlee,
    fontSize: width * 0.03,
    color: 'white',
  },
  bodyContainer: {
    width: width * 0.4,
    height: height * 0.25,
  },
  bodyInner: {
    flex: 1,
    // backgroundColor:'red',
    // borderTopRightRadius: width * .005,
    // borderTopLeftRadius: width * .025,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentHeading: {
    fontFamily: Fonts.Handlee,
    fontSize: width * 0.02,
    color: 'red',
    // marginLeft: width * .05,
  },
  currentInputView: {
    width: width * 0.1,
    height: height * 0.075,
    borderWidth: 1,
    borderRadius: width * 0.003,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentInput: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: width * 0.02,
    color: 'red',
    textAlign: 'center',
  },
  setHeading: {
    fontFamily: Fonts.Handlee,
    fontSize: width * 0.02,
    color: 'red',
    // marginLeft: width * .05,
  },
  footerContainer: {
    width: width * 0.4,
    height: height * 0.1,
  },
  footerInner: {
    flex: 1,
    // backgroundColor:'red',
    // borderTopRightRadius: width * .005,
    // borderTopLeftRadius: width * .025,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottonView: {
    width: width * 0.2,
    height: height * 0.07,
    backgroundColor: '#e44f3bfd',
    elevation: width * 0.003,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.1,
    flexDirection: 'row',
  },
  bottonText: {
    fontSize: width * 0.023,
    fontFamily: Fonts.Handlee,
    color: 'white',
  },
  check: {
    position: 'absolute',
    right: width * 0.02,
  },
});
