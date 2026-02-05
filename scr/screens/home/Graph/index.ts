import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Switch, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
// import style from './weightStyle';
// import comStyle from './weightCompStyle';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import Status from 'react-native-vector-icons/MaterialIcons';
import Send from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import SwitchToggle from 'react-native-switch-toggle';
import Graph from 'react-native-vector-icons/SimpleLineIcons';
import { Fonts } from '../../../utils/fonts';

const { height, width } = Dimensions.get('window');
export default class App extends Component {
    state = {
        isModalVisibleGraph: false,
        toggle: false,
        currentWei: "00.0",
        preWei: '00.0'
    }
    togglebuttun = () => {
        this.setState({ toggle: !this.state.toggle });
    };
    toggleModal = () => {
        this.setState({ isModalVisibleGraph: !this.state.isModalVisibleGraph });
    };
    render() {
        // console.log(this.state.isModalVisibleGraph)
        return (
            <View>
                <TouchableOpacity onPress={this.toggleModal}>
                    <View style={{
                        borderTopRightRadius: width * .015,
                        borderBottomLeftRadius: width * .015,
                        backgroundColor: 'orange',
                        height: height * .13,
                        width: width * .1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical:1
                    }}>
                        <Graph name={'graph'} size={width * .05} color={"black"} />
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: width * .02,
                            fontFamily: Fonts.Aladin,
                            letterSpacing: 2,
                            color: '#484149c5',
                            bottom: height * .01
                        }}>Graph</Text>

                    </View>

                </TouchableOpacity>
                {/* <Modal
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    // onBackdropPress={() => this.toggleModal()}
                    onSwipeComplete={() => this.toggleModal()}
                    swipeDirection="right"
                    isVisible={this.state.isModalVisibleGraph}
                    style={style.modalMainContainer}>
                    <View style={{ flex: 1, backgroundColor:'red'}}>

                    </View>
                </Modal> */}
            </View>

        )
    }
}