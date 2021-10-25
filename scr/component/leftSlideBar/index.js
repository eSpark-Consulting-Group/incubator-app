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
  FlatList,
} from 'react-native';
import style from './styles';
import Modal from 'react-native-modal';
import MenuOpen from 'react-native-vector-icons/AntDesign';
import MenuClose from 'react-native-vector-icons/AntDesign';
import Setting from 'react-native-vector-icons/Feather';
import Lock from 'react-native-vector-icons/SimpleLineIcons';
import SysSettings from 'react-native-vector-icons/Octicons';
import Graph from 'react-native-vector-icons/Entypo';
import Pass from 'react-native-vector-icons/MaterialCommunityIcons';
import Back from 'react-native-vector-icons/Feather';
import Bright from 'react-native-vector-icons/MaterialCommunityIcons';
import Close from 'react-native-vector-icons/MaterialCommunityIcons';
import Data from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import SwitchToggle from 'react-native-switch-toggle';
import SystemSetting from 'react-native-system-setting';
import FileViewer from 'react-native-file-viewer';
import RNFS from 'react-native-fs';

import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import AlarmSetting from './AlaemSettings/index';
import Parameter from './Parameter/index';
import PatientInfo from './PatientInfo/index';
// import SysSettings from 'react-native-vector-icons/Octicons';
import {Fonts} from '../../utils/fonts';
import {ScrollView} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

var clc = require('cli-color');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      LockorUnlo: false,
      brightness: 0.2,
      toggleWeight: false,
      toggleTemp: false,
      higherAirValue: null,
      lowAirValue: 32.1,
      skinHigherTemp: null,
      skinLowerTemp: 34.1,
      spo2Uper: 99,
      spo2Lower: 91,
      hrUpper: 190,
      hrLower: 70,
      switchAir: true,
      switchSkin: true,
      switchSpo2: true,
      switchWeight: true,
      switchHumidity: true,
      switchOxygen: true,
      newDataArray: [],
      txtFileData: '',
      password: '',
      checker: false,
      isActive: false,
      isDischarged: false,
      showDataModal: false,
      listShow: false,
      patientId: '',
      theHistoryArray: [],
      listDataArray: [],
      text: '',
      started: false,
    };
    this.arrayholder = [];
    this.handleAirHigher = this.handleAirHigher.bind(this);
    this.handleModalOff = this.handleModalOff.bind(this);
    this.handleAirLower = this.handleAirLower.bind(this);
    this.handleSkinHigher = this.handleSkinHigher.bind(this);
    this.handleSkinLower = this.handleSkinLower.bind(this);
    this.handleParameterSlideClose = this.handleParameterSlideClose.bind(this);
    this.handleSwitchAir = this.handleSwitchAir.bind(this);
    this.handleSwitchSkin = this.handleSwitchSkin.bind(this);
    this.handleSwitchHumidity = this.handleSwitchHumidity.bind(this);
    this.handleSwitchSpo2 = this.handleSwitchSpo2.bind(this);
    this.handleSwitchWeight = this.handleSwitchWeight.bind(this);
    this.handleSwitchOxygen = this.handleSwitchOxygen.bind(this);
  }

  componentDidMount() {
    this.readTxtFile();
    console.log(clc.xterm(216)('Left Slider Component chala'));
    this.readHistoryData();
  }

  componentWillUnmount() {
    console.log(clc.xterm(85)('Left Slider Component bnd hoa'));
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  toggleModalLock = () => {
    this.setState({LockorUnlo: !this.state.LockorUnlo});
  };
  _doneUnit = () => {
    this.setState(
      {
        LockorUnlo: !this.state.LockorUnlo,
      },
      () => {
        this.props.selectWeight(this.state.toggleWeight),
          this.props.selectTemp(this.state.toggleTemp);
      },
    );
  };
  handleAirHigher(child) {
    this.setState({
      higherAirValue: child,
    });
    this.props.airHigTemp(child);
  }
  handleAirLower(child) {
    this.setState(
      {
        lowAirValue: child,
      },
      () => this.props.airLoweTemp(this.state.lowAirValue),
    );
  }
  handleSkinLower(child) {
    this.setState(
      {
        skinLowerTemp: child,
      },
      () => this.props.skinLowTemp(this.state.skinLowerTemp),
    );
  }
  handleSkinHigher(child) {
    this.setState(
      {
        skinHigherTemp: child,
      },
      () => this.props.skinHighTemp(this.state.skinHigherTemp),
    );
  }
  handleSpo2Upper = (child) => {
    this.setState(
      {
        spo2Uper: child,
      },
      () => this.props.spo2Uper(this.state.spo2Uper),
    );
  };
  handleSpo2Lower = (child) => {
    this.setState(
      {
        spo2Lower: child,
      },
      () => this.props.spo2Lower(this.state.spo2Lower),
    );
  };
  handleHrUpper = (child) => {
    this.setState(
      {
        hrUpper: child,
      },
      () => this.props.hrUper(this.state.hrUpper),
    );
  };
  handleHRLower = (child) => {
    this.setState(
      {
        hrLower: child,
      },
      () => this.props.hrLower(this.state.hrLower),
    );
  };
  handleParameterSlideClose(child) {
    this.setState({
      isModalVisible: child,
    });
  }
  handleModalOff(child) {
    this.setState({
      isModalVisible: child,
    });
  }
  handleSwitchAir(child) {
    this.setState(() => this.props.switchAir(child));
  }
  handleSwitchSkin(child) {
    this.setState(() => this.props.switchSkin(child));
  }
  handleSwitchSpo2(child) {
    this.setState(() => this.props.switchSpo2(child));
  }
  handleSwitchWeight(child) {
    this.setState(() => this.props.switchWeight(child));
  }
  handleSwitchHumidity(child) {
    this.setState(() => this.props.switchHumidity(child));
  }
  handleSwitchOxygen(child) {
    this.setState(() => this.props.switchOxygen(child));
  }

  handleRunData = (child) => {
    this.setState({started: child});
    this.startData();
  };

  handlePatientID = (child) => {
    this.props.getPatientID(child);
    this.setState({patientId: child});
    console.log('chala patient id slider me');
  };

  handleAge = (child) => {
    this.props.getAge(child);
  };

  handleFatherName = (child) => {
    this.props.getFatherName(child);
  };

  handleWeight = (child) => {
    this.props.getWeight(child);
  };

  handleDrName = (child) => {
    this.props.getDrName(child);
  };

  handleCondActive = (child) => {
    this.setState({isActive: child});
  };

  handleIsDischarged = (child) => {
    this.setState({isDischarged: child});
    console.log(clc.xterm(191)('no longer discharged'));
  };

  // handleNewDataArray = (child) => {
  //   this.setState({newDataArray: child});
  //   console.log('aya new data slider me');
  // };

  setHistoryData = () => {
    if (this.state.patientId == '') {
      return console.log(clc.xterm(49)('history empty hai'));
    } else if (this.state.isDischarged) {
      return console.log(clc.xterm(49)('patient new nhi'));
    } else {
      let someData = this.state.theHistoryArray.slice();
      someData.push({
        patientId: this.state.patientId,
        data: this.state.newDataArray,
      });
      this.setState({theHistoryArray: someData});
      console.log('history Array: ', this.state.theHistoryArray);
      this.saveHistoryData();
    }
  };

  saveHistoryData = () => {
    const myPath = RNFS.ExternalStorageDirectoryPath + '/Patent/Data.txt';
    RNFS.writeFile(myPath, JSON.stringify(this.state.theHistoryArray), 'utf8')
      .then((success) => {
        console.log(clc.xterm(202)('History Saved!'));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  readHistoryData = async () => {
    const myPath = RNFS.ExternalStorageDirectoryPath + '/Patent/Data.txt';
    try {
      const contents = await RNFS.readFile(myPath, 'utf8');
      this.setState({theHistoryArray: JSON.parse(contents)});
      this.arrayholder = JSON.parse(contents);
      console.log('aya data', contents);
    } catch (e) {
      console.log(e, 'error at history data');
    }
  };

  handleDischargePatient = () => {
    Alert.alert('Are you Sure?', 'Discharge the patient', [
      {
        text: 'Cancel',
        onPress: () => {
          console.log('Cancel on Discharge Patient');
        },
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          console.log('Done');
          this.setState({isActive: false});
          this.props.siren.stop();
          this.props.siren2.stop();
          this.setHistoryData();

          clearInterval(this.theInterval);
          this.props.handleAirTempDeactivate(true);
          this.props.handleSkinTempDeactivate(true);
          this.props.handleOxygenDeactivate(true);
          this.setState({isDischarged: true});

          ToastAndroid.show('Discharged', ToastAndroid.SHORT);
        },
      },
    ]);
  };

  readTxtFile = async () => {
    const myPath = RNFS.ExternalStorageDirectoryPath;
    try {
      const path = myPath + '/Patent/Login.txt';
      const contents = await RNFS.readFile(path, 'utf8');
      this.setState({txtFileData: contents.toString()});
      console.log(this.state.txtFileData, 'aya kia');
    } catch (e) {
      console.log(e, 'error Read Text File');
    }
  };

  checkCredentials = () => {
    let {password} = this.state;
    const StringVal = this.state.txtFileData;
    const Pass = StringVal.match(/[^\spass:].*[\w\W]$/);
    if (Pass == password)
      return (
        ToastAndroid.show('Success', ToastAndroid.SHORT),
        this.setState({showDataModal: true, password: ''})
      );
    else return ToastAndroid.show('Wrong Password', ToastAndroid.SHORT);
  };

  checkForData = () => {
    console.log('pressed');
    this.setState({checker: true});
  };

  renderItem = ({item}) => {
    return (
      <View
        style={{
          padding: width * 0.01,
        }}>
        <TouchableOpacity
          onPress={() => {
            console.log('Hoa pressed', item.data);
            this.setState({listDataArray: item.data, showListModal: true});
          }}>
          <Text style={{fontSize: height * 0.03}}>{item.patientId}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderListItem = ({item}) => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: height * 0.015}}>{item.date}</Text>
          <Text style={{fontSize: height * 0.015, marginLeft: width * 0.025}}>
            {item.time}
          </Text>
          <Text
            style={{
              width: width * 0.02,
              fontSize: height * 0.015,
              left: width * 0.15,
              position: 'absolute',
              textAlign: 'center',
            }}>
            {item.oxygen}
          </Text>
          <Text
            style={{
              width: width * 0.02,
              fontSize: height * 0.015,
              left: width * 0.24,
              position: 'absolute',
              textAlign: 'center',
            }}>
            {item.skinTemperature}
          </Text>
          <Text
            style={{
              width: width * 0.02,
              fontSize: height * 0.015,
              left: width * 0.362,
              position: 'absolute',
              textAlign: 'center',
            }}>
            {item.airTemperature}
          </Text>
        </View>
      </View>
    );
  };

  markIt = () => {
    this.setState({
      checker: !this.state.checker,
    });
    this.readHistoryData();
    this.checkCredentials();
  };

  startData = () => {
    if (this.state.started) {
      this.setState({newDataArray: []});
      this.theInterval = setInterval(() => {
        let {oxy, skinTemp, airTemp} = this.props;
        let d = new Date();
        let month = d.getMonth() + 1;
        let date = d.getDate() + '/' + month + '/' + d.getFullYear();
        let time =
          d.getHours() +
          ':' +
          d.getMinutes() +
          ':' +
          d.getSeconds() +
          '.' +
          d.getMilliseconds();

        let newData = this.state.newDataArray.slice();
        newData.push({
          date: date,
          time: time,
          oxygen: oxy,
          skinTemperature: skinTemp,
          airTemperature: airTemp,
        });
        this.setState({newDataArray: newData});
        console.log('data Array', this.state.newDataArray);
      }, 15100);
    } else return null;
  };

  searchFilterFunction = (text) => {
    this.setState({
      text: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = item.patientId.toLowerCase();

      const textData = text.toLowerCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({theHistoryArray: newData});
  };

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          marginLeft: width * 0.005,
          height: height * 0.002,
          width: '90%',
          backgroundColor: 'rgba(150, 150, 150, 0.59)',
        }}
      />
    );
  };

  render() {
    console.log(
      clc.xterm(111)('aya airhigh leftsilder me', this.state.higherAirValue),
    );
    console.log(
      clc.xterm(111)('aya skinhigh leftslider me', this.state.skinHigherTemp),
    );
    return (
      <View>
        {this.props.locker ? (
          <TouchableOpacity onPress={this.toggleModal}>
            <MenuOpen name="menufold" size={width * 0.04} color="black" />
          </TouchableOpacity>
        ) : (
          <View>
            <MenuOpen name="menufold" size={width * 0.04} color="red" />
          </View>
        )}
        <Modal
          animationIn="slideInRight"
          animationOut="slideOutRight"
          onSwipeComplete={() => this.toggleModal()}
          swipeDirection="right"
          isVisible={this.state.isModalVisible}
          style={style.modalMainContainer}>
          <View style={{flex: 1}}>
            <View style={style.modalHeaderContainer}>
              <View style={style.modalHeaderInner}>
                <View style={style.menuBottonView}>
                  <TouchableOpacity onPress={this.toggleModal}>
                    <MenuClose
                      name="menuunfold"
                      size={width * 0.03}
                      color="red"
                    />
                  </TouchableOpacity>
                  <Text style={style.headerHeading}>Settings</Text>
                </View>
                <Setting name="settings" size={width * 0.02} color="red" />
              </View>
            </View>
            <View style={style.modalBodyContainer}>
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
                  <SysSettings name={'settings'} size={width * 0.02} />
                </TouchableOpacity>
                <TouchableOpacity style={style.listView}>
                  <Text style={style.listText}>Brightness</Text>
                  <View style={{width: width * 0.18}}>
                    <Slider
                      maximumValue={1}
                      minimumValue={0}
                      minimumTrackTintColor="#fd5e5efd"
                      maximumTrackTintColor="#000000"
                      thumbTintColor="red"
                      step={0.01}
                      value={this.state.brightness}
                      onValueChange={(brightness) => {
                        this.setState({brightness});
                        SystemSetting.setBrightness(brightness);
                      }}
                    />
                  </View>
                  <Bright name={'brightness-7'} size={width * 0.02} />
                </TouchableOpacity>
                {/* <Parameter
                  switchAir={this.handleSwitchAir}
                  switchSkin={this.handleSwitchSkin}
                  switchSpo2={this.handleSwitchSpo2}
                  switchWeight={this.handleSwitchWeight}
                  switchHumidity={this.handleSwitchHumidity}
                  switchOxygen={this.handleSwitchOxygen}
                /> */}
                <PatientInfo
                  oxy={this.props.oxy}
                  skinTemp={this.props.skinTemp}
                  airTemp={this.props.airTemp}
                  handleAirTempActivate={this.props.handleAirTempActivate}
                  handleSkinTempActivate={this.props.handleSkinTempActivate}
                  handleOxygenActivate={this.props.handleOxygenActivate}
                  getPatientID={this.handlePatientID}
                  getAge={this.handleAge}
                  getWeight={this.handleWeight}
                  getDrName={this.handleDrName}
                  getFatherName={this.handleFatherName}
                  condActive={this.handleCondActive}
                  isActive={this.state.isActive}
                  handleIsDischarged={this.handleIsDischarged}
                  handleRunData={this.handleRunData}
                />
                {/* <TouchableOpacity style={style.listView}>
                                    <Text style={style.listText}>Patient Information</Text>
                                    <Graph name={'area-graph'} size={width * .02} />
                                </TouchableOpacity> */}
                {/* <TouchableOpacity style={style.listView}>
                  <Text style={style.listText}>Calibaration</Text>
                  <Pass name={'lastpass'} size={width * 0.02} />
                </TouchableOpacity> */}
                <TouchableOpacity
                  style={style.listView}
                  onPress={this.checkForData}>
                  <Text style={style.listText}>Data Record</Text>
                  <Data name={'database'} size={width * 0.018} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={style.listView}
                  onPress={() => {
                    this.setState({LockorUnlo: !this.state.LockorUnlo});
                  }}>
                  <Text style={style.listText}>Units</Text>
                </TouchableOpacity>
                <View style={{height: height * 0.1}} />
                <TouchableOpacity
                  onPress={() => {
                    this.handleDischargePatient();
                  }}
                  style={[
                    style.listView,
                    {
                      justifyContent: 'center',
                      backgroundColor: '#fd5e5efd',
                    },
                  ]}>
                  <Text style={[style.listText, {color: '#ffffff'}]}>
                    Discharge
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/*
            //! Password Verification Modal 
            */}
            <Modal
              animationIn="slideInRight"
              animationOut="slideOutRight"
              isVisible={this.state.checker}
              style={{
                elevation: width * 0.005,
                borderBottomLeftRadius: width * 0.005,
                borderTopRightRadius: width * 0.005,
                borderTopLeftRadius: width * 0.025,
                borderBottomRightRadius: width * 0.025,
                backgroundColor: 'white',
                maxHeight: height * 0.5,
                maxWidth: width * 0.35,
                top: height * 0.15,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: width * 0.32,
                    height: height * 0.45,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'white',
                      borderBottomLeftRadius: width * 0.005,
                      borderTopRightRadius: width * 0.005,
                      borderTopLeftRadius: width * 0.025,
                      borderBottomRightRadius: width * 0.025,
                      elevation: width * 0.015,
                    }}>
                    <View
                      style={{
                        width: width * 0.32,
                        height: height * 0.12,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          borderTopRightRadius: width * 0.005,
                          borderTopLeftRadius: width * 0.025,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontFamily: Fonts.Handlee,
                            fontSize: width * 0.03,
                            color: 'red',
                          }}>
                          Enter Password:
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: width * 0.32,
                        height: height * 0.2,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            margin: width * 0.02,
                          }}>
                          <TextInput
                            placeholder="Type Here"
                            onChangeText={(val) =>
                              this.setState({password: val})
                            }
                            secureTextEntry
                            autoCapitalize="none"
                            style={{
                              fontFamily: Fonts.BalooChettan2,
                              borderColor: 'gray',
                              width: width * 0.25,
                              height: height * 0.08,
                              color: 'gray',
                              backgroundColor: '#23212016',
                              fontSize: width * 0.015,
                              paddingLeft: width * 0.01,
                            }}
                          />
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        width: width * 0.32,
                        height: height * 0.13,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity
                          style={{
                            width: width * 0.2,
                            height: height * 0.07,
                            backgroundColor: '#e44f3bfd',
                            elevation: width * 0.003,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: width * 0.1,
                          }}
                          onPress={this.markIt}>
                          <Text
                            style={{
                              fontSize: width * 0.023,
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
            {/*
            //! Data modal for only patient ID
            */}
            <Modal
              animationIn="slideInRight"
              animationOut="slideOutRight"
              isVisible={this.state.showDataModal}
              style={{
                elevation: width * 0.005,
                borderBottomLeftRadius: width * 0.005,
                borderTopRightRadius: width * 0.005,
                borderTopLeftRadius: width * 0.025,
                borderBottomRightRadius: width * 0.025,
                backgroundColor: 'white',
                maxHeight: height * 0.5,
                maxWidth: width * 0.35,
                top: height * 0.15,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: width * 0.32,
                    height: height * 0.45,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'white',
                      borderBottomLeftRadius: width * 0.005,
                      borderTopRightRadius: width * 0.005,
                      borderTopLeftRadius: width * 0.025,
                      borderBottomRightRadius: width * 0.025,
                      elevation: width * 0.015,
                    }}>
                    <View
                      style={{
                        width: width * 0.32,
                        height: height * 0.12,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          borderTopRightRadius: width * 0.005,
                          borderTopLeftRadius: width * 0.025,
                          // justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Back
                          name="arrow-left"
                          size={height * 0.04}
                          color="red"
                          style={{
                            position: 'absolute',
                            right: width * 0.29,
                          }}
                          onPress={() => {
                            console.log('History', this.state.theHistoryArray);
                            this.setState({
                              showDataModal: !this.state.showDataModal,
                            });
                          }}
                        />
                        <Text
                          style={{
                            fontFamily: Fonts.Handlee,
                            fontSize: width * 0.03,
                            left: width * 0.05,
                            color: 'red',
                          }}>
                          Data
                        </Text>
                        <View
                          style={{
                            position: 'absolute',
                            left: width * 0.12,
                            margin: width * 0.02,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <TextInput
                            style={{
                              fontFamily: Fonts.BalooChettan2,
                              width: width * 0.16,
                              height: height * 0.07,
                              fontSize: width * 0.015,
                              paddingLeft: width * 0.01,
                              backgroundColor: '#23212016',
                              color: 'grey',
                            }}
                            onChangeText={(text) =>
                              this.searchFilterFunction(text)
                            }
                            value={this.state.text}
                            underlineColorAndroid="transparent"
                            placeholder="Search Here"
                          />
                          <Close
                            name="close"
                            size={height * 0.035}
                            color="grey"
                            style={{position: 'absolute', left: width * 0.133}}
                            onPress={() =>
                              this.setState({text: ''}, () =>
                                this.searchFilterFunction(this.state.text),
                              )
                            }
                          />
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        width: width * 0.32,
                        backgroundColor: '#ffffff',
                      }}>
                      <FlatList
                        data={this.state.theHistoryArray}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={this.ListViewItemSeparator}
                        keyExtractor={(item) => item.patientId}
                        removeClippedSubviews={true}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
            {/*
            //! Listing Data Modal with all sensor values
            */}
            <Modal
              animationIn="slideInRight"
              animationOut="slideOutRight"
              isVisible={this.state.showListModal}
              style={{
                elevation: width * 0.005,
                borderBottomLeftRadius: width * 0.005,
                borderTopRightRadius: width * 0.005,
                borderTopLeftRadius: width * 0.025,
                borderBottomRightRadius: width * 0.025,
                backgroundColor: 'white',
                maxHeight: height * 0.5,
                maxWidth: width * 0.5,
                top: height * 0.15,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: width * 0.45,
                    height: height * 0.45,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'white',
                      borderBottomLeftRadius: width * 0.005,
                      borderTopRightRadius: width * 0.005,
                      borderTopLeftRadius: width * 0.025,
                      borderBottomRightRadius: width * 0.025,
                      elevation: width * 0.015,
                    }}>
                    <View
                      style={{
                        width: width * 0.45,
                        height: height * 0.12,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          borderTopRightRadius: width * 0.005,
                          borderTopLeftRadius: width * 0.025,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Back
                          name="arrow-left"
                          size={height * 0.04}
                          color="red"
                          style={{
                            position: 'absolute',
                            right: width * 0.42,
                          }}
                          onPress={() => {
                            console.log('History', this.state.listDataArray);
                            this.setState({
                              showListModal: !this.state.showListModal,
                            });
                          }}
                        />
                        <Text
                          style={{
                            fontFamily: Fonts.Handlee,
                            fontSize: width * 0.03,
                            color: 'red',
                          }}>
                          Listing Data
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        width: width * 0.45,
                        borderTopWidth: height * 0.002,
                        borderTopColor: 'red',
                      }}>
                      <View
                        style={{
                          paddingHorizontal: width * 0.02,
                          paddingTop: height * 0.01,
                          paddingBottom: height * 0.01,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            paddingLeft: width * 0.01,
                          }}>
                          <Text
                            style={{
                              fontSize: height * 0.018,
                              color: 'red',
                            }}>
                            Date
                          </Text>
                          <Text
                            style={{
                              fontSize: height * 0.018,
                              color: 'red',
                              marginLeft: width * 0.048,
                            }}>
                            Time
                          </Text>
                          <Text
                            style={{
                              fontSize: height * 0.018,
                              color: 'red',
                              marginLeft: width * 0.032,
                            }}>
                            Oxygen
                          </Text>
                          <Text
                            style={{
                              fontSize: height * 0.018,
                              color: 'red',
                              marginLeft: width * 0.03,
                            }}>
                            Skin Temperature
                          </Text>
                          <Text
                            style={{
                              fontSize: height * 0.018,
                              color: 'red',
                              marginLeft: width * 0.03,
                            }}>
                            Air Temperature
                          </Text>
                        </View>
                      </View>
                      <FlatList
                        data={this.state.listDataArray}
                        renderItem={this.renderListItem}
                        keyExtractor={(item) => item.time}
                        style={{paddingLeft: width * 0.02}}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Modal>

            <Modal
              animationIn="slideInRight"
              animationOut="slideOutRight"
              // onBackdropPress={() => this.toggleModalLock()}
              // onSwipeComplete={() => this.toggleModalLock()}
              // swipeDirection="right"
              isVisible={this.state.LockorUnlo}
              style={{
                elevation: width * 0.005,
                borderBottomLeftRadius: width * 0.005,
                borderTopRightRadius: width * 0.005,
                borderTopLeftRadius: width * 0.025,
                borderBottomRightRadius: width * 0.025,
                backgroundColor: 'white',
                maxHeight: height * 0.5,
                maxWidth: width * 0.35,
                top: height * 0.15,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: width * 0.32,
                    height: height * 0.45,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'white',
                      borderBottomLeftRadius: width * 0.005,
                      borderTopRightRadius: width * 0.005,
                      borderTopLeftRadius: width * 0.025,
                      borderBottomRightRadius: width * 0.025,
                      elevation: width * 0.015,
                    }}>
                    <View
                      style={{
                        width: width * 0.32,
                        height: height * 0.12,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          borderTopRightRadius: width * 0.005,
                          borderTopLeftRadius: width * 0.025,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontFamily: Fonts.Handlee,
                            fontSize: width * 0.03,
                            color: 'red',
                          }}>
                          Change the Unit
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: width * 0.32,
                        height: height * 0.2,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          // backgroundColor:'red',
                          // borderTopRightRadius: width * .005,
                          // borderTopLeftRadius: width * .025,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            margin: width * 0.02,
                          }}>
                          <Text
                            style={{
                              fontFamily: Fonts.Handlee,
                              fontSize: width * 0.02,
                              color: 'red',
                              top: height * 0.01,
                            }}>
                            Weight:{' '}
                          </Text>

                          <SwitchToggle
                            switchOn={this.state.toggleWeight}
                            onPress={() =>
                              this.setState({
                                toggleWeight: !this.state.toggleWeight,
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
                          <Text
                            style={{
                              fontSize: width * 0.023,
                              fontFamily: Fonts.BalooChettanBold,
                              // fontWeight: 'bold',
                              marginLeft: width * 0.005,
                            }}>
                            Kgs/lbs
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              fontFamily: Fonts.Handlee,
                              fontSize: width * 0.02,
                              color: 'red',
                            }}>
                            Temperature:{' '}
                          </Text>
                          <SwitchToggle
                            switchOn={this.state.toggleTemp}
                            onPress={() =>
                              this.setState({
                                toggleTemp: !this.state.toggleTemp,
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
                          <Text
                            style={{
                              fontSize: width * 0.023,
                              // fontWeight: 'bold',
                              fontFamily: Fonts.BalooChettanBold,
                              marginLeft: width * 0.005,
                            }}>
                            {'\u2103'}/{'\u2109'}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        width: width * 0.32,
                        height: height * 0.13,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity
                          style={{
                            width: width * 0.2,
                            height: height * 0.07,
                            backgroundColor: '#e44f3bfd',
                            elevation: width * 0.003,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: width * 0.1,
                          }}
                          onPress={this._doneUnit}>
                          <Text
                            style={{
                              fontSize: width * 0.023,
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
      </View>
    );
  }
}
