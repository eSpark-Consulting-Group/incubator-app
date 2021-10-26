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

    modalContainer: {
        elevation: width * .005,
        borderBottomLeftRadius: width * .005,
        borderTopRightRadius: width * .005,
        borderTopLeftRadius: width * .025,
        borderBottomRightRadius: width * .025,
        backgroundColor: 'white',
        maxHeight: height * .61,
        maxWidth: width * .5,
        top: height * .13,
        // left:width * .1
    },
    modalInner: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxConatainer:{
        width: width * .47,
        height: height * .56,
        // justifyContent: "center",
    },
    boxInner:{
        flex: 1,
        backgroundColor: 'white',
        borderBottomLeftRadius: width * .005,
        borderTopRightRadius: width * .005,
        borderTopLeftRadius: width * .025,
        borderBottomRightRadius: width * .025,
        elevation: width * .015,
    },
    boxHeader:{
        width: width * .47,
        height: height * .1
    },
    boxHeaderInner:{
        flex: 1,
        borderTopRightRadius: width * .005,
        borderTopLeftRadius: width * .025,
        justifyContent: 'space-around',
        // paddingHorizontal: width * .02,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: width * .002,
        backgroundColor: '#e44f3bd5',

    },
    headerHeading:{
        fontFamily: Fonts.Handlee,
        fontSize: width * .03,
        color: "white",
        marginHorizontal:width * .05
        // marginLeft: width * .09,

    },
    headerbotton:{
        height:height * .083,
        width:width * .05,
        borderRadius:width * 1,
        backgroundColor:'white',
        elevation:width * .005,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    bottonText:{
        fontFamily: Fonts.Handlee,
        fontSize: width * .015,
        color: "gray",
        // marginLeft: width * .09,

    },
    boxBody:{
        flexDirection:"column",
        width: width * .47,
        height: height * .2,
        padding: width * .006,
        // justifyContent: "flex-end" ,
        // alignItems: "center"
       },
    boxBodyInner:{
        // flex: 4,
        padding: width * .002,
        paddingLeft: width * .04,
        paddingRight: width * .04,
        flexDirection: "row" ,
        // backgroundColor:'red',
        borderTopRightRadius: width * .005,
        borderTopLeftRadius: width * .025,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});