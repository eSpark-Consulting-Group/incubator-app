import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './styles';
import Modal from 'react-native-modal';
import MenuOpen from 'react-native-vector-icons/AntDesign';
import MenuClose from 'react-native-vector-icons/AntDesign';
import Setting from 'react-native-vector-icons/Feather';
import Lock from 'react-native-vector-icons/SimpleLineIcons';
import SysSettings from 'react-native-vector-icons/Octicons';
import Graph from 'react-native-vector-icons/Entypo';
import Pass from 'react-native-vector-icons/MaterialCommunityIcons';
import Bright from 'react-native-vector-icons/MaterialCommunityIcons';
import Data from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import SwitchToggle from 'react-native-switch-toggle';
import SystemSetting from 'react-native-system-setting';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import AlarmSetting from './AlaemSettings/index';
import Parameter from './Parameter/index';
// import SysSettings from 'react-native-vector-icons/Octicons';
import { Fonts } from '../../utils/fonts';
const { height, width } = Dimensions.get('window');
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            LockorUnlo: false,
            brightness: .2,
            toggleWeight: false,
            toggleTemp: false,
            higherAirValue: null,
            lowAirValue: 32.1,
            skinHigherTemp: 32.1,
            skinLowerTemp: 34.1,
            spo2Uper:99,
            spo2Lower:91,
            hrUpper:190,
            hrLower:70,
            switchAir:true,
            switchSkin:true,
            switchSpo2:true,
            switchWeight:true,
            switchHumidity:true,
            switchOxygen:true,
        }
        this.handleAirHigher = this.handleAirHigher.bind(this);
        this.handleModalOff = this.handleModalOff.bind(this);
        this.handleAirLower = this.handleAirLower.bind(this);
        this.handleSkinHigher = this.handleSkinHigher.bind(this);
        this.handleSkinLower = this.handleSkinLower.bind(this);



    }
    
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    toggleModalLock = () => {
        this.setState({ LockorUnlo: !this.state.LockorUnlo });
    };
    _doneUnit = () => {
        this.setState(
            {
                LockorUnlo: !this.state.LockorUnlo,
                isModalVisible: !this.state.isModalVisible
            },
            () => {
                this.props.selectWeight(this.state.toggleWeight),
                    this.props.selectTemp(this.state.toggleTemp)
            },
        );
    }
    handleAirHigher(child) {
        this.setState({
            higherAirValue: child,
        },
            () => this.props.airHigTemp(this.state.higherAirValue)
        );
    };
    handleAirLower(child) {
        this.setState({
            lowAirValue: child,
        },
            () => this.props.airLoweTemp(this.state.lowAirValue)
        );
    };
    handleSkinLower(child) {
        this.setState({
            skinLowerTemp: child,
        },
            () => this.props.skinLowTemp(this.state.skinLowerTemp)
        );
    };
    handleSkinHigher(child) {
        this.setState({
            skinHigherTemp: child,
        },
            () => this.props.skinHighTemp(this.state.skinHigherTemp)
        );
    };
    handleSpo2Upper = (child) => {
        this.setState({
            spo2Uper: child,
        },
            () => this.props.spo2Uper(this.state.spo2Uper)
        );
    };
    handleSpo2Lower = (child) => {
        this.setState({
            spo2Lower: child,
        },
            () => this.props.spo2Lower(this.state.spo2Lower)
        );
    };
    handleHrUpper = (child) => {
        this.setState({
            hrUpper: child,
        },
            () => this.props.hrUper(this.state.hrUpper)
        );
    };
    handleHRLower = (child) => {
        this.setState({
            hrLower: child,
        },
            () => this.props.hrLower(this.state.hrLower)
        );
    };
    handleModalOff(child) {
        this.setState({
            isModalVisible: child,
        });
    };
    handleSwitchAir = (child) => {
        this.setState({
            switchAir: child,
        },
            () => this.props.switchAir(this.state.switchAir)
        );
    };
    handleSwitchSkin = (child) => {
        this.setState({
            switchSkin: child,
        },
            () => this.props.switchSkin(this.state.switchSkin)
        );
    };
    handleSwitchSpo2 = (child) => {
        this.setState({
            switchSpo2: child,
        },
            () => this.props.switchSpo2(this.state.switchSpo2)
        );
    };
    handleSwitchWeight = (child) => {
        this.setState({
            switchWeight: child,
        },
            () => this.props.switchWeight(this.state.switchWeight)
        );
    };
    handleSwitchHumidity = (child) => {
        this.setState({
            switchHumidity: child,
        },
            () => this.props.switchHumidity(this.state.switchHumidity)
        );
    };
    handleSwitchOxygen = (child) => {
        this.setState({
            switchOxygen: child,
        },
            () => this.props.switchOxygen(this.state.switchOxygen)
        );
    };
    render() {
        return (
            <View >
                {
                    this.props.locker ? (
                        <TouchableOpacity onPress={this.toggleModal}>
                            <MenuOpen name="menufold" size={width * .04} color="black" />
                        </TouchableOpacity>
                    ) : (
                            <View>
                                <MenuOpen name="menufold" size={width * .04} color="red" />
                            </View>
                        )
                }
                <Modal
                    animationIn="slideInRight"
                    animationOut="slideOutRight"
                    // onBackdropPress={() => this.toggleModal()}
                    onSwipeComplete={() => this.toggleModal()}
                    swipeDirection="right"
                    isVisible={this.state.isModalVisible}
                    style={style.modalMainContainer}>
                    <View style={{ flex: 1 }}>
                        <View style={style.modalHeaderContainer}>
                            <View style={style.modalHeaderInner}>
                                <View style={style.menuBottonView}>
                                    <TouchableOpacity onPress={this.toggleModal}>
                                        <MenuClose name="menuunfold" size={width * .03} color="red" />
                                    </TouchableOpacity>
                                    <Text style={style.headerHeading}>
                                        Settings
                                    </Text>
                                </View>
                                <Setting name="settings" size={width * .02} color="red" />
                            </View>
                        </View>
                        <View style={style.modalBodyContainer} >
                            <View style={style.modalBodyInner}>
                                <AlarmSetting
                                    modalOff={this.handleModalOff}
                                    airHigTemp={this.handleAirHigher}
                                    airLowTemp={this.handleAirLower}
                                    skinHighTemp={this.handleSkinHigher}
                                    skinLowTemp={this.handleSkinLower}
                                    spo2Uper={this.handleSpo2Upper}
                                    hrLower={this.handleHRLower}
                                    hrUper={this.handleHrUpper}
                                    spo2Lower={this.handleSpo2Lower}
                                />
                                <TouchableOpacity style={style.listView}>
                                    <Text style={style.listText}>System Setting</Text>
                                    <SysSettings name={'settings'} size={width * .02} />
                                </TouchableOpacity>
                                <TouchableOpacity style={style.listView}>
                                    <Text style={style.listText}>Brightness</Text>
                                    <View style={{ width: width * .18 }}>
                                        <Slider
                                            maximumValue={1}
                                            minimumValue={0}
                                            minimumTrackTintColor="#fd5e5efd"
                                            maximumTrackTintColor="#000000"
                                            thumbTintColor='red'
                                            step={0.01}
                                            value={this.state.brightness}
                                            onValueChange={(brightness) => {
                                                this.setState({ brightness });
                                                SystemSetting.setBrightness(brightness);
                                            }}
                                        />
                                    </View>
                                    <Bright name={'brightness-7'} size={width * .02} />
                                </TouchableOpacity>
                                <Parameter 
                                switchAir = {this.handleSwitchAir}
                                switchSkin = {this.handleSwitchSkin}
                                switchSpo2 = {this.handleSwitchSpo2}
                                switchWeight = {this.handleSwitchWeight}
                                switchHumidity = {this.handleSwitchHumidity}
                                switchOxygen = {this.handleSwitchOxygen}
                                />
                                <TouchableOpacity style={style.listView}>
                                    <Text style={style.listText}>Graph Setting</Text>
                                    <Graph name={'area-graph'} size={width * .02} />
                                </TouchableOpacity>
                                <TouchableOpacity style={style.listView}>
                                    <Text style={style.listText}>Calibaration</Text>
                                    <Pass name={'lastpass'} size={width * .02} />
                                </TouchableOpacity>
                                <TouchableOpacity style={style.listView}>
                                    <Text style={style.listText}>Data Record</Text>
                                    <Data name={'database'} size={width * .018} />
                                </TouchableOpacity>
                                <TouchableOpacity style={style.listView} onPress={() => {
                                    this.setState({ LockorUnlo: !this.state.LockorUnlo });
                                }}>
                                    <Text style={style.listText}>Units</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <Modal
                            animationIn="slideInRight"
                            animationOut="slideOutRight"
                            // onBackdropPress={() => this.toggleModalLock()}
                            // onSwipeComplete={() => this.toggleModalLock()}
                            // swipeDirection="right"
                            isVisible={this.state.LockorUnlo}
                            style={{
                                elevation: width * .005,
                                borderBottomLeftRadius: width * .005,
                                borderTopRightRadius: width * .005,
                                borderTopLeftRadius: width * .025,
                                borderBottomRightRadius: width * .025,
                                backgroundColor: 'white',
                                maxHeight: height * .5,
                                maxWidth: width * .35,
                                top: height * .15
                            }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <View style={{
                                    width: width * .32,
                                    height: height * .45
                                }}>

                                    <View style={{
                                        flex: 1,
                                        backgroundColor: 'white',
                                        borderBottomLeftRadius: width * .005,
                                        borderTopRightRadius: width * .005,
                                        borderTopLeftRadius: width * .025,
                                        borderBottomRightRadius: width * .025,
                                        elevation: width * .015,
                                    }}>
                                        <View style={{
                                            width: width * .32,
                                            height: height * .12
                                        }}>
                                            <View style={{
                                                flex: 1,
                                                borderTopRightRadius: width * .005,
                                                borderTopLeftRadius: width * .025,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>

                                                <Text style={{
                                                    fontFamily: Fonts.Handlee,
                                                    fontSize: width * .03,
                                                    color: "red",
                                                }}>
                                                    Change the Unit
                                                            </Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            width: width * .32,
                                            height: height * .2
                                        }}>

                                            <View style={{
                                                flex: 1,
                                                // backgroundColor:'red',
                                                // borderTopRightRadius: width * .005,
                                                // borderTopLeftRadius: width * .025,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    margin: width * .02,

                                                }}>
                                                    <Text style={{
                                                        fontFamily: Fonts.Handlee,
                                                        fontSize: width * .02,
                                                        color: "red",
                                                        top: height * .01
                                                    }}>Weight: </Text>

                                                    <SwitchToggle
                                                        switchOn={this.state.toggleWeight}
                                                        onPress={() => this.setState({ toggleWeight: !this.state.toggleWeight })}
                                                        useNativeDriver={false}
                                                        backgroundColorOn={'#555555'}
                                                        circleColorOn={'#f68d80fd'}
                                                        backgroundColorOff={'#555555'}
                                                        circleColorOff={'white'}
                                                        containerStyle={style.toggleContainer}
                                                        circleStyle={style.toggleCircle}
                                                    />
                                                    <Text style={{
                                                        fontSize: width * .023,
                                                        fontFamily: Fonts.BalooChettanBold,
                                                        // fontWeight: 'bold',
                                                        marginLeft: width * .005,
                                                    }}>
                                                        Kgs/£
                                                 </Text>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',

                                                }}>
                                                    <Text style={{
                                                        fontFamily: Fonts.Handlee,
                                                        fontSize: width * .02,
                                                        color: "red",
                                                    }}>Temperature: </Text>
                                                    <SwitchToggle
                                                        switchOn={this.state.toggleTemp}
                                                        onPress={() => this.setState({ toggleTemp: !this.state.toggleTemp })}
                                                        useNativeDriver={false}
                                                        backgroundColorOn={'#555555'}
                                                        circleColorOn={'#f68d80fd'}
                                                        backgroundColorOff={'#555555'}
                                                        circleColorOff={'white'}
                                                        containerStyle={style.toggleContainer}
                                                        circleStyle={style.toggleCircle}
                                                    />
                                                    <Text style={{
                                                        fontSize: width * .023,
                                                        // fontWeight: 'bold',
                                                        fontFamily: Fonts.BalooChettanBold,
                                                        marginLeft: width * .005,
                                                    }}>
                                                        {'\u2103'}/{'\u2109'}
                                                    </Text>
                                                </View>

                                            </View>
                                        </View>
                                        <View style={{
                                            width: width * .32,
                                            height: height * .13
                                        }}>
                                            <View style={{
                                                flex: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <TouchableOpacity style={{
                                                    width: width * .2,
                                                    height: height * .07,
                                                    backgroundColor: '#e44f3bfd',
                                                    elevation: width * .003,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderRadius: width * .1

                                                }}
                                                    onPress={this._doneUnit}
                                                >
                                                    <Text style={{
                                                        fontSize: width * .023,
                                                        fontFamily: Fonts.Handlee,
                                                        color: 'white',
                                                    }}>
                                                        Done
                                                    </Text>
                                                </TouchableOpacity>

                                            </View>
                                        </View>


                                    </View>
                                </View>

                            </View>

                        </Modal>
                    </View>
                </Modal>
            </View >
        );
    }
}
