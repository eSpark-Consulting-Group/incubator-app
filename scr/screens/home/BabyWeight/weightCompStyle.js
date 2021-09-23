import { StyleSheet, Dimensions } from "react-native"
import { Fonts } from '../../../utils/fonts';

//Packages

//Files
const { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    TemperatureView: {
        width: width * .32,
        height: height * .33,
        margin: width * .005,
        
    },
    Temperature: {
        flex: 1,
        borderRadius: height * .05,
        elevation: width * .005,
        borderWidth:width * .002,
        backgroundColor:'white',
        padding: height * .022,
        borderColor:'#5c5c5c70'
    },
    currentTempText: {
        fontSize: width * .026,
        // fontWeight: "bold", 
        color: '#FF420E',
        fontFamily: Fonts.BalooChettan2
    },
    tempInputCur: {
        // position: 'absolute',
        fontSize: width * .05,
        fontFamily: Fonts.BalooChettan2,
        color: '#484149c5'
    },
    zeroUper: {
        fontSize: width * .017,
        fontFamily: Fonts.BalooChettan2,
        color: '#484149c5',
        left: width * .005,
    },
    kgUper: {
        fontSize: width * .035,
        fontFamily: Fonts.BalooChettan2,
        color: '#484149c5',
        top: height * .05,
        left:width * .01,
        marginLeft:width * .002,

        // marginLeft:width * .0,

    },
    pondUper: {
        fontSize: width * .035,
        fontFamily: Fonts.BalooChettan2,
        color: '#484149c5',
        top: height * .05,
        left:width * .01,
        marginRight:width * .016,
        marginLeft:width * .002,

    },
    iconOpenRow: {
        bottom: height * .065,
        right: width * .007
    },
    setTemp: {
        fontSize: width * .023,
        fontFamily: Fonts.BalooChettan2,
        color: '#FF420E',
        top: height * .006,
        marginVertical: width * .005
    },
    tempInputSet: {
        fontSize: width * .035,
        color: '#484149c5',
        fontFamily: Fonts.BalooChettan2,

    },
    zeroLower: {
        fontSize: width * .016,
        fontFamily: Fonts.BalooChettan2,
        color: '#484149c5',
        left: width * .004,
        bottom: height * .03
    },
    centiLower: {
        fontSize: width * .03,
        fontFamily: Fonts.BalooChettan2,
        color: '#484149c5',
        // top: height * .005,
        marginRight: height * .02
    },

    weighHeaderContainer: {
        height:height * .27,
        width:width * .29,
        // backgroundColor:'red'
    },
    footerContainer:{
        height:height * .12,
        width:width * .29,
    },
    likeInputOxygen: {
        width: width * .22,
        height: height * .22,
        elevation:width * .003,
        backgroundColor:'white',
        borderWidth: .5,       
        backgroundColor:'white',
        elevation:width * .002,
        // flexDirection: "row-reverse",
        alignItems: 'center',
        borderRadius: height * .005,
        justifyContent: 'center',
    },
    boxUperStyle: {
        flexDirection: 'row'
    },
    boxLowerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: height * .02,  
    },
    likeInputMin: {
        width: width * .2,
        height: height * .07,
        borderWidth: 1,
        // flexDirection:"row-reverse",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: height * .005,

    },
    zeroBotton:{
        width:width * .055,
        height:height * .07,
        borderRadius: width * .002,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        right:width * .0,
        bottom:height * .01
    },
    zeroText:{
        color:'white',
        fontSize:width * .011,
        fontFamily:Fonts.BalooChettanBold,
    },

});
