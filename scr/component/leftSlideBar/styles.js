import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../utils/fonts';

//Packages

//Files
const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
  listView: {
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
  listText: {
    fontSize: height * 0.03,
    fontFamily: Fonts.BalooChettanBold,
    color: '#484149c5',
    // fontFamily:'MetalMania-Regular'
  },
  spinnerTextStyle: {
    color: 'red',
  },
  toggleContainer: {
    width: width * 0.09,
    height: height * 0.07,
    borderRadius: width * 0.04,
    padding: width * 0.005,
    elevation: 2,
  },
  toggleCircle: {
    width: width * 0.03,
    height: height * 0.05,
    borderRadius: width * 0.1,
    backgroundColor: 'white', // rgb(102,134,205)
  },

  // Modal Styling

  modalMainContainer: {
    flex: 1,
    alignSelf: 'flex-end',
    elevation: 2,
    backgroundColor: 'white',
    maxHeight: height * 1,
    maxWidth: height * 0.65,
    // top:width * .13,
    left: height * 0.1,
    borderTopLeftRadius: height * 0.02,
    borderBottomLeftRadius: height * 0.02,
    // maxHeight:height * .7,
  },
  modalHeaderContainer: {
    height: height * 0.1,
    width: height * 0.65,
  },
  modalHeaderInner: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: height * 0.015,
    borderTopLeftRadius: height * 0.02,
  },
  menuBottonView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerHeading: {
    fontSize: height * 0.035,
    color: 'red',
    fontFamily: Fonts.Handlee,
    marginLeft: height * 0.01,
  },
  modalBodyContainer: {
    height: height * 0.73,
    width: height * 0.65,
    // backgroundColor:'red',
  },
  modalBodyInner: {
    flex: 1,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
});
