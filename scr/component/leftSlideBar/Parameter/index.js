import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  LayoutAnimation,
  Alert,
  ToastAndroid,
  Keyboard,
} from 'react-native';
import style from './style';
import Modal from 'react-native-modal';
import SwitchToggle from 'react-native-switch-toggle';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import User from 'react-native-vector-icons/EvilIcons';

import Spinner from 'react-native-loading-spinner-overlay';
const {height, width} = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      LockorUnlo: false,
      toggleWeight: false,
      password: '',
      turnOnparameter: false,
      selectedParameter: [],
      valueParameter: [],
      airTemp: this.props.airFlag,
      skinTemp: this.props.skinFlag,
      spo2hr: this.props.spo2Flag,
      babyWeight: this.props.weightFlag,
      humidity: this.props.humidityFlag,
      oxygen: this.props.oxygenFlag,
      loading: false,
    };
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
        {turnOnparameter: false, isModalVisible: !this.state.isModalVisible},
        () => {
          this.props.switchAir(this.state.airTemp);
          this.props.switchSkin(this.state.skinTemp);
          this.props.switchSpo2(this.state.spo2hr);
          this.props.switchWeight(this.state.babyWeight);
          this.props.switchHumidity(this.state.humidity);
          this.props.switchOxygen(this.state.oxygen);
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

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps.alarmFlag) {
      if (this.props.alarmFlag) {
        this.setState({
          isModalVisible: false,
        });
      }
    }
  }

  render() {
    let heading1;
    !this.state.turnOnparameter
      ? (heading1 = 'Alert')
      : (heading1 = 'Parameter');
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
          onPress={() => this.toggleModal(this.props.isGuest)}>
          <Text style={style.listText}>Parameters</Text>
          <User name={'user'} size={height * 0.04} />
        </TouchableOpacity>
        {/* Modal */}
        <Modal
          animationIn="slideInDown"
          animationOut="slideOutUp"
          statusBarTranslucent
          isVisible={this.state.isModalVisible}
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
                      <TouchableOpacity
                        onPress={() =>
                          heading1 == 'Parameter'
                            ? (this.setState({turnOnparameter: false}),
                              this.toggleModal(this.props.isGuest))
                            : this.toggleModal(this.props.isGuest)
                        }
                        style={{position: 'absolute', left: width * 0.02}}>
                        <Back
                          name={'keyboard-backspace'}
                          size={width * 0.04}
                          color="#fff"
                        />
                      </TouchableOpacity>
                      <Text style={style.headerHeading}>{heading1}</Text>
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
                              style={style.currentInput}
                              onFocus={() =>
                                LayoutAnimation.configureNext(
                                  LayoutAnimation.Presets.linear,
                                )
                              }
                              onBlur={() =>
                                LayoutAnimation.configureNext(
                                  LayoutAnimation.Presets.linear,
                                )
                              }
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
                          <View style={style.switchView}>
                            <Text style={style.switchText}>
                              Air Temperature
                            </Text>
                            <SwitchToggle
                              switchOn={this.state.airTemp}
                              onPress={() =>
                                this.setState({airTemp: !this.state.airTemp})
                              }
                              useNativeDriver={false}
                              backgroundColorOn={'#555555'}
                              circleColorOn={'#f68d80fd'}
                              backgroundColorOff={'#555555'}
                              circleColorOff={'white'}
                              containerStyle={style.toggleContainer}
                              circleStyle={style.toggleCircle}
                            />
                          </View>
                          <View
                            style={{
                              borderWidth: 1,
                              borderColor: '#6b6a6a59',
                              width: width * 0.47,
                              marginVertical: height * 0.01,
                            }}
                          />
                          <View style={style.switchView}>
                            <Text style={style.switchText}>
                              Skin Temperature{' '}
                            </Text>
                            <SwitchToggle
                              switchOn={this.state.skinTemp}
                              onPress={() =>
                                this.setState({skinTemp: !this.state.skinTemp})
                              }
                              useNativeDriver={false}
                              backgroundColorOn={'#555555'}
                              circleColorOn={'#f68d80fd'}
                              backgroundColorOff={'#555555'}
                              circleColorOff={'white'}
                              containerStyle={style.toggleContainer}
                              circleStyle={style.toggleCircle}
                            />
                          </View>
                          <View
                            style={{
                              borderWidth: 1,
                              borderColor: '#6b6a6a59',
                              width: width * 0.47,
                              marginVertical: height * 0.01,
                            }}
                          />
                          <View style={style.switchView}>
                            <Text style={style.switchText}>SPO2/HR</Text>
                            <SwitchToggle
                              switchOn={this.state.spo2hr}
                              onPress={() =>
                                this.setState({spo2hr: !this.state.spo2hr})
                              }
                              useNativeDriver={false}
                              backgroundColorOn={'#555555'}
                              circleColorOn={'#f68d80fd'}
                              backgroundColorOff={'#555555'}
                              circleColorOff={'white'}
                              containerStyle={style.toggleContainer}
                              circleStyle={style.toggleCircle}
                            />
                          </View>
                          <View
                            style={{
                              borderWidth: 1,
                              borderColor: '#6b6a6a59',
                              width: width * 0.47,
                              marginVertical: height * 0.01,
                            }}
                          />
                          <View style={style.switchView}>
                            <Text style={style.switchText}>Baby Weight</Text>
                            <SwitchToggle
                              switchOn={this.state.babyWeight}
                              onPress={() =>
                                this.setState({
                                  babyWeight: !this.state.babyWeight,
                                })
                              }
                              useNativeDriver={false}
                              backgroundColorOn={'#555555'}
                              circleColorOn={'#f68d80fd'}
                              backgroundColorOff={'#555555'}
                              circleColorOff={'white'}
                              containerStyle={style.toggleContainer}
                              circleStyle={style.toggleCircle}
                            />
                          </View>
                          <View
                            style={{
                              borderWidth: 1,
                              borderColor: '#6b6a6a59',
                              width: width * 0.47,
                              marginVertical: height * 0.01,
                            }}
                          />
                          <View style={style.switchView}>
                            <Text style={style.switchText}>Humidity</Text>
                            <SwitchToggle
                              switchOn={this.state.humidity}
                              onPress={() =>
                                this.setState({humidity: !this.state.humidity})
                              }
                              useNativeDriver={false}
                              backgroundColorOn={'#555555'}
                              circleColorOn={'#f68d80fd'}
                              backgroundColorOff={'#555555'}
                              circleColorOff={'white'}
                              containerStyle={style.toggleContainer}
                              circleStyle={style.toggleCircle}
                            />
                          </View>
                          <View
                            style={{
                              borderWidth: 1,
                              borderColor: '#6b6a6a59',
                              width: width * 0.47,
                              marginVertical: height * 0.01,
                            }}
                          />
                          <View style={style.switchView}>
                            <Text style={style.switchText}>Oxygen</Text>
                            <SwitchToggle
                              switchOn={this.state.oxygen}
                              onPress={() =>
                                this.setState({oxygen: !this.state.oxygen})
                              }
                              useNativeDriver={false}
                              backgroundColorOn={'#555555'}
                              circleColorOn={'#f68d80fd'}
                              backgroundColorOff={'#555555'}
                              circleColorOff={'white'}
                              containerStyle={style.toggleContainer}
                              circleStyle={style.toggleCircle}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={style.boxFooter}>
                        <View style={style.boxFooterInner}>
                          <TouchableOpacity
                            style={style.headerbotton}
                            onPress={this._logOut}>
                            <Text style={style.bottonText}>Log Out</Text>
                          </TouchableOpacity>
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
