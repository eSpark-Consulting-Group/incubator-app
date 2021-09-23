import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../../../utils/fonts';

//Packages

//Files
const { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    mainList: {
        height: height * .07,
        width: width * .3,
        backgroundColor: 'white',
        marginBottom: height * .02,
        elevation: width * .002,
        borderWidth: width * .001,
        borderColor: '#b098b4c5',
        alignItems: "center",
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: width * .01,
        borderRadius: width * .003
    },
    listView: {
        height: height * .07,
        width: width * .4,
        backgroundColor: 'white',
        marginBottom: height * .02,
        elevation: width * .002,
        borderWidth: width * .001,
        borderColor: '#b098b4c5',
        alignItems: "center",
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: width * .02,
        // borderRadius:width * .003
        borderBottomLeftRadius: width * .005,
        borderTopRightRadius: width * .005,
        borderTopLeftRadius: width * .025,
        borderBottomRightRadius: width * .025,
    },
    listText: {
        fontSize: width * .015,
        fontFamily: Fonts.BalooChettanBold,
        color: "#484149c5",
        // fontFamily:'MetalMania-Regular'
    },
    toggleContainer: {
        width: width * .09,
        height: height * .07,
        borderRadius: width * .04,
        padding: width * .005,
        elevation: width * .003,
    },
    toggleCircle: {
        width: width * .03,
        height: height * .05,
        borderRadius: width * .1,
        backgroundColor: 'white', // rgb(102,134,205)
    },

    // Modal Styling

    modal: {
        elevation: width * .005,
        borderBottomLeftRadius: width * .005,
        borderTopRightRadius: width * .005,
        borderTopLeftRadius: width * .025,
        borderBottomRightRadius: width * .025,
        backgroundColor: 'white',
        maxHeight: height * .5,
        maxWidth: width * .43,
        top: height * .155,
        left: width * .035
    },
    modalInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer:{
        width: width * .4,
        height: height * .45
    },
    modalContainerInner:{
        flex: 1,
        backgroundColor: 'white',
        borderBottomLeftRadius: width * .005,
        borderTopRightRadius: width * .005,
        borderTopLeftRadius: width * .025,
        borderBottomRightRadius: width * .025,
        elevation: width * .015,
    },
    headerContainer:{
        width: width * .4,
        height: height * .1
    },
    headerInner:{
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
    backBotton:{
        position: 'absolute',
        left: width * .0,
        height: height * .09,
        width: width * .07,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerHeading:{
        fontFamily: Fonts.Handlee,
        fontSize: width * .03,
        color: "white",
    },
    bodyContainer:{
        width: width * .4,
        height: height * .25
    },
    bodyInner:{
        flex: 1,
        // backgroundColor:'red',
        // borderTopRightRadius: width * .005,
        // borderTopLeftRadius: width * .025,
        justifyContent: 'center',
        alignItems: 'center',
    },
    currentHeading:{
        fontFamily: Fonts.Handlee,
        fontSize: width * .02,
        color: "red",
        // marginLeft: width * .05,
    },
    currentInputView:{
        width: width * .2,
        height: height * .075,
        borderWidth: 1,
        borderRadius: width * .003,
        justifyContent: 'center',
        alignItems: 'center',
    },
    currentInput:{
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .02,
        color: "red",
        textAlign:'center'

    },
    setHeading:{
        fontFamily: Fonts.Handlee,
        fontSize: width * .02,
        color: "red",
        // marginLeft: width * .05,
    },
    footerContainer:{
        width: width * .4,
        height: height * .1
    },
    footerInner:{
        flex: 1,
        // backgroundColor:'red',
        // borderTopRightRadius: width * .005,
        // borderTopLeftRadius: width * .025,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottonView:{
        width: width * .2,
        height: height * .07,
        backgroundColor: '#e44f3bfd',
        elevation: width * .003,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * .1,
        flexDirection:'row'
    },
    bottonText:{
        fontSize: width * .023,
        fontFamily: Fonts.Handlee,
        color: 'white',
    },
    check:{
        position:'absolute',
        right:width * .02,
    }
});