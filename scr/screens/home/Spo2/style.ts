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
    centiUper: {
        fontSize: width * .04,
        fontFamily: Fonts.BalooChettan2,
        color: '#484149c5',
        marginRight:width * .005
    },
    iconOpenRow: {
        bottom: height * .065,
        right: width * .033
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
        marginRight: height * .03
    },

    skinInerContainer: {
        flex: 1,
    },
    skinIner: {
        flex: 1,
        paddingHorizontal: height * .01,
        // backgroundColor:'red'
    },
    likeInputOxygen: {
        width: width * .2,
        height: height * .1,
        borderWidth: 1,
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
    headerIcon: {
        alignItems: 'center',
        marginLeft: width * .35
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
    alarmText: {
        // alignSelf:'center',
        fontSize: width * .015,
        fontFamily: Fonts.Handlee,
        color: '#e44f3bfd',

    },
    bodyMainContainer: {
        width: width * .9,
        height: height * .62,
        backgroundColor: 'white'
    },
    bodyContainer: {
        flex: 1,
        marginHorizontal: width * .02,
        marginTop: width * .01,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },


});
