import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../../utils/fonts';

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
    switchView:{
        flexDirection:'row',
        width:width * .44,
        justifyContent:'space-between',
        alignItems:'center',
    },
    switchText:{
        fontFamily: Fonts.Handlee,
        fontSize: width * .02,
        color: "red",
    },
    toggleContainer: {
        width: width * .06,
        height: height * .05,
        borderRadius: width * .04,
        padding: width * .005,
        elevation: width * .003,
    },
    toggleCircle: {
        width: width * .02,
        height: height * .035,
        borderRadius: width * .1,
        backgroundColor: 'white', // rgb(102,134,205)
    },

    // Modal Styling

    modalContainer: {
        elevation: width * .005,
        borderBottomLeftRadius: width * .025,
        borderBottomRightRadius: width * .025,
        backgroundColor: 'white',
        maxHeight: height * .59,
        maxWidth: width * .5,
        top: height * -0.082,
        left:width * .2
    },
    modalInner: {
        flex: 1,
        alignItems: 'center',
    },
    passInputValue:{
        width: width * .25,
        height: height * .08,
        backgroundColor: '#23212016',
        paddingLeft: width * .01,
        borderRadius: width * .002,
    },
    boxConatainer:{
        width: width * .47,
        height: height * .56
    },
    boxInner:{
        flex: 1,
        backgroundColor: 'white',
        borderBottomLeftRadius: width * .025,
        borderBottomRightRadius: width * .025,
        elevation: width * .015,
    },
    boxHeader:{
        width: width * .47,
        height: height * .1
    },
    boxHeaderInner:{
        flex: 1,
        justifyContent: 'center',
        // paddingHorizontal: width * .02,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: width * .002,
        backgroundColor: '#e44f3bd5',

    },
    headerHeading:{
        fontFamily: Fonts.Handlee,
        fontSize: width * .04,
        color: "white",
        marginHorizontal:width * .05
        // marginLeft: width * .09,

    },
    headerbotton:{
        height:height * .06,
        width:width * .1,
        backgroundColor:'#e44f3bd5',
        elevation:width * .003,
        borderRadius:width * .002,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    bottonText:{
        fontFamily: Fonts.Handlee,
        fontSize: width * .015,
        color: "white",

    },
    boxBodyAlert:{
        width: width * .47,
        height: height * .27
    },
    boxBody:{
        width: width * .47,
        height: height * .45
    },
    boxBodyInner:{
        flex: 1,
        marginTop:height * .005,
        justifyContent: 'center',
        alignItems: 'center',
    },
    currentInput:{
        fontFamily: Fonts.BalooChettan2,
        fontSize: width * .02,
        color: "gray",
        width:width * .18,
    },
    currentHeading:{
        fontFamily: Fonts.Handlee,
        fontSize: width * .04,
        color: "red",
    },
    multiRow: {
        borderRadius: width * .1,
        width: width * .4,
        height: height * .05,
        margin: width * .002,
        backgroundColor:'#23212016',
        paddingHorizontal: width * .02,
    },
    multiLabel: {
        paddingLeft: width * .2,
        fontSize: width * .02,
        fontFamily: Fonts.Handlee,
    },
    boxFooter:{
        width: width * .47,
        height: height * .1
    },
    boxFooterInner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});