import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../utils/fonts';

//Packages

//Files
const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
  listView: {
    height: width * 0.032,
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

  modalMainContainer: {
    elevation: width * 0.005,
    backgroundColor: 'white',
    maxHeight: height * 1,
    maxWidth: width * 0.35,
    // top:width * .13,
    left: width * 0.6,
    borderTopLeftRadius: width * 0.02,
    borderBottomLeftRadius: width * 0.02,
    // maxHeight:height * .7,
  },
  modalHeaderContainer: {
    height: height * 0.1,
    width: width * 0.35,
  },
  modalHeaderInner: {
    flex: 1,
    backgroundColor: 'white',
    elevation: width * 0.005,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: width * 0.015,
    borderTopLeftRadius: width * 0.02,
  },
  menuBottonView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerHeading: {
    fontSize: width * 0.02,
    color: 'red',
    fontFamily: Fonts.Handlee,
    marginLeft: width * 0.01,
  },
  modalBodyContainer: {
    height: height * 0.73,
    width: width * 0.35,
    // backgroundColor:'red',
  },
  modalBodyInner: {
    flex: 1,
    elevation: width * 0.005,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
});
