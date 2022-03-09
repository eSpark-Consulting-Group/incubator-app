import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ToastAndroid,
  LayoutAnimation,
  FlatList,
  Keyboard,
} from 'react-native';
import style from './style';
import Modal from 'react-native-modal';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import SysSettings from 'react-native-vector-icons/Octicons';
import Error from 'react-native-vector-icons/MaterialIcons';
import Cali from 'react-native-vector-icons/MaterialCommunityIcons';
import NumericInput from 'react-native-numeric-input';
import clc from 'cli-color';

import Spinner from 'react-native-loading-spinner-overlay';
const {height, width} = Dimensions.get('window');

const errorCodes = [
  {code: '4001', name: 'Rotation Sensor'},
  {code: '4002', name: 'Air Flow Sensor'},
  {code: '4003', name: 'Blower Faulty'},
  {code: '4004', name: 'SSR Faulty'},
  {code: '4005', name: 'Main Power Failure'},
  {code: '4006', name: 'Heater Faulty'},
  {code: '4007', name: 'Low Humidity'},
  {code: '4008', name: 'Water Empty'},
  {code: '4009', name: 'Water Overload'},
];

const sensorsData = [
  {name: 'Air', gs: '5 Ohm', bs: '5 Ohm'},
  {name: 'Skin', gs: '10 Ohm', bs: '10 Ohm'},
  {name: 'Heater', gs: '15 Ohm', bs: '16 Ohm'},
  {name: 'Fan', gs: '20 Ohm', bs: '21 Ohm'},
];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrorName: false,
      name: '',
      code: '',
      showErrorView: false,
      showCaliView: false,
      showSenseView: false,
      isModalVisible: false,
      LockorUnlo: false,
      toggleWeight: false,
      password: '',
      turnOnparameter: true, //? Change it later to false
      selectedParameter: [],
      valueParameter: [],
      airTemp: this.props.airFlag,
      skinTemp: this.props.skinFlag,
      spo2hr: this.props.spo2Flag,
      babyWeight: this.props.weightFlag,
      humidity: this.props.humidityFlag,
      oxygen: this.props.oxygenFlag,
      loading: false,
      airVal: 0,
      skinVal: 0,
      oxyVal: 0,
      calibrateAir: 0,
      calibrateSkin: 0,
      calibrateOxy: 0,
    };
    this.airCount = 0;
    this.airDone = 0;

    this.skinCount = 0;
    this.skinDone = 0;

    this.oxyCount = 0;
    this.oxyDone = 0;
  }

  componentDidMount() {
    Keyboard.addListener('keyboardDidHide', () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    });
  }
  componentWillUnmount() {
    Keyboard.removeAllListeners('keyboardDidHide');
  }

  onSelectionsChange = selectedParameter => {
    this.setState({selectedParameter});
  };
  _logOut = () => {
    this.setState({loading: true});
    setTimeout(() => {
      this.setState(
        {
          turnOnparameter: false,
          isModalVisible: !this.state.isModalVisible,
          showCaliView: false,
          showErrorView: false,
          showErrorName: false,
          showSenseView: false,
        },
        () => {
          this.setState({loading: false});
        },
      );
    }, 800);
  };
  toggleModal = isGuest => {
    if (isGuest) {
      ToastAndroid.show('Guest does not have Access', ToastAndroid.SHORT);
    } else {
      this.setState({isModalVisible: !this.state.isModalVisible});
    }
  };

  _DoneCalibration = () => {
    this.setState({loading: true});
    setTimeout(() => {
      this.setState(
        {
          showCaliView: false,
          calibrateAir: this.airDone ?? 0,
          calibrateSkin: this.skinDone ?? 0,
          calibrateOxy: this.oxyDone ?? 0,
        },
        () => {
          console.log(
            clc.redBright('kia hai air calibrate', this.state.calibrateAir),
          );
          console.log(
            clc.redBright('kia hai skin calibrate', this.state.calibrateSkin),
          );
          console.log(
            clc.redBright('kia hai oxygen calibrate', this.state.calibrateOxy),
          );
          this.props.handleAirCalibrate(this.state.calibrateAir);
          this.props.handleSkinCalibrate(this.state.calibrateSkin);
          this.props.handleOxyCalibrate(this.state.calibrateOxy);
          this.setState({loading: false});
        },
      );
    }, 800);
  };

  _Signin = () => {
    if (this.state.password == this.props.passwordValue) {
      this.setState({turnOnparameter: true, password: null});
    } else if (this.state.password == '') {
      alert('Empty Password');
    } else if (this.state.password != this.props.passwordValue) {
      this.setState({password: ''});
      Alert.alert('Warning', 'Incorrect Password');
    }
  };

  _goBack = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({showErrorView: false});
  };

  renderErrorCodes = ({item, index}) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: width * 0.45,
            backgroundColor: '#23212016',
            borderRadius: width * 0.035,
            padding: 10,
            paddingHorizontal: 15,
            margin: 10,
          }}>
          <Text
            style={[
              style.switchText,
              {
                width: height * 0.25,
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: width * 0.015,
              },
            ]}>
            {item.code}
          </Text>
          <Text
            style={[
              style.switchText,
              {
                width: height * 0.25,
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: width * 0.015,
              },
            ]}>
            {item.name}
          </Text>
        </View>
      </View>
    );
  };

  renderSensorsList = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: width * 0.45,
          padding: 10,
          paddingHorizontal: 15,
          margin: 10,
          backgroundColor: '#23212016',
          borderRadius: width * 0.035,
        }}>
        <Text
          style={[
            style.switchText,
            {
              width: width * 0.06,
              fontSize: width * 0.015,
              textAlign: 'center',
            },
          ]}>
          {item.name}
        </Text>
        <Text
          style={[
            style.switchText,
            {
              width: width * 0.06,
              fontSize: width * 0.015,
              right: 10,
              textAlign: 'center',
            },
          ]}>
          {item.gs}
        </Text>
        <Text
          style={[
            style.switchText,
            {
              width: width * 0.06,
              fontSize: width * 0.015,
              textAlign: 'center',
            },
          ]}>
          {item.bs}
        </Text>
      </View>
    );
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('kia hai alarm FlagXXXXX--------->>>', this.props.alarmFlag);
    if (this.props !== nextProps) {
      if (this.props.alarmFlag) {
        this.setState({
          isModalVisible: false,
        });
      }
      console.log(
        '🚀 ~ file: index.js ~ line 278 ~ App ~ UNSAFE_componentWillReceiveProps ~ nextProps.airTemp',
        nextProps.airTemp,
      );
      this.airCount = this.props.airTemp;
      this.setState({airVal: this.props.airTemp});

      console.log(
        '🚀 ~ file: index.js ~ line 283 ~ App ~ UNSAFE_componentWillReceiveProps ~ this.props.skinTemp',
        this.props.skinTemp,
      );
      this.skinCount = this.props.skinTemp;
      this.setState({skinVal: this.props.skinTemp});

      console.log(
        '🚀 ~ file: index.js ~ line 288 ~ App ~ UNSAFE_componentWillReceiveProps ~ this.props.oxy',
        this.props.oxy,
      );
      this.oxyCount = this.props.oxy;
      this.setState({oxyVal: this.props.oxy});
    }
  }

  render() {
    let heading1;
    !this.state.turnOnparameter
      ? (heading1 = 'Alert')
      : (heading1 = 'System Settings');
    let modalHeight;
    !this.state.turnOnparameter
      ? (modalHeight = height)
      : (modalHeight = height);
    let modalInnerHeight;
    !this.state.turnOnparameter
      ? (modalInnerHeight = height * 0.47)
      : (modalInnerHeight = height * 0.65);
    return (
      <View>
        {/* Component */}
        <TouchableOpacity
          style={style.mainList}
          // onLongPress={() => this.toggleModal(this.props.isGuest)}
          onPress={() => this.toggleModal(this.props.isGuest)}
          delayLongPress={3000}>
          <Text style={style.listText}>System Settings</Text>
          <SysSettings name={'settings'} size={height * 0.04} />
        </TouchableOpacity>
        {/* Modal */}
        <Modal
          animationIn="slideInDown"
          animationOut="slideOutUp"
          statusBarTranslucent
          isVisible={this.state.isModalVisible}
          // isVisible={true}
          style={{
            maxHeight: modalHeight,
          }}>
          <KeyboardAvoidingView
            style={{
              height: height,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            keyboardVerticalOffset={-100}
            behavior="position">
            <View style={style.modalInner}>
              <View
                style={{
                  width: width * 0.47,
                  height: modalInnerHeight,
                }}>
                <View style={style.boxInner}>
                  {/* Box Header */}
                  <View style={style.boxHeader}>
                    <View style={style.boxHeaderInner}>
                      {heading1 == 'System Settings' && (
                        <TouchableOpacity
                          disabled={
                            this.state.showErrorView ||
                            this.state.showCaliView ||
                            this.state.showSenseView
                              ? false
                              : true
                          }
                          onPress={() =>
                            heading1 == 'System Settings'
                              ? this.state.showSenseView
                                ? (this.setState({
                                    showSenseView: false,
                                  }),
                                  LayoutAnimation.configureNext(
                                    LayoutAnimation.Presets.easeInEaseOut,
                                  ))
                                : this.state.showErrorView
                                ? (this.setState({
                                    showErrorView: false,
                                  }),
                                  LayoutAnimation.configureNext(
                                    LayoutAnimation.Presets.easeInEaseOut,
                                  ))
                                : this.state.showCaliView
                                ? (this.setState({
                                    showCaliView: false,
                                    // airVal: 0,
                                    // skinVal: 0,
                                    // oxyVal: 0,
                                  }),
                                  LayoutAnimation.configureNext(
                                    LayoutAnimation.Presets.easeInEaseOut,
                                  ))
                                : (this.setState({turnOnparameter: false}),
                                  this.toggleModal(this.props.isGuest))
                              : this.toggleModal(this.props.isGuest)
                          }
                          style={{position: 'absolute', left: width * 0.02}}>
                          {this.state.showErrorView && (
                            <Back
                              name={'keyboard-backspace'}
                              size={width * 0.04}
                              color="#fff"
                            />
                          )}
                          {this.state.showCaliView && (
                            <Back
                              name={'keyboard-backspace'}
                              size={width * 0.04}
                              color="#fff"
                            />
                          )}
                          {this.state.showSenseView && (
                            <Back
                              name={'keyboard-backspace'}
                              size={width * 0.04}
                              color="#fff"
                            />
                          )}
                        </TouchableOpacity>
                      )}
                      {heading1 == 'Alert' && (
                        <TouchableOpacity
                          onPress={() => this.toggleModal(this.props.isGuest)}
                          style={{position: 'absolute', left: width * 0.02}}>
                          <Back
                            name={'keyboard-backspace'}
                            size={width * 0.04}
                            color="#fff"
                          />
                        </TouchableOpacity>
                      )}
                      <Text style={style.headerHeading}>{heading1}</Text>
                      {heading1 == 'System Settings' && (
                        <TouchableOpacity
                          onPress={() =>
                            heading1 == 'System Settings'
                              ? this._logOut()
                              : this.toggleModal(this.props.isGuest)
                          }
                          style={{position: 'absolute', right: width * 0.02}}>
                          <Back
                            name={'close'}
                            size={width * 0.04}
                            color="#fff"
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                  {/* Box Body */}
                  {!this.state.turnOnparameter ? (
                    <View>
                      <View style={style.boxBodyAlert}>
                        <View style={style.boxBodyInner}>
                          <Text style={style.currentHeading}>Password</Text>
                          <View style={style.passInputValue}>
                            <TextInput
                              value={this.state.password}
                              placeholder="Your Password"
                              secureTextEntry={true}
                              onFocus={() => {
                                LayoutAnimation.configureNext(
                                  LayoutAnimation.Presets.linear,
                                );
                              }}
                              onBlur={() =>
                                LayoutAnimation.configureNext(
                                  LayoutAnimation.Presets.linear,
                                )
                              }
                              style={style.currentInput}
                              onChangeText={password =>
                                this.setState({password})
                              }
                            />
                          </View>
                        </View>
                      </View>
                      <View style={style.boxFooter}>
                        <View style={style.boxFooterInner}>
                          <TouchableOpacity
                            style={style.headerbotton}
                            onPress={this._Signin}>
                            <Text style={style.bottonText}>Login</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  ) : (
                    <View>
                      <Spinner
                        visible={this.state.loading}
                        textContent={'Loading...'}
                        textStyle={{color: 'red'}}
                        color="red"
                      />
                      <View style={style.boxBody}>
                        <View style={style.boxBodyInner}>
                          {!this.state.showErrorView &&
                            !this.state.showCaliView &&
                            !this.state.showSenseView && (
                              <>
                                <View
                                  style={{
                                    width: '100%',
                                    height: '20%',
                                    alignItems: 'center',
                                  }}>
                                  <Text style={style.subheader}>
                                    Settings Options
                                  </Text>
                                </View>
                                <View
                                  style={{
                                    height: '80%',
                                  }}>
                                  <TouchableOpacity
                                    onPress={() => {
                                      LayoutAnimation.configureNext(
                                        LayoutAnimation.Presets.easeInEaseOut,
                                      );
                                      this.setState({showErrorView: true});
                                    }}>
                                    <View style={style.listView}>
                                      <Text style={style.listText}>
                                        Error Codes
                                      </Text>
                                      <Error
                                        name={'error'}
                                        size={width * 0.02}
                                        color="#000000cf"
                                      />
                                    </View>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    onPress={() => {
                                      LayoutAnimation.configureNext(
                                        LayoutAnimation.Presets.easeInEaseOut,
                                      );
                                      this.setState({showSenseView: true});
                                    }}>
                                    <View style={style.listView}>
                                      <Text style={style.listText}>
                                        Sensor Data
                                      </Text>
                                      <Cali
                                        name={'radar'}
                                        size={width * 0.02}
                                        color="#000000cf"
                                      />
                                    </View>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    onPress={() => {
                                      LayoutAnimation.configureNext(
                                        LayoutAnimation.Presets.easeInEaseOut,
                                      );
                                      this.setState({
                                        showCaliView: true,
                                        airVal: this.state.calibrateAir,
                                        skinVal: this.state.calibrateSkin,
                                        oxyVal: this.state.calibrateOxy,
                                      });
                                    }}>
                                    <View style={style.listView}>
                                      <Text style={style.listText}>
                                        Calibration Mode
                                      </Text>
                                      <Cali
                                        name={'speedometer-medium'}
                                        size={width * 0.02}
                                        color="#000000cf"
                                      />
                                    </View>
                                  </TouchableOpacity>
                                </View>
                              </>
                            )}
                          {this.state.showErrorView && (
                            <View
                              style={{
                                width: '100%',
                                height: '100%',
                              }}>
                              <View
                                style={{
                                  width: '100%',
                                  alignItems: 'center',
                                }}>
                                <Text style={style.subheader}>Error Codes</Text>
                              </View>
                              <View
                                style={{
                                  flex: 1,
                                  justifyContent: 'center',
                                }}>
                                <View
                                  style={{
                                    flex: 1,
                                  }}>
                                  <View style={style.listcontainer}>
                                    <Text style={style.switchText}>Code</Text>
                                    <Text style={style.switchText}>Name</Text>
                                  </View>
                                  <FlatList
                                    data={errorCodes}
                                    renderItem={this.renderErrorCodes}
                                  />
                                </View>
                              </View>
                            </View>
                          )}
                          {this.state.showSenseView && (
                            <>
                              <View
                                style={{width: '100%', alignItems: 'center'}}>
                                <Text style={style.subheader}>Sensor Data</Text>
                              </View>
                              <View
                                style={{
                                  flex: 1,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <View
                                  style={[
                                    style.listcontainer,
                                    {justifyContent: 'space-between'},
                                  ]}>
                                  <Text style={style.switchText}>Name</Text>
                                  <Text style={style.switchText}>
                                    Good State
                                  </Text>
                                  <Text style={style.switchText}>
                                    Bad State
                                  </Text>
                                </View>
                                <FlatList
                                  data={sensorsData}
                                  renderItem={this.renderSensorsList}
                                />
                              </View>
                            </>
                          )}
                          {this.state.showCaliView && (
                            <>
                              <View
                                style={{width: '100%', alignItems: 'center'}}>
                                <Text style={style.subheader}>
                                  Calibration Mode
                                </Text>
                              </View>
                              <View
                                style={{
                                  flex: 1,
                                  justifyContent: 'space-around',
                                  alignItems: 'center',
                                }}>
                                <View style={{alignItems: 'center'}}>
                                  <Text
                                    style={[
                                      style.currentHeading,
                                      {fontSize: width * 0.02},
                                    ]}>
                                    Air Temperature
                                  </Text>
                                  <NumericInput
                                    onChange={airVal => {
                                      this.setState({airVal}, () => {
                                        let oneMore = airVal - this.airCount;
                                        console.log('~ airCountxxx', oneMore);
                                        this.airDone = oneMore;
                                        console.log('~ ~~~~~~~', this.airDone);
                                      });
                                    }}
                                    totalWidth={height * 0.35}
                                    totalHeight={height * 0.05}
                                    initValue={parseInt(this.state.airVal)}
                                    rounded
                                  />
                                </View>
                                <View style={{alignItems: 'center'}}>
                                  <Text
                                    style={[
                                      style.currentHeading,
                                      {fontSize: width * 0.02},
                                    ]}>
                                    Skin Temperature
                                  </Text>
                                  <NumericInput
                                    onChange={skinVal => {
                                      this.setState({skinVal}, () => {
                                        let oneMore = skinVal - this.skinCount;
                                        console.log('~ skinCountxxx', oneMore);
                                        this.skinDone = oneMore;
                                        console.log('~ ~~~~~~~', this.skinDone);
                                      });
                                    }}
                                    totalWidth={height * 0.35}
                                    totalHeight={height * 0.05}
                                    initValue={parseInt(this.state.skinVal)}
                                    rounded
                                  />
                                </View>
                                <View style={{alignItems: 'center'}}>
                                  <Text
                                    style={[
                                      style.currentHeading,
                                      {fontSize: width * 0.02},
                                    ]}>
                                    Oxygen
                                  </Text>
                                  <NumericInput
                                    onChange={oxyVal => {
                                      this.setState({oxyVal}, () => {
                                        let oneMore = oxyVal - this.oxyCount;
                                        console.log('~ oxyCountxxx', oneMore);
                                        this.oxyDone = oneMore;
                                        console.log('~ ~~~~~~~', this.oxyDone);
                                      });
                                    }}
                                    totalWidth={height * 0.35}
                                    totalHeight={height * 0.05}
                                    initValue={parseInt(this.state.oxyVal)}
                                    rounded
                                  />
                                </View>
                              </View>
                              <View style={style.boxFooter}>
                                <View style={style.boxFooterInner}>
                                  <TouchableOpacity
                                    onPress={this._DoneCalibration}
                                    style={style.headerbotton}>
                                    <Text style={style.bottonText}>Done</Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </>
                          )}
                        </View>
                      </View>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
      </View>
    );
  }
}
