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
    paddingHorizontal: width * 0.02,
    borderBottomLeftRadius: width * 0.005,
    borderTopRightRadius: width * 0.005,
    borderTopLeftRadius: width * 0.025,
    borderBottomRightRadius: width * 0.025,
  },
  listText: {
    fontSize: height * 0.03,
    fontFamily: Fonts.BalooChettanBold,
    color: '#484149c5',
  },
  toggleContainer: {
    width: width * 0.045,
    height: height * 0.035,
    borderRadius: width * 0.04,
    padding: width * 0.005,
    elevation: width * 0.003,
    marginHorizontal: height * 0.01,
  },
  toggleCircle: {
    width: width * 0.015,
    height: height * 0.025,
    borderRadius: width * 0.1,
    backgroundColor: 'white', // rgb(102,134,205)
  },

  // Modal Styling

  modalContainer: {
    elevation: width * 0.005,
    borderRadius: width * 0.025,
    backgroundColor: 'white',
    maxHeight: height * 0.7,
    maxWidth: width * 0.5,
    top: height * 0.1,
  },
  modalInner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxConatainer: {
    width: height * 0.9,
    height: height * 0.67,
  },
  boxInner: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: width * 0.025,
    elevation: width * 0.015,
  },
  boxHeader: {
    width: height * 0.9,
    height: height * 0.1,
  },
  boxHeaderInner: {
    flex: 1,
    borderTopLeftRadius: width * 0.025,
    borderTopRightRadius: width * 0.025,
    justifyContent: 'space-around',
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
  },
  headerbotton: {
    height: height * 0.085,
    width: height * 0.085,
    borderRadius: width * 1,
    backgroundColor: 'white',
    elevation: width * 0.005,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerTextStyle: {
    color: 'red',
  },
  bottonText: {
    fontFamily: Fonts.Handlee,
    fontSize: height * 0.028,
    color: 'gray',
  },
  boxBody: {
    flexDirection: 'column',
    width: height * 0.9,
    height: height * 0.2,
    padding: height * 0.012,
  },
  passInputValue: {
    width: height * 0.5,
    height: height * 0.08,
    backgroundColor: '#23212016',
    paddingLeft: width * 0.01,
    borderRadius: width * 0.002,
    justifyContent: 'center',
  },
  currentInput: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: height * 0.037,
    color: 'gray',
    width: width * 0.15,
    includeFontPadding: false,
    padding: 0,
    margin: 0,
  },
  fieldText: {
    fontFamily: Fonts.Handlee,
    fontSize: height * 0.035,
    color: 'red',
  },
  boxBodyInner: {
    padding: width * 0.002,
    paddingLeft: width * 0.04,
    paddingRight: width * 0.04,
    flexDirection: 'row',
    borderTopRightRadius: width * 0.005,
    borderTopLeftRadius: width * 0.025,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  unitContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginLeft: height * 0.02,
    width: height * 0.15,
  },
  unitText: {
    fontFamily: Fonts.Handlee,
    fontSize: height * 0.025,
    color: 'red',
  },
  genderContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    width: height * 0.5,
  },
});
