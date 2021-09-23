import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './styles';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Lock from 'react-native-vector-icons/FontAwesome';
import Unlock from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import Oxygen from './Oxygen/oxygen';
import Weight from './BabyWeight/Weight';
import Graph from './Graph/index';
import SkinTemp from './SkinTemp/index';
import SPO2 from './Spo2/index';
import Humidity from './Humidity/index';
import AirTemp from './AirTemp/airTemp';
import LeftSlider from '../../component/leftSlideBar/index';

// TODO: What to do with the module?
const { height, width } = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props);
    // this.onButtonStart = this.onButtonStart.bind(this);
    // this.onButtonStop = this.onButtonStop.bind(this);
    // this.onButtonClear = this.onButtonClear.bind(this);
    // this.start = this.start.bind(this);
    this.state = {
      valueX: null,
      valuey: null,
      valuez: null,
      alarmPower: 15,
      alarmSensor: 15,
      alarmFan: 16,
      alarmAir: 20,
      // alarmAirOver:0,
      alarmSystem: 14,
      time: null,
      airCondi: true,
      senCondi: true,
      fanCondi: true,
      // airOvCondi:true,
      sysCondi: true,
      powCondi: true,
      weightSign: false,
      tempSign: false,
      lock: true,
      higherAirValue: 40,
      lowAirValue: 32.1,
      skinHigherTemp: 32.1,
      skinLowTemp: 34.1,
      spo2Uper: 99,
      spo2Lower: 91,
      hrUper: 190,
      hrLower: 70,
      switchAir: true,
      switchSkin: true,
      switchSpo2: true,
      switchWeight: true,
      switchHumidity: true,
      switchOxygen: true,

    },
      this.handleWeight = this.handleWeight.bind(this);
    this.handleTemp = this.handleTemp.bind(this);
    this.timer = null;
    this.stopTimer = this.stopTimer.bind(this);
    this.handleAirHigher = this.handleAirHigher.bind(this);
    this.handleAirLow = this.handleAirLow.bind(this);
    this.handleSkinHigher = this.handleSkinHigher.bind(this);
    this.handleSkinLower = this.handleSkinLower.bind(this);

  }
  componentDidMount() {
    this.alarmPowFn();
    this.alarmFanFn();
    this.alarmSenFn();
    this.alarmSysFn();
  }

  alarmPowFn = () => {
    if (this.state.alarmPower < 10) {
      this.setState({ powCondi: false })
    } else if (this.state.alarmPower > 20) {
      this.setState({ powCondi: false })
    } else {
      this.setState({ powCondi: true })
    }
  };
  alarmSenFn = () => {
    if (this.state.alarmSensor < 10) {
      this.setState({ senCondi: false })
    } else if (this.state.alarmSensor > 20) {
      this.setState({ senCondi: false })
    } else {
      this.setState({ senCondi: true })
    }
  };
  alarmFanFn = () => {
    if (this.state.alarmFan < 10) {
      this.setState({ fanCondi: false })
    } else if (this.state.alarmFan > 20) {
      this.setState({ fanCondi: false })
    } else {
      this.setState({ fanCondi: true })
    }
  };
  alarmSysFn = () => {
    if (this.state.alarmSystem < 10) {
      this.setState({ sysCondi: false })
    } else if (this.state.alarmSystem > 20) {
      this.setState({ sysCondi: false })
    } else {
      this.setState({ sysCondi: true })
    }
  };
  handleWeight(child) {
    this.setState({
      weightSign: child,
    });
  };
  handleAirHigher(child) {
    this.setState({
      higherAirValue: child,
    });
  }
  handleAirLow(child) {
    this.setState({
      lowAirValue: child,
    })
  };
  handleSkinLower(child) {
    this.setState({
      skinLowTemp: child,
    })
  };
  handleSkinHigher(child) {
    this.setState({
      skinHigherTemp: child,
    });
  };
  handleSpo2Uper = (child) => {
    this.setState({
      spo2Uper: child,
    })
  };
  handleSpo2Lower = (child) => {
    this.setState({
      spo2Lower: child,
    });
  };
  handleHrUper = (child) => {
    this.setState({
      hrUper: child,
    })
  };
  handleHrLower = (child) => {
    this.setState({
      hrLower: child,
    });
  };
  handleTemp(child) {
    this.setState({
      tempSign: child,
    });
  };
  handleParameter = (child) => {
    this.setState({
      parameter: child,
    });
  };
  handleSwitchAir = (child) => {
    this.setState({
      switchAir: child,
    });
  };
  handleSwitchSkin = (child) => {
    this.setState({
      switchSkin: child,
    });
  };
  handleSwitchSpo2 = (child) => {
    this.setState({
      switchSpo2: child,
    });
  };
  handleSwitchWeight = (child) => {
    this.setState({
      switchWeight: child,
    });
  };
  handleSwitchHumidity = (child) => {
    this.setState({
      switchHumidity: child,
    });
  };
  handleSwitchOxygen = (child) => {
    this.setState({
      switchOxygen: child,
    });
  };


  stopTimer() {
    clearTimeout(this.timer);
  };
  _lockOn = () => {
    this.setState({ lock: !this.state.lock, }),
      alert('System Unlocked')
  };
  _lockOff = () => {
    this.setState({ lock: !this.state.lock, }),
      alert('System Locked')
  };
  render() {
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'}></StatusBar>
        <Image source={require('../../../images/background1.jpg')} style={{
          width: width * 1,
          height: height * 1,
          position: 'absolute',
          opacity: .5,

        }}
        />
        <View style={style.headerContainer}>
          <Image source={require('../../../images/background.jpg')} style={{
            width: width * 1,
            height: height * .14,
            position: 'absolute',
            opacity: .3,

          }}
          />
          {
            this.state.lock == true ? (
              <TouchableOpacity delayLongPress={1000} onLongPress={this._lockOff} style={{ justifyContent: 'center', alignItems: 'center', left: width * .02, position: 'absolute' }}>
                <Unlock name={'unlock'} size={width * .05} color='#0ae916' />
                <Text style={style.alarmText}>Unlocked</Text>
              </TouchableOpacity>
            ) : (
                <TouchableOpacity delayLongPress={1000} onLongPress={this._lockOn} style={{ justifyContent: 'center', alignItems: 'center', left: width * .03, position: 'absolute' }}>
                  <Lock name={'lock'} size={width * .05} color='red' />
                  <Text style={style.alarmText}>Locked</Text>
                </TouchableOpacity>
              )
          }
          <View style={{ borderWidth: 1, borderColor: '#6b6a6a59', height: height * .12, position: 'absolute', left: width * .11 }}></View>
          <View style={{ marginHorizontal: width * .03 }}></View>

          {/* <Graph /> */}
          <View style={style.iconAndText}>
            <Notification name="notifications-active" size={width * .05} color={this.state.powCondi ? '#0ae916' : 'red'} style={{ marginHorizontal: width * .01 }} />
            <Text style={style.alarmText}>Power Failure</Text>
          </View>
          <View style={style.iconAndText}>
            <Notification name="notifications-active" size={width * .05} color={this.state.senCondi ? '#0ae916' : 'red'} style={{ marginHorizontal: width * .01 }} />
            <Text style={style.alarmText}>Sensor Failure</Text>
          </View>
          <View style={style.iconAndText}>
            <Notification name="notifications-active" size={width * .05} color={this.state.fanCondi ? '#0ae916' : 'red'} style={{ marginHorizontal: width * .01 }} />
            <Text style={style.alarmText}>Fan Failure</Text>
          </View>
          <View style={style.iconAndText}>
            <Notification name="notifications-active" size={width * .05} color={this.state.sysCondi ? '#0ae916' : 'red'} style={{ marginHorizontal: width * .01 }} />
            <Text style={style.alarmText}>System Failure</Text>
          </View>
          <View style={{ borderWidth: 1, borderColor: '#6b6a6a59', height: height * .12, position: 'absolute', right: width * .1 }}></View>
          <LeftSlider
            selectWeight={this.handleWeight}
            selectTemp={this.handleTemp}
            airHigTemp={this.handleAirHigher}
            airLoweTemp={this.handleAirLow}
            skinHighTemp={this.handleSkinHigher}
            skinLowTemp={this.handleSkinLower}
            spo2Uper={this.handleSpo2Uper}
            spo2Lower={this.handleSpo2Lower}
            hrUper={this.handleHrUper}
            hrLower={this.handleHrLower}
            switchAir={this.handleSwitchAir}
            switchSkin={this.handleSwitchSkin}
            switchSpo2={this.handleSwitchSpo2}
            switchWeight={this.handleSwitchWeight}
            switchHumidity={this.handleSwitchHumidity}
            switchOxygen={this.handleSwitchOxygen}
            locker={this.state.lock}
          />
        </View>

        <View style={style.inerContainer1}>
          {/* Air Temperature */}
          {
            !this.state.switchAir ? (
              null
            ) : (
                <View>
                  <Text style={style.airHeading}>
                    Air Temperature
                  </Text>
                  <AirTemp
                    value={this.state.tempSign}
                    locker={this.state.lock}
                    airHigherTemp={this.state.higherAirValue}
                    airLowerTemp={this.state.lowAirValue}
                  />
                </View>
              )
          }

          {/* Skin Temperature */}
          {
            !this.state.switchSkin ? (
              null
            ) : (
                <View>
                  <Text style={style.tempHeading}>
                    Skin Temperature
                  </Text>
                  <SkinTemp
                    value={this.state.tempSign}
                    locker={this.state.lock}
                    skinHighTemp={this.state.skinHigherTemp}
                    skinLowerTemp={this.state.skinLowTemp}
                  />
                </View>
              )
          }

          {/* Spo2 / Hr */}
          {
            !this.state.switchSpo2 ? (
              null
            ) : (
                <View>
                  <Text style={style.humHeading}>
                    SP02/HR
                  </Text>
                  <SPO2
                    locker={this.state.lock}
                    spo2Upper={this.state.spo2Uper}
                    spo2Lower={this.state.spo2Lower}
                    hrUpper={this.state.hrUper}
                    hrLower={this.state.hrLower}
                  />
                </View>
              )
          }

          {/* Weight */}
          {
            !this.state.switchWeight ? (
              null
            ) : (
                <View >
                  <Text style={style.weigHeading}>
                    BabyWeight
                  </Text>
                  <Weight value={this.state.weightSign} locker={this.state.lock} />
                </View>
              )
          }

          {/* Humidity */}
          {
            !this.state.switchHumidity ? (
              null
            ) : (
                <View>
                  <Text style={style.Spo2Heading}>
                    Humidity
                  </Text>
                  <Humidity locker={this.state.lock} />
                </View>
              )
          }

          {/* Oxygen */}
          {
            !this.state.switchOxygen ? (
              null
            ) : (
                <View>
                  <Text style={style.oxygenHeading}>
                    Oxygen Level
                  </Text>
                  <Oxygen locker={this.state.lock} />
                </View>
              )
          }


        </View >

      </View >
    );
  }
}
