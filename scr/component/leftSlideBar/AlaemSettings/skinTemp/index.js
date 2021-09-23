import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './style';
import Modal from 'react-native-modal';
import SwitchToggle from 'react-native-switch-toggle';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import Check from 'react-native-vector-icons/AntDesign';
import NumericInput from 'react-native-numeric-input'
// import SysSettings from 'react-native-vector-icons/Octicons';
import { Fonts } from '../../../../utils/fonts';
import { TextInput } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('window');
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            LockorUnlo: false,
            toggleWeight: false,
            toggleTemp: false,
            airHightTemp: 40,
            airLowerTemp: 20,
            airTemp: false,
            higher: 40,
            lower: 20
        }
    }

    changeValueHandler = () => {

        if (this.state.airHightTemp == null) {
            alert('Empty Higher Temperature');
            this.setState(
                {
                    airTemp: this.state.airTemp,
                });
        }
        else if (this.state.airLowerTemp == null) {
            alert('Empty lower Temperature');
            this.setState(
                {
                    airTemp: this.state.airTemp,
                });
        }
        else if (this.state.airHightTemp < 20 || this.state.airHightTemp > 40 || this.state.airLowerTemp < 20 || this.state.airLowerTemp > 40) {
            alert('Please Set Value Above 20 In Lower and Lower 40 Value In Higher');
            this.setState({
                airTemp: this.state.airTemp
            });
        }
        else {
            this.setState({
                airTemp: !this.state.airTemp
            },
                () => {
                    this.props.highSkinTemp(this.state.airHightTemp),
                        this.props.lowerSkinTemp(this.state.airLowerTemp)
                }
            );
        }
    }
    toggleAir = () => {
        this.setState({ airTemp: !this.state.airTemp });
    };


    render() {
        console.log(this.state.airHightTemp)
        console.log(this.state.airLowerTemp)
        return (
            <View>

                <TouchableOpacity style={style.listView} onPress={this.toggleAir}>
                    <Text style={style.listText}>Skin Temperature</Text>
                    <Alarm name={'alarm-light'} size={width * .02} />
                </TouchableOpacity>
                <Modal
                    animationIn="slideInDown"
                    animationOut="slideOutUp"
                    isVisible={this.state.airTemp}
                    style={style.modal}>
                    <View style={style.modalInner}>
                        <View style={style.modalContainer}>
                            <View style={style.modalContainerInner}>
                                <View style={style.headerContainer}>
                                    <View style={style.headerInner}>
                                        <TouchableOpacity onPress={this.toggleAir} style={style.backBotton}>
                                            <Back name={'keyboard-backspace'} size={width * .03} color='white' />
                                        </TouchableOpacity>
                                        <Text style={style.headerHeading}>
                                            Skin Temperature
                                        </Text>
                                    </View>
                                </View>
                                <View style={style.bodyContainer}>
                                    <View style={style.bodyInner}>
                                        <Text style={style.currentHeading}>
                                            Higher Temperature
                                        </Text>
                                        {/* <TextInput
                                                placeholder='Type Here'
                                                keyboardType="number-pad"
                                                maxLength={5}
                                                style={style.currentInput}
                                                onChangeText={airCurrentTemp => this.setState({airCurrentTemp})}
                                                
                                            /> */}
                                        <NumericInput
                                            onChange={airHightTemp => this.setState({ airHightTemp })}
                                            totalWidth={width * .15}
                                            totalHeight={height * .05}
                                            initValue={this.state.airHightTemp}
                                            rounded

                                        />


                                        <Text style={style.currentHeading}>
                                            Lower Temperature
                                        </Text>
                                        <NumericInput
                                            onChange={airLowerTemp => this.setState({ airLowerTemp })}
                                            totalWidth={width * .15}
                                            totalHeight={height * .05}
                                            initValue={this.state.airLowerTemp}
                                            rounded

                                        />
                                        
                                    </View>
                                </View>
                                <View style={style.footerContainer}>
                                    <View style={style.footerInner}>
                                        <TouchableOpacity style={style.bottonView}
                                            onPress={this.changeValueHandler}>
                                            <Text style={style.bottonText}>
                                                Submit
                                            </Text>
                                            <Check name={'checkcircle'} size={width * .015} color='white' style={style.check} />
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

        );
    }
}
