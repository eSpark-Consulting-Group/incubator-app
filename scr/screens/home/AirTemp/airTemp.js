import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import style from './style';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import modalStyle from './modalsStyling';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import Check from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import clc from 'cli-color';
import {createResource} from '../../../config/SimpleApiCall';
import {air_Temp} from '../../../config/WebServices';

const {height, width} = Dimensions.get('window');
let id = 0;

export default class App extends Component {
  state = {
    isModalVisible: false,
    airTemp: true,
    currentTemp: 0,
    setTemp: 0,
    preWei: 3,
    toggle: false,
    currentAirTemperature: 35,
    setTempList: [],
    airTempList: [],
    temperatureHistory: [],
    date: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    hour: new Date().getHours(),
    minutes: new Date().getMinutes(),
    run: true,
  };
  async componentDidMount() {
    const high = this.props.airHigherTemp;
    const lower = this.props.airLowerTemp;

    // this.sendAirTemp();

    if (
      this.state.currentAirTemperature > high ||
      this.state.currentAirTemperature < lower
    ) {
      this.setState({airTemp: false});
    } else {
      this.setState({airTemp: true});
    }
  }

  sendAirTemp = async () => {
    const {currentTemp, setTemp} = this.state;

    let userInfo = await AsyncStorage.getItem('userInfo');
    let _ = JSON.parse(userInfo);

    let payload = {
      current_temp: currentTemp,
      estimate_temp: setTemp,
      userId: _.login_user[0]._id,
    };

    createResource(air_Temp, payload, _.token)
      .then(res => {
        Alert.alert('Success', 'Successfully Added Air Temprature!');
      })
      .catch(error => {
        // this.setState({isloading: false});
        if (error.response) {
          Alert.alert('Error', error.response.data.msg);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          Alert.alert('Error', 'Something Went Wrong');

          console.log(error.request);
        } else {
          Alert.alert('Error', error.msg);

          ErrorHelper.handleErrors(error.msg, true);
        }
      });
  };

  _renderMyList = ({item}) => (
    <View style={{flex: 1}}>
      <View style={modalStyle.renderMyListContainer}>
        <Text style={modalStyle.renderListHeading1}>
          {this.state.date}/{this.state.month}/{this.state.year}
        </Text>
        <Text style={modalStyle.renderListHeading2}>
          {item.hour}:{item.mins}
        </Text>
        <Text style={modalStyle.renderListSetTemp}>{item.setTemperature}</Text>
        <Text style={modalStyle.renderListAirTemp}>
          {item.currentTemperature}
        </Text>
      </View>
    </View>
  );
  openToggel = () => {
    this.setState({
      toggle: !this.state.toggle,
      currentTemp: null,
      setTemp: null,
    });
  };
  submitCondition = () => {
    const historyData = this.state.currentTemp;
    const historyData2 = this.state.setTemp;
    let unit;
    !this.props.value ? (unit = '\u2103') : (unit = '\u2109');
    if (this.state.currentTemp == null || this.state.setTemp == null) {
      alert('Type Please Or Go Back');
    } else if (
      this.state.currentTemp <= 20 ||
      this.state.currentTemp >= 39 ||
      this.state.setTemp <= 20 ||
      this.state.setTemp >= 39
    ) {
      alert(
        'Not Accepted Temperature Will Set Greater Then 20 And Less Than 39',
      );
    } else {
      this.setState({toggle: !this.state.toggle});
      this.state.temperatureHistory.push({
        currentTemperature: this.state.currentTemp + unit,
        setTemperature: this.state.setTemp + unit,
      });
    }
  };

  populateArray = value => {
    this.state.temperatureHistory.push({
      hour: this.hour,
      mins: this.mins,
      id: id++,
      currentTemperature: value + '\u2103',
      setTemperature: value - 1 + '\u2103',
    });
  };

  randomVal() {
    this.airTemp = setInterval(() => {
      console.log(clc.xterm(141)('~ Kia mila ~ this.result', this.result));
      this.hour = new Date().getHours();
      this.mins = new Date().getMinutes();
      const rand = Math.random() * 40;
      this.setState({currentTemp: rand.toFixed()});
      this.props.handleAirTemp(this.result);
      this.populateArray(this.result);
    }, 30000);
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps.alarmFlag) {
      if (this.props.alarmFlag) {
        this.setState({
          toggle: false,
          isModalVisible: false,
        });
      }
    }
  }

  renderValue = () => {
    const {calibrateVal} = this.props;
    const {currentTemp} = this.state;

    console.log('current TEMP', currentTemp);
    console.log(
      '🚀 ~ file: airTemp.js ~ line 189 ~ App ~ calibrateVal',
      calibrateVal,
    );
    let result = parseInt(currentTemp) + parseInt(calibrateVal);
    console.log('🚀 ~ file: airTemp.js ~ line 197 ~ App ~ result', result);
    this.result = result;
    return parseInt(result);
  };

  render() {
    if (this.props.activate && this.props.run) {
      setTimeout(() => {
        this.randomVal();
        console.log('true aya');
      }, 50);
    }
    if (this.props.deactivate && this.props.run) {
      console.log('chala');
      setTimeout(() => {
        clearInterval(this.airTemp);
        this.setState({currentTemp: 0});
        console.log('false aya');
      }, 50);
    }
    return (
      <View>
        {this.props.locker ? (
          <View style={style.TemperatureView}>
            <View style={style.Temperature}>
              <View style={style.skinInerContainer}>
                <View style={style.skinIner}>
                  <View style={{flex: 1}}>
                    <Text style={style.currentTempText}>
                      Current Temperature
                    </Text>
                    <View style={style.boxUperStyle}>
                      <TouchableOpacity
                        style={style.likeInputOxygen}
                        onPress={() => this.openToggel()}>
                        <Text style={style.tempInputCur}>
                          {this.renderValue()}
                          {/* val //todo: here is the*/}
                        </Text>
                      </TouchableOpacity>
                      {!this.props.value ? (
                        <Text style={style.centiUper}>{'\u2103'}</Text>
                      ) : (
                        <Text style={style.centiUper}>{'\u2109'}</Text>
                      )}
                      <TouchableOpacity
                        style={style.iconOpenRow}
                        onPress={() => this.toggleModal()}>
                        <NewOpen
                          name="open-in-new"
                          size={height * 0.06}
                          color="black"
                        />
                      </TouchableOpacity>
                      <View
                        style={{
                          position: 'absolute',
                          right: width * -0.01,
                          top: height * 0.09,
                        }}>
                        <Alarm
                          name={'alarm-light'}
                          size={height * 0.085}
                          style={{top: height * 0.04}}
                          color={this.state.airTemp ? '#0ae916' : 'red'}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', flex: 1}}>
                    <View>
                      <Text style={style.setTemp}>Set Temperature</Text>
                      <View style={style.boxLowerStyle}>
                        <TouchableOpacity
                          style={style.likeInputMin}
                          onPress={() => this.openToggel()}>
                          <Text style={style.tempInputSet}>
                            {this.state.setTemp}
                          </Text>
                        </TouchableOpacity>
                        {!this.props.value ? (
                          <Text style={style.centiLower}>{'\u2103'}</Text>
                        ) : (
                          <Text style={style.centiLower}>{'\u2109'}</Text>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={style.TemperatureView}>
            <View style={style.Temperature}>
              <View style={style.skinInerContainer}>
                <View style={style.skinIner}>
                  <View style={{flex: 1}}>
                    <Text style={style.currentTempText}>
                      Current Temperature
                    </Text>
                    <View style={style.boxUperStyle}>
                      <View style={style.likeInputOxygen}>
                        <Text style={style.tempInputCur}>{renderValue()}</Text>
                      </View>
                      {!this.props.value ? (
                        <Text style={style.centiUper}>{'\u2103'}</Text>
                      ) : (
                        <Text style={style.centiUper}>{'\u2109'}</Text>
                      )}
                      <View style={style.iconOpenRow}>
                        <NewOpen
                          name="open-in-new"
                          size={height * 0.06}
                          color="red"
                        />
                      </View>
                      <View
                        style={{
                          position: 'absolute',
                          right: width * -0.01,
                          top: height * 0.09,
                        }}>
                        <Alarm
                          name={'alarm-light'}
                          size={height * 0.085}
                          style={{top: height * 0.04}}
                          color={this.state.airTemp ? '#0ae916' : 'red'}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', flex: 1}}>
                    <View>
                      <Text style={style.setTemp}>Set Temperature</Text>
                      <View style={style.boxLowerStyle}>
                        <View style={style.likeInputMin}>
                          <Text style={style.tempInputSet}>
                            {this.props.airLowerTemp}
                          </Text>
                        </View>
                        {!this.props.value ? (
                          <Text style={style.centiLower}>{'\u2103'}</Text>
                        ) : (
                          <Text style={style.centiLower}>{'\u2109'}</Text>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
        <Modal
          animationIn="bounceIn"
          animationOut="bounceOut"
          statusBarTranslucent
          isVisible={this.state.toggle}
          // style={modalStyle.insertWeightModal}
        >
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={modalStyle.insertWeightContainer}>
              <View style={modalStyle.insertWeightInner}>
                <View style={modalStyle.insertWeightHeader}>
                  <View style={modalStyle.inserWeightHeaderInner}>
                    <TouchableOpacity
                      onPress={this.openToggel}
                      style={modalStyle.inserBackBotton}>
                      <Back
                        name={'keyboard-backspace'}
                        size={width * 0.03}
                        color="white"
                      />
                    </TouchableOpacity>
                    <Text style={modalStyle.inserHeaderHeading}>
                      Air Temperature
                    </Text>
                  </View>
                </View>
                <View style={modalStyle.inserBodyConatiner}>
                  <View style={modalStyle.inserBodyInner}>
                    <Text style={modalStyle.inserTypeHeading}>
                      Current Temperature
                    </Text>
                    <View style={modalStyle.inserTextinputView}>
                      <TextInput
                        placeholder="Type Here"
                        keyboardType="number-pad"
                        maxLength={3}
                        style={modalStyle.inserTextinput}
                        onChangeText={e => this.setState({currentTemp: e})}
                      />
                    </View>
                    {!this.props.value ? (
                      <Text style={style.centiLower}>{'\u2103'}</Text>
                    ) : (
                      <Text style={style.centiLower}>{'\u2109'}</Text>
                    )}
                  </View>
                  <View style={modalStyle.inserBodyInner}>
                    <Text style={modalStyle.inserTypeHeading}>
                      Set Temperature
                    </Text>
                    <View style={modalStyle.inserTextinputView}>
                      <TextInput
                        placeholder="Type Here"
                        keyboardType="number-pad"
                        maxLength={3}
                        style={modalStyle.inserTextinput}
                        onChangeText={e => this.setState({setTemp: e})}
                      />
                    </View>
                    {!this.props.value ? (
                      <Text style={style.centiLower}>{'\u2103'}</Text>
                    ) : (
                      <Text style={style.centiLower}>{'\u2109'}</Text>
                    )}
                  </View>
                </View>
                <View style={modalStyle.inserFooterContainer}>
                  <View style={modalStyle.inserFooterInner}>
                    <TouchableOpacity
                      style={modalStyle.inserSubmitBottonView}
                      onPress={this.submitCondition}>
                      <Text style={modalStyle.inserSubmitText}>Submit</Text>
                      <Check
                        name={'checkcircle'}
                        size={width * 0.012}
                        color="white"
                        style={modalStyle.check}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        {/* 
          //todo: History Modal 
        */}
        <Modal
          animationIn="slideInUp"
          animationOut="slideOutDown"
          statusBarTranslucent
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({isModalVisible: false})}
          style={modalStyle.modalMainContainer}>
          <View style={{flex: 1}}>
            <View style={modalStyle.haiderContainer}>
              <View style={modalStyle.headerInner}>
                <Text style={modalStyle.headerHeading}>
                  Air Temperature History
                </Text>
                <View>
                  <TouchableOpacity
                    onPress={() => this.toggleModal()}
                    style={modalStyle.submit}>
                    <Text style={modalStyle.alarmText}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={modalStyle.bodyMainContainer}>
              <View style={modalStyle.bodyContainer}>
                <View style={modalStyle.historyContentHeadingView}>
                  <Text style={modalStyle.headingDate}>Date</Text>
                  <Text style={modalStyle.headingTime}>Time</Text>
                  <Text style={modalStyle.headingWeight}>
                    Previous Set Temperature
                  </Text>
                  <Text style={modalStyle.headingSetTemp}>
                    Previous Air Temperature
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <FlatList
                      style={{marginTop: height * 0.01}}
                      data={this.state.temperatureHistory}
                      renderItem={this._renderMyList}
                      keyExtractor={item => item.id}
                      showsVerticalScrollIndicator={false}
                    />
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
