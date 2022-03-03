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
  ToastAndroid,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import style from './style';
import Modal from 'react-native-modal';
import SwitchToggle from 'react-native-switch-toggle';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-loading-spinner-overlay';
// import AirTemp from './airTemp/index';
// import SkinTemp from './skinTemp/index';
// import Spo2 from './spo2/index';
// import Hr from './hr/index';
import {RadioButton} from 'react-native-paper';

import RNFS from 'react-native-fs';
import XLSX from 'xlsx';

// const [checked, setChecked] = React.useState('first');

// import SysSettings from 'react-native-vector-icons/Octicons';
import {Fonts} from '../../../utils/fonts';
// import {TextInput, ScrollView} from 'react-native-gesture-handler';

var clc = require('cli-color');

const {height, width} = Dimensions.get('window');
let d = new Date();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bottoms: false,
      isModalVisible: false,
      LockorUnlo: false,
      toggleWeight: false,
      toggleTemp: false,
      higherAirValue: null,
      lowerAirValue: 22.1,
      skinHighTemp: 32.1,
      skinLowTemp: 34.1,
      spo2Upper: 99,
      spo2Lower: 91,
      hrUpper: 190,
      hrLower: 70,
      patentId: '',
      fatherName: '',
      weight: '',
      age: '',
      drName: '',
      checked: 'first',
      sex: 'Male',
      dr: 'Dr.',
      isKg: false,
      spinner: false,
      oxyArray: [],
      skinArray: [],
      tempArray: [],
      historyArray: [],
    };
  }

  componentDidMount() {
    console.log(clc.xterm(6)('ye chala patient!'));
  }

  componentWillUnmount() {
    console.log(clc.xterm(218)('ye ruka?'));
  }
  //   this.handleAirHigher = this.handleAirHigher.bind(this);
  // this.handleAirlower = this.handleAirlower.bind(this);
  // // this.handleSkinCurrent = this.handleSkinCurrent.bind(this);
  // this.handleSkinLow = this.handleSkinLow.bind(this);
  // this.handleSkinHigh = this.handleSkinHigh.bind(this);
  // state = {
  //   checked: 'first',
  // };
  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      patentId: '',
      weight: '',
      age: '',
      fatherName: '',
      drName: '',
    });
  };

  // collectData = () => {
  //     this.setState({ isModalVisible: !this.state.isModalVisible },
  //         () =>
  //         this.props.airHigTemp(this.state.higherAirValue),
  //         this.props.airLowTemp(this.state.lowerAirValue),
  //         this.props.skinHighTemp(this.state.skinHighTemp),
  //         this.props.skinLowTemp(this.state.skinLowTemp),
  //         this.props.spo2Uper(this.state.spo2Upper),
  //         this.props.spo2Lower(this.state.spo2Lower),
  //         this.props.hrUper(this.state.hrUpper),
  //         this.props.hrLower(this.state.hrLower),
  //         this.props.modalOff(!this.state.isModalVisible),

  //         );
  // }
  handleAirHigher(child) {
    this.setState({
      higherAirValue: child,
    });
  }
  handleAirlower(child) {
    this.setState({
      lowerAirValue: child,
    });
  }
  handleSkinHigh(child) {
    this.setState({
      skinHighTemp: child,
    });
  }
  handleSkinLow(child) {
    this.setState({
      skinLowTemp: child,
    });
  }
  handleSpo2Uper = child => {
    this.setState({
      spo2Upper: child,
    });
  };
  handleSpo2Lower = child => {
    this.setState({
      spo2Lower: child,
    });
  };
  handleHrUper = child => {
    this.setState({
      hrUpper: child,
    });
  };
  handleHrLower = child => {
    this.setState({
      hrLower: child,
    });
  };

  handlePatientSubmit = () => {
    const {patentId, age, fatherName, weight, drName} = this.state;
    if (
      patentId == '' &&
      age == '' &&
      fatherName == '' &&
      weight == '' &&
      drName == ''
    ) {
      this.saveGuest();
      console.log('SomeOne needs to Add Guest Patient++++++++>>>>>>>>>>');
    } else {
      this.saveData();
    }
  };

  handleSubmitText() {
    const {patentId, age, fatherName, weight, drName} = this.state;
    if (
      patentId == '' &&
      age == '' &&
      fatherName == '' &&
      weight == '' &&
      drName == ''
    ) {
      return 'Guest';
    } else {
      return 'Submit';
    }
  }

  saveGuest() {
    const RandGuest =
      'Guest ' + (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
    Alert.alert('Add Guest Patient?', 'Guest Patient Will be Added', [
      {
        text: 'Cancel',
        onPress: () => {
          console.log('Cancel Pressed on Add Guest Patient');
        },
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          if (!this.props.isActive) {
            this.setState({spinner: true});
            setTimeout(() => {
              this.props.condActive(true);
              this.props.handleAirTempActivate(true);
              this.props.handleSkinTempActivate(true);
              this.props.handleOxygenActivate(true);
              this.props.getPatientID(RandGuest);
              this.props.getAge('-');
              this.props.getWeight('-');
              this.props.getFatherName('-');
              this.props.getDrName('-');
              this.props.getSex(this.state.sex);
              this.props.getWeightUnit(this.state.isKg);
              this.props.handleIsDischarged(false);
              ToastAndroid.show(
                'Added Patient Succesfully',
                ToastAndroid.SHORT,
              );
              this.setState({
                isModalVisible: !this.state.isModalVisible,
                spinner: false,
              });
            }, 50);
            setTimeout(() => {
              this.props.handleRunData(true);
            }, 15000);
          } else {
            ToastAndroid.show('First Discharge Patient', ToastAndroid.SHORT);
          }
        },
      },
    ]);
  }

  saveData() {
    const {patentId, age, fatherName, weight, drName} = this.state;
    if (
      patentId == '' ||
      age == '' ||
      fatherName == '' ||
      weight == '' ||
      drName == ''
    ) {
      alert('Field cannot be empty');
    } else
      Alert.alert('Are you Sure?', 'Add this patient', [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Cancel Pressed on Add Patient');
          },
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            if (!this.props.isActive) {
              this.setState({spinner: true});
              setTimeout(() => {
                this.props.condActive(true);
                this.props.handleAirTempActivate(true);
                this.props.handleSkinTempActivate(true);
                this.props.handleOxygenActivate(true);
                this.props.getPatientID(this.state.patentId);
                this.props.getAge(this.state.age);
                this.props.getWeight(this.state.weight);
                this.props.getFatherName(this.state.fatherName);
                this.props.getDrName(this.state.drName);
                this.props.getSex(this.state.sex);
                this.props.getWeightUnit(this.state.isKg);
                this.props.handleIsDischarged(false);
                ToastAndroid.show(
                  'Added Patient Succesfully',
                  ToastAndroid.SHORT,
                );
                this.setState({
                  isModalVisible: !this.state.isModalVisible,
                  spinner: false,
                });
              }, 50);
              setTimeout(() => {
                this.props.handleRunData(true);
              }, 15000);
            } else {
              ToastAndroid.show('First Discharge Patient', ToastAndroid.SHORT);
            }
          },
        },
      ]);
  }

  render() {
    const {checked, sex} = this.state;

    return (
      <View>
        {/* Component */}
        <TouchableOpacity style={style.mainList} onPress={this.toggleModal}>
          <Text style={style.listText}>Patient Information</Text>
          <Alarm name={'alarm-light'} size={height * 0.04} />
        </TouchableOpacity>
        {/* Modal */}
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={style.spinnerTextStyle}
          color="red"
        />
        <Modal
          animationIn="slideInDown"
          animationOut="slideOutUp"
          statusBarTranslucent
          isVisible={this.props.alarmFlag ? false : this.state.isModalVisible}>
          <KeyboardAvoidingView
            style={{
              height: height,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            keyboardVerticalOffset={this.state.bottoms ? -60 : -100}
            behavior="position">
            <View style={style.modalInner}>
              <View style={style.boxConatainer}>
                <View style={style.boxInner}>
                  {/* Box Header */}
                  <View style={style.boxHeader}>
                    <View style={style.boxHeaderInner}>
                      <TouchableOpacity onPress={this.toggleModal}>
                        <Back
                          name={'keyboard-backspace'}
                          size={width * 0.04}
                          color="white"
                        />
                      </TouchableOpacity>
                      <Text style={style.headerHeading}>
                        Patient Information
                      </Text>
                      <TouchableOpacity
                        style={style.headerbotton}
                        onPress={this.handlePatientSubmit}>
                        <Text style={style.bottonText}>
                          {this.handleSubmitText()}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* Box Body */}
                  {/* <ScrollView> */}
                  <View style={style.boxBody}>
                    <View style={style.boxBodyInner}>
                      <Text style={style.fieldText}>Patient ID:</Text>
                      <View style={style.passInputValue}>
                        <TextInput
                          placeholder="Type Here"
                          onChangeText={val => this.setState({patentId: val})}
                          style={style.currentInput}
                          onFocus={() => {
                            this.setState({bottoms: false});
                            console.log('chala');
                          }}
                          onBlur={() => {
                            this.setState({bottoms: true});
                            console.log('chala');
                          }}
                        />
                      </View>
                    </View>
                    <View style={[style.boxBodyInner]}>
                      <Text style={style.fieldText}>Weight:</Text>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={[
                            style.passInputValue,
                            {width: height * 0.328},
                          ]}>
                          <TextInput
                            placeholder="Type Here"
                            keyboardType="number-pad"
                            onChangeText={val => this.setState({weight: val})}
                            style={style.currentInput}
                            onFocus={() => {
                              this.setState({bottoms: false});
                              console.log('chala');
                            }}
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignSelf: 'center',
                            marginLeft: height * 0.02,
                            width: height * 0.15,
                          }}>
                          <Text
                            style={{
                              fontFamily: Fonts.Handlee,
                              fontSize: height * 0.025,
                              color: 'red',
                            }}>
                            lb
                          </Text>
                          <SwitchToggle
                            switchOn={this.state.isKg}
                            onPress={() =>
                              this.setState({isKg: !this.state.isKg})
                            }
                            useNativeDriver={false}
                            backgroundColorOn={'#555555'}
                            circleColorOn={'#f68d80fd'}
                            backgroundColorOff={'#555555'}
                            circleColorOff={'#f68d80fd'}
                            containerStyle={style.toggleContainer}
                            circleStyle={style.toggleCircle}
                          />
                          <Text
                            style={{
                              fontFamily: Fonts.Handlee,
                              fontSize: height * 0.025,
                              color: 'red',
                            }}>
                            kg
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={[
                        style.boxBodyInner,
                        {justifyContent: 'space-between'},
                      ]}>
                      <Text style={style.fieldText}>Age:</Text>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={[
                            style.passInputValue,
                            {width: height * 0.328},
                          ]}>
                          <TextInput
                            placeholder="Type Here"
                            keyboardType="number-pad"
                            onChangeText={val => this.setState({age: val})}
                            style={style.currentInput}
                            onFocus={() => {
                              this.setState({bottoms: false});
                              console.log('chala');
                            }}
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignSelf: 'center',
                            marginLeft: height * 0.02,
                            width: height * 0.15,
                          }}>
                          <Text
                            style={{
                              fontFamily: Fonts.Handlee,
                              fontSize: height * 0.025,
                              color: 'red',
                            }}>
                            Days
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={style.boxBodyInner}>
                      <Text style={style.fieldText}>Sex:</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'flex-start',
                          alignItems: 'center',
                          width: height * 0.5,
                        }}>
                        <RadioButton
                          value="first"
                          status={sex === 'Male' ? 'checked' : 'unchecked'}
                          onPress={() => {
                            this.setState({sex: 'Male'});
                          }}
                        />
                        <Text
                          style={[style.fieldText, {fontSize: height * 0.03}]}>
                          Male
                        </Text>
                        <RadioButton
                          value="second"
                          status={sex === 'Female' ? 'checked' : 'unchecked'}
                          onPress={() => {
                            this.setState({sex: 'Female'});
                          }}
                        />
                        <Text
                          style={[style.fieldText, {fontSize: height * 0.03}]}>
                          Female
                        </Text>
                      </View>
                    </View>
                    <View style={style.boxBodyInner}>
                      <Text style={style.fieldText}>Parent Name:</Text>
                      <View style={style.passInputValue}>
                        <TextInput
                          placeholder="Parent Name..."
                          onChangeText={val => this.setState({fatherName: val})}
                          style={style.currentInput}
                          onFocus={() => {
                            this.setState({bottoms: true});
                            console.log('chala');
                          }}
                        />
                      </View>
                    </View>
                    <View style={style.boxBodyInner}>
                      <Text style={style.fieldText}>Doctor Name:</Text>
                      <View style={style.passInputValue}>
                        <TextInput
                          placeholder="Type Here"
                          onChangeText={val =>
                            this.setState({drName: this.state.dr + val})
                          }
                          style={style.currentInput}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
      </View>
    );
  }
}
