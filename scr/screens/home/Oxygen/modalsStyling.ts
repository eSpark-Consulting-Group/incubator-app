import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../../utils/fonts';

//Packages

//Files
const {height, width} = Dimensions.get('window');

export default styles = StyleSheet.create({
  // History Modal Styling
  modalMainContainer: {
    backgroundColor: '#81c2f7',
    maxHeight: height * 0.8,
    maxWidth: width * 1,
    top: height * 0.14,
    borderTopRightRadius: width * 0.05,
    borderTopLeftRadius: width * 0.05,
  },
  haiderContainer: {
    width: width * 0.9,
    height: height * 0.15,
  },
  headerInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e44f3bfd',

    justifyContent: 'space-between',
    paddingHorizontal: width * 0.02,
    elevation: width * 0.003,
    borderTopRightRadius: width * 0.05,
    borderTopLeftRadius: width * 0.05,
  },
  headerHeading: {
    fontSize: width * 0.04,
    fontFamily: Fonts.BalooChettan2,
    color: 'white',
  },
  submit: {
    width: width * 0.058,
    height: height * 0.1,
    backgroundColor: 'white',
    borderRadius: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: width * 0.003,
  },
  bodyMainContainer: {
    width: width * 0.9,
    height: height * 0.62,
    backgroundColor: 'white',
  },
  bodyContainer: {
    flex: 1,
    marginTop: width * 0.01,
    alignItems: 'center',
  },
  renderMyListContainer: {
    marginVertical: height * 0.005,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    elevation: width * 0.002,
    height: height * 0.07,
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: width * 0.02,
    width: width * 0.88,
    flexDirection: 'row',
    alignItems: 'center',
  },
  renderListHeading1: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: width * 0.02,
    color: '#484149c5',
  },
  renderListHeading: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: width * 0.02,
    color: '#484149c5',
    marginRight: width * 0.05,
  },
  renderListHeading2: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: width * 0.02,
    color: '#484149c5',
    position: 'absolute',
    left: width * 0.173,
  },
  renderListSetTemp: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: width * 0.02,
    color: '#484149c5',
    position: 'absolute',
    right: width * 0.4,
  },
  renderListAirTemp: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: width * 0.02,
    color: '#484149c5',
    position: 'absolute',
    right: width * 0.11,
  },
  historyContentHeadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.84,
    height: height * 0.05,
  },
  headingDate: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: width * 0.02,
    color: '#e44f3bd5',
    textAlign: 'center',
  },
  headingTime: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: width * 0.02,
    color: '#e44f3bd5',
    textAlign: 'center',
    marginLeft: width * 0.05,
  },
  headingWeight: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: width * 0.02,
    color: '#e44f3bd5',
    marginLeft: width * 0.08,
  },
  headingSetTemp: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: width * 0.02,
    color: '#e44f3bd5',
  },

  // Weight Type Modal

  insertWeightModal: {
    backgroundColor: 'white',
    maxHeight: height * 0.5,
    maxWidth: width * 0.45,
    top: height * -0.02,
    left: width * 0.26,
    borderBottomLeftRadius: width * 0.005,
    borderTopRightRadius: width * 0.005,
    borderTopLeftRadius: width * 0.025,
    borderBottomRightRadius: width * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insertWeightContainer: {
    height: height * 0.43,
    width: width * 0.4,
  },
  insertWeightInner: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: width * 0.005,
    borderTopRightRadius: width * 0.005,
    borderTopLeftRadius: width * 0.025,
    borderBottomRightRadius: width * 0.025,
    elevation: width * 0.01,
    // alignSelf:'center'
  },
  insertWeightHeader: {
    height: height * 0.1,
    width: width * 0.4,
  },
  inserWeightHeaderInner: {
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
  inserBackBotton: {
    position: 'absolute',
    left: width * 0.0,
    height: height * 0.09,
    width: width * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inserHeaderHeading: {
    fontFamily: Fonts.Handlee,
    fontSize: width * 0.03,
    color: 'white',
  },
  inserBodyConatiner: {
    height: height * 0.22,
    width: width * 0.4,
  },
  inserBodyInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inserTypeHeading: {
    fontFamily: Fonts.Handlee,
    fontSize: width * 0.02,
    color: '#e44f3bd5',
    marginRight: width * 0.005,
  },
  inserTextinputView: {
    width: width * 0.1,
    height: height * 0.075,
    borderWidth: 1,
    borderRadius: width * 0.003,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e44f3bd5',
  },
  inserTextinput: {
    fontFamily: Fonts.BalooChettan2,
    fontSize: width * 0.02,
    color: '#e44f3bd5',
    textAlign: 'center',
  },
  inserConditionUnit: {
    fontSize: width * 0.025,
    fontFamily: Fonts.BalooChettan2,
    color: '#e44f3bd5',
    marginLeft: width * 0.005,
  },
  inserFooterContainer: {
    height: height * 0.1,
    width: width * 0.4,
  },
  inserFooterInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inserSubmitBottonView: {
    width: width * 0.2,
    height: height * 0.07,
    backgroundColor: '#e44f3bd5',
    elevation: width * 0.003,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.1,
    flexDirection: 'row',
  },
  inserSubmitText: {
    fontSize: width * 0.023,
    fontFamily: Fonts.Handlee,
    color: 'white',
  },
});
