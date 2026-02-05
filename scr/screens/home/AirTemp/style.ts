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
    
    centiUper: {
        fontSize: width * .038,
        fontFamily: Fonts.BalooChettan2,
        color: '#484149c5'
    },
    iconOpenRow: {
        bottom: height * .065,
        right: width * .011
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
    centiLower: {
        fontSize: width * .028,
        fontFamily: Fonts.BalooChettan2,
        color: '#484149c5',
        // bottom: height * .01,
        marginRight: height * .02
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
        width: width * .23,
        height: height * .1,
        // flexDirection: "row-reverse",
        alignItems: 'center',
        borderRadius: height * .005,
        justifyContent: 'center',
        elevation:width * .003,
        backgroundColor:'white',
        borderWidth: .5,

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
        elevation:width * .003,
        backgroundColor:'white',
        borderWidth: .5,
        // flexDirection:"row-reverse",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: height * .005,
        
    },

});
