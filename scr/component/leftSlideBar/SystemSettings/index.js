import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ToastAndroid,
  LayoutAnimation,
  FlatList,
} from 'react-native';
import style from './style';
import Modal from 'react-native-modal';
import SwitchToggle from 'react-native-switch-toggle';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import User from 'react-native-vector-icons/EvilIcons';
import SysSettings from 'react-native-vector-icons/Octicons';
import SelectMultiple from 'react-native-select-multiple';
import {Fonts} from '../../../utils/fonts';
import Error from 'react-native-vector-icons/MaterialIcons';
import Cali from 'react-native-vector-icons/MaterialCommunityIcons';

// import {TextInput} from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';
const {height, width} = Dimensions.get('window');
const Parameter = [
  {label: 'Air Temperature', value: '1'},
  {label: 'Skin Temperature', value: '2'},
  {label: 'Spo2/Hr', value: '3'},
  {label: 'Baby Weight', value: '4'},
  {label: 'Humidy', value: '5'},
  {label: 'Oxygen Level', value: '6'},
];
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
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrorView: false,
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

  _goBack = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({showErrorView: false});
  };

  renderErrorCodes = ({item, index}) => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#23212016',
            borderRadius: width * 0.035,
            padding: 10,
            paddingHorizontal: 15,
            margin: 10,
          }}>
          <Text style={style.switchText}>{item.code}</Text>
        </View>
      </View>
    );
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
          onLongPress={() => this.toggleModal(this.props.isGuest)}
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
                          {!this.state.showErrorView && (
                            <>
                              <TouchableOpacity
                                onPress={() => {
                                  LayoutAnimation.configureNext(
                                    LayoutAnimation.Presets.easeInEaseOut,
                                  );
                                  this.setState({showErrorView: true});
                                }}>
                                <View style={style.switchView}>
                                  <Text style={style.switchText}>
                                    Error Codes
                                  </Text>
                                  <Error
                                    name={'error'}
                                    size={width * 0.04}
                                    color="#f68d80fd"
                                  />
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => console.log('Pressed')}>
                                <View style={style.switchView}>
                                  <Text style={style.switchText}>
                                    Sensor Data
                                  </Text>
                                  <Cali
                                    name={'radar'}
                                    size={width * 0.04}
                                    color="#f68d80fd"
                                  />
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => console.log('Pressed')}>
                                <View style={style.switchView}>
                                  <Text style={style.switchText}>
                                    Calibration Mode
                                  </Text>
                                  <Cali
                                    name={'speedometer-medium'}
                                    size={width * 0.04}
                                    color="#f68d80fd"
                                  />
                                </View>
                              </TouchableOpacity>
                            </>
                          )}
                          {this.state.showErrorView && (
                            <View
                              style={{
                                width: '100%',
                                height: '100%',
                              }}>
                              <View
                                style={{width: '100%', alignItems: 'center'}}>
                                <Text style={style.subheader}>Error Codes</Text>
                              </View>
                              <FlatList
                                data={errorCodes}
                                style={{flex: 1}}
                                renderItem={this.renderErrorCodes}
                                numColumns={3}
                              />
                            </View>
                          )}
                        </View>
                      </View>
                      <View style={style.boxFooter}>
                        <View style={style.boxFooterInner}>
                          <TouchableOpacity
                            style={style.headerbotton}
                            onPress={
                              this.state.showErrorView
                                ? this._goBack
                                : this._logOut
                            }>
                            <Text style={style.bottonText}>
                              {this.state.showErrorView ? 'Go Back' : 'Log Out'}
                            </Text>
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
