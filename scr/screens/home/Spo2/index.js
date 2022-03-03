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
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import style from './style';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {createResource} from '../../../config/SimpleApiCall';
import {spHr} from '../../../config/WebServices';

const {height, width} = Dimensions.get('window');

export default class App extends Component {
  state = {
    isModalVisible: false,
    powCondi: true,
    currentSkinemperature: 31,
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
  };
  componentDidMount() {
    const high = this.props.skinHighTemp;
    const lower = this.props.skinLowerTemp;

    // this.sendSPHRTemp();

    if (
      this.state.currentSkinemperature > high ||
      this.state.currentSkinemperature < lower
    ) {
      this.setState({airTemp: false});
    } else {
      this.setState({airTemp: true});
    }
  }

  sendSPHRTemp = async () => {
    const {currentTemp, setTemp} = this.state;

    let userInfo = await AsyncStorage.getItem('userInfo');
    let _ = JSON.parse(userInfo);

    let payload = {
      current_temp: currentTemp,
      estimate_temp: setTemp,
      userId: _.login_user[0]._id,
    };

    createResource(spHr, payload, _.token)
      .then(res => {
        Alert.alert('Success', 'Successfully Added SPhr!');
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
          {this.state.hour}:{this.state.minutes}
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
      alert('Type Plase Or Go Back');
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

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
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
    return (
      <View>
        <View style={style.TemperatureView}>
          <View style={style.Temperature}>
            <View style={style.skinInerContainer}>
              <View style={style.skinIner}>
                <View style={{flex: 1}}>
                  <Text style={style.currentTempText}>SPO2</Text>
                  <View style={style.boxUperStyle}>
                    <View style={style.likeInputOxygen}>
                      <Text style={style.tempInputCur}>98</Text>
                    </View>

                    <Text style={style.centiUper}>%</Text>
                    <Alarm
                      name={'alarm-light'}
                      size={height * 0.08}
                      style={{top: 5}}
                      color={this.state.powCondi ? '#0ae916' : 'red'}
                    />
                    {this.props.locker ? (
                      <TouchableOpacity
                        style={style.iconOpenRow}
                        onPress={this.toggleModal}>
                        <NewOpen
                          name="open-in-new"
                          size={width * 0.035}
                          color="black"
                        />
                      </TouchableOpacity>
                    ) : (
                      <View style={style.iconOpenRow}>
                        <NewOpen
                          name="open-in-new"
                          size={width * 0.035}
                          color="red"
                        />
                      </View>
                    )}
                  </View>
                </View>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View>
                    <Text style={style.setTemp}>HR</Text>
                    <View style={style.boxLowerStyle}>
                      <View style={style.likeInputMin}>
                        <Text style={style.tempInputSet}>82</Text>
                      </View>
                      <Text style={style.centiLower}>%</Text>
                      <Alarm
                        name={'alarm-light'}
                        size={width * 0.04}
                        color={this.state.powCondi ? '#0ae916' : 'red'}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Modal
          animationIn="slideInUp"
          animationOut="slideOutDown"
          statusBarTranslucent
          onBackdropPress={() => this.toggleModal()}
          onSwipeComplete={() => this.toggleModal()}
          swipeDirection="right"
          isVisible={this.state.isModalVisible}
          style={style.modalMainContainer}>
          <View style={{flex: 1}}>
            <View style={style.haiderContainer}>
              <View style={style.headerInner}>
                <Text style={style.headerHeading}>SPO2 History</Text>
                <View>
                  <TouchableOpacity
                    onPress={() => this.toggleModal()}
                    style={style.submit}>
                    <Text style={style.alarmText}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={style.bodyMainContainer}>
              <View style={style.bodyContainer}></View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
