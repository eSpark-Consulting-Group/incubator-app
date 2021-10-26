import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import style from './style';
import Modal from 'react-native-modal';
import SwitchToggle from 'react-native-switch-toggle';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import User from 'react-native-vector-icons/EvilIcons';
// import SysSettings from 'react-native-vector-icons/Octicons';
import SelectMultiple from 'react-native-select-multiple';
import {Fonts} from '../../../utils/fonts';

import {TextInput} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');
const Parameter = [
  {label: 'Air Temperature', value: '1'},
  {label: 'Skin Temperature', value: '2'},
  {label: 'Spo2/Hr', value: '3'},
  {label: 'Baby Weight', value: '4'},
  {label: 'Humidy', value: '5'},
  {label: 'Oxygen Level', value: '6'},
];
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
      airTemp: true,
      skinTemp: true,
      spo2hr: true,
      babyWeight: true,
      humidity: true,
      oxygen: true,
    };
  }
  onSelectionsChange = (selectedParameter) => {
    // selectedFruits is array of { label, value }

    this.setState({selectedParameter});
  };
  _logOut = () => {
    this.setState(
      {turnOnparameter: false, isModalVisible: !this.state.isModalVisible},
      () => {
        this.props.switchAir(this.state.airTemp),
          this.props.switchSkin(this.state.skinTemp),
          this.props.switchSpo2(this.state.spo2hr),
          this.props.switchWeight(this.state.babyWeight),
          this.props.switchHumidity(this.state.humidity),
          this.props.switchOxygen(this.state.oxygen);
      },
    );
  };
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  _Signin = () => {
    if (this.state.password == '12345') {
      this.setState({turnOnparameter: true, password: null});
    } else if (this.state.password == '') {
      alert('Empty Password');
    } else if (this.state.password != '12345') {
      Alert.alert('Warning', 'Incorrect Password');
    }
  };

  render() {
    let heading1;
    !this.state.turnOnparameter
      ? (heading1 = 'Alert')
      : (heading1 = 'Parameter');
    let modalHeight;
    !this.state.turnOnparameter
      ? (modalHeight = height * 0.5)
      : (modalHeight = height * 0.68);
    let modalInnerHeight;
    !this.state.turnOnparameter
      ? (modalInnerHeight = height * 0.47)
      : (modalInnerHeight = height * 0.65);
    return (
      <View>
        {/* Component */}
        <TouchableOpacity style={style.mainList} onPress={this.toggleModal}>
          <Text style={style.listText}>Parameters</Text>
          <User name={'user'} size={width * 0.025} />
        </TouchableOpacity>
        {/* Modal */}
        <Modal
          animationIn="slideInDown"
          animationOut="slideOutUp"
          isVisible={this.state.isModalVisible}
          style={{
            elevation: width * 0.005,
            borderBottomLeftRadius: width * 0.025,
            borderBottomRightRadius: width * 0.025,
            backgroundColor: 'white',
            maxHeight: modalHeight,
            maxWidth: width * 0.5,
            top: height * -0.082,
            left: width * 0.2,
          }}>
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
                      onPress={this.toggleModal}
                      style={{position: 'absolute', left: width * 0.02}}>
                      <Back
                        name={'keyboard-backspace'}
                        size={width * 0.04}
                        color="white"
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
                            placeholder="Your Password"
                            secureTextEntry={true}
                            style={style.currentInput}
                            onChangeText={(password) =>
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
                    <View style={style.boxBody}>
                      <View style={style.boxBodyInner}>
                        <View style={style.switchView}>
                          <Text style={style.switchText}>Air Temperature </Text>
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
                          <Text style={style.switchText}>SPO2/HR </Text>
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
                          <Text style={style.switchText}>Baby Weight </Text>
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
                          <Text style={style.switchText}>Humidity </Text>
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
                          <Text style={style.switchText}>Oxygen </Text>
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
        </Modal>
      </View>
    );
  }
}
