import { StyleSheet, Dimensions } from "react-native"

//Packages

//Files
const { height, width } = Dimensions.get('window');

export default styles = StyleSheet.create({

    container: {
        flex: 1,

        // alignItems:'center',        
    },
    image: {
        width: width * 1,
        height: height * 1,

    },
    activityIndi: {
        // flex: 1,
        bottom: width * .1
        // alignSelf:'baseline'
    },
    animationTextStyle: {
        color: 'white',
        fontSize: width * .07,
        marginTop: width * .01
    }




});
