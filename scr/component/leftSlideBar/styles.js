import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../utils/fonts';

//Packages

//Files
const { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    listView:{
        height:height * .07,
        width: width * .3,
        backgroundColor:'white',
        marginBottom:height * .02,
        elevation:width * .002,
        borderWidth:width * .001,
        borderColor:'#b098b4c5',
        alignItems:"center",
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:width * .01,
        borderRadius:width * .003
    },
    listText:{
        fontSize:width * .015,
        fontFamily:Fonts.BalooChettanBold,
        color:"#484149c5",
        // fontFamily:'MetalMania-Regular'
    },
    toggleContainer:{
        width: width * .09,
        height: height * .07,
        borderRadius: width * .04,
        padding: width * .005,
        elevation: width * .003,
    },
    toggleCircle:{
        width: width * .03,
        height: height * .05,
        borderRadius: width * .1,
        backgroundColor: 'white', // rgb(102,134,205)
    },

    // Modal Styling

    modalMainContainer:{
        elevation: width * .005,
        backgroundColor: 'white',
        maxHeight: height * 1,
        maxWidth: width * .35,
        // top:width * .13,
        left: width * .6,
        borderTopLeftRadius: width * .02,
        borderBottomLeftRadius: width * .02,
        // maxHeight:height * .7,

    },
    modalHeaderContainer:{
        height: height * .1,
        width: width * .35,
    },
    modalHeaderInner:{
        flex: 1,
        backgroundColor: 'white',
        elevation: width * .005,
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: width * .015,
        borderTopLeftRadius: width * .02,
    },
    menuBottonView:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerHeading:{
        fontSize: width * .02,
        color: 'red',
        fontFamily: Fonts.Handlee,
        marginLeft: width * .01
    },
    modalBodyContainer:{
        height: height * .73,
        width: width * .35,
        // backgroundColor:'red',
    },
    modalBodyInner:{
        flex: 1,
        elevation: width * .005,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * .02,

    },
    
});