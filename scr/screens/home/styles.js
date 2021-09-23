import { StyleSheet, Dimensions } from "react-native";
import {Fonts} from '../../utils/fonts';
//Packages

//Files
const { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff70',
    },
    headerContainer: {
        width: width * 1,
        height: height * .14,
        paddingHorizontal: width * .03,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        elevation: 5,
        borderBottomWidth:3,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderBottomRightRadius: width * .03,
        borderBottomLeftRadius: width * .03,
        marginBottom:height * .01,
        borderColor:'#ff6c6c'
    },
    inerContainer1: {
        width: width * 1,
        height:height * .84,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap'
        
    },
    notificationIcon:{
        flexDirection:'row',
    },

    iconAndText:{
        alignItems:'center',
    },
    alarmText:{
        fontSize: width * .015,
        fontFamily:Fonts.Montserrat,
        color: '#484149c5',
    },
    
    airHeading:{
        fontSize:width * .03,
        fontFamily:Fonts.BalooChettanBold,        
        color: '#484149c5',
        alignSelf:'center',
        textShadowOffset: {
            width: width * 0.003,
            height: height * 0.003,
        },
        textShadowRadius: width * 0.05,
        textShadowColor: 'white',
        // marginTop:width * .009,
    },
    tempHeading:{
        fontSize:width * .03,
        fontFamily:Fonts.BalooChettanBold,        
        color: '#484149c5',
        alignSelf:'center',
        textShadowOffset: {
            width: width * 0.003,
            height: height * 0.003,
        },
        textShadowRadius: width * 0.05,
        textShadowColor: 'white',
        // marginTop:width * .009,
    },
    humHeading:{
        fontSize:width * .03,
        fontFamily:Fonts.BalooChettanBold,        
        color: '#484149c5',
        alignSelf:'center',
        textShadowOffset: {
            width: width * 0.003,
            height: height * 0.003,
        },
        textShadowRadius: width * 0.05,
        textShadowColor: 'white',

        // marginTop:width * .009,
    },
    weigHeading:{
        fontSize:width * .03,
        fontFamily:Fonts.BalooChettanBold,        
        color: '#484149c5',
        alignSelf:'center',        
        textShadowOffset: {
            width: width * 0.003,
            height: height * 0.003,
        },
        textShadowRadius: width * 0.05,
        textShadowColor: 'white',

        // marginTop:width * .009,
    },
    Spo2Heading:{
        fontSize:width * .03,
        fontFamily:Fonts.BalooChettanBold,        
        color: '#484149c5',
        alignSelf:'center',
        textShadowOffset: {
            width: width * 0.003,
            height: height * 0.003,
        },
        textShadowRadius: width * 0.05,
        textShadowColor: 'white',

        // marginTop:width * .009,
    },
    oxygenHeading:{
        fontSize:width * .03,
        fontFamily:Fonts.BalooChettanBold,        
        color: '#484149c5',
        alignSelf:'center',
        textShadowOffset: {
            width: width * 0.003,
            height: height * 0.003,
        },
        textShadowRadius: width * 0.05,
        textShadowColor: 'white',

        // marginTop:width * .009,
    },
    inerContainer2: {
        width: width * 1,
        height: height * .42,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
   

});
