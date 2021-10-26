import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../../utils/fonts';

//Packages

//Files
const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
  mainList: {
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

  modalContainer: {
    elevation: width * 0.005,
    borderBottomLeftRadius: width * 0.005,
    borderTopRightRadius: width * 0.005,
    borderTopLeftRadius: width * 0.025,
    borderBottomRightRadius: width * 0.025,
    backgroundColor: 'white',
    maxHeight: height * 0.58,
    maxWidth: width * 0.5,
    top: height * 0.12,
    // left:width * .1
  },
  modalInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxConatainer: {
    width: width * 0.47,
    height: height * 0.53,
  },
  boxInner: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: width * 0.005,
    borderTopRightRadius: width * 0.005,
    borderTopLeftRadius: width * 0.025,
    borderBottomRightRadius: width * 0.025,
    elevation: width * 0.015,
  },
  boxHeader: {
    width: width * 0.47,
    height: height * 0.12,
  },
  boxHeaderInner: {
    flex: 1,
    borderTopRightRadius: width * 0.005,
    borderTopLeftRadius: width * 0.025,
    justifyContent: 'space-around',
    // paddingHorizontal: width * .02,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: width * 0.002,
    backgroundColor: '#e44f3bd5',
  },
  headerHeading: {
    fontFamily: Fonts.Handlee,
    fontSize: width * 0.03,
    color: 'white',
    marginHorizontal: width * 0.05,
    // marginLeft: width * .09,
  },
  headerbotton: {
    height: height * 0.083,
    width: width * 0.05,
    borderRadius: width * 1,
    backgroundColor: 'white',
    elevation: width * 0.005,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottonText: {
    fontFamily: Fonts.Handlee,
    fontSize: width * 0.015,
    color: 'gray',
    // marginLeft: width * .09,
  },
  boxBody: {
    width: width * 0.47,
    height: height * 0.4,
  },
  boxBodyInner: {
    flex: 1,
    // backgroundColor:'red',
    // borderTopRightRadius: width * .005,
    // borderTopLeftRadius: width * .025,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
