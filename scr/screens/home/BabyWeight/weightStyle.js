import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../../utils/fonts';

//Packages

//Files
const { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    
    // History Modal Styling
    modalMainContainer: {
        backgroundColor: '#81c2f7',
        maxHeight: height * .8,
        maxWidth: width * 1,
        top: height * .14,
        borderTopRightRadius: width * .05,
        borderTopLeftRadius: width * .05,
    },
    haiderContainer: {
        width: width * .9,
        height: height * .15,
    },
    headerInner: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: '#e44f3bfd',

        justifyContent: 'space-between',
        paddingHorizontal: width * .02,
        elevation: width * .003,
        borderTopRightRadius: width * .05,
        borderTopLeftRadius: width * .05,
    },
    headerHeading: {
        fontSize: width * .04,
        fontFamily: Fonts.BalooChettan2,
        color: 'white',
    },
    submit:{
        width: width * .058,
        height: height * .1,
        backgroundColor:'white',
        borderRadius:width * .1,
        justifyContent:'center',
        alignItems:'center',
        elevation: width * .003,
    },
    bodyMainContainer: {
        width: width * .9,
        height: height * .62,
        backgroundColor: 'white'
    },
    bodyContainer: {
        flex: 1,
        marginTop: width * .01,
        alignItems: 'center'

    },
    renderListContainer:{
        marginVertical: height * .005,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        elevation: width * .002,
        height: height * .07,
        borderColor: 'gray',
        borderWidth: .5,
        paddingHorizontal: width * .02,
        width: width * .88,
        flexDirection: 'row',
        alignItems: 'center'
    },
    renderListHeading1:{
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .02,
        color: "#484149c5",
    },
    renderListHeading2:{
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .02,
        color: "#484149c5",
        marginRight:width * .04
    },
    historyContentHeadingView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * .84,
    },
    headingDate:{
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .04,
        color: "#e44f3bd5",
        textAlign: 'center',
    },
    headingTime:{
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .04,
        color: "#e44f3bd5",
        textAlign: 'center',
        marginLeft: width * .05
    },
    headingWeight:{
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .04,
        color: "#e44f3bd5",
    },

    // Weight Type Modal
    
    insertWeightModal:{
        backgroundColor: 'white',
        maxHeight: height * .4,
        maxWidth: width * .4,
        top: height * .14,
        left: width * .26,
        borderBottomLeftRadius: width * .005,
        borderTopRightRadius: width * .005,
        borderTopLeftRadius: width * .025,
        borderBottomRightRadius: width * .025,
        justifyContent: 'center',
        alignItems: 'center'
    },
    insertWeightContainer:{
        height: height * .33,
        width: width * .35,

    },
    insertWeightInner:{
        flex: 1,
        backgroundColor: 'white',
        borderBottomLeftRadius: width * .005,
        borderTopRightRadius: width * .005,
        borderTopLeftRadius: width * .025,
        borderBottomRightRadius: width * .025,
        elevation: width * .01,
        // alignSelf:'center'
    },
    insertWeightHeader:{
        height: height * .1,
        width: width * .35,
    },
    inserWeightHeaderInner:{
        flex: 1,
        borderTopRightRadius: width * .005,
        borderTopLeftRadius: width * .025,
        justifyContent: 'center',
        paddingLeft: width * .02,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: width * .002,
        backgroundColor: '#e44f3bd5',
    },
    inserBackBotton:{
        position: 'absolute',
        left: width * .0,
        height: height * .09,
        width: width * .07,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inserHeaderHeading:{
        fontFamily: Fonts.Handlee,
        fontSize: width * .03,
        color: "white",
    },
    inserBodyConatiner:{
        height: height * .13,
        width: width * .35,
    },
    inserBodyInner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    inserTypeHeading:{
        fontFamily: Fonts.Handlee,
        fontSize: width * .02,
        color: "#e44f3bd5",
        marginRight: width * .005
    },
    inserTextinputView:{
        width: width * .1,
        height: height * .075,
        borderWidth: 1,
        borderRadius: width * .003,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#e44f3bd5'
    },
    inserTextinput:{
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .02,
        color: "#e44f3bd5",
        textAlign: 'center'
    },
    inserConditionUnit:{
        fontSize: width * .025,
        fontFamily: Fonts.BalooChettan2,
        color: '#e44f3bd5',
        marginLeft: width * .005
    },
    inserFooterContainer:{
        height: height * .1,
        width: width * .35,
    },
    inserFooterInner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inserSubmitBottonView:{
        width: width * .2,
        height: height * .07,
        backgroundColor: '#e44f3bd5',
        elevation: width * .003,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * .1,
        flexDirection: 'row'
    },
    inserSubmitText:{
        fontSize: width * .023,
        fontFamily: Fonts.Handlee,
        color: 'white',
    },

    


});