import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import style from './oxygenStyle';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

import {useAsyncStorage} from '@react-native-community/async-storage';
import RNFS from 'react-native-fs';

import {createResource} from '../../../config/SimpleApiCall';
import {oxygen} from '../../../config/WebServices';
import modalStyle from './modalsStyling';

const {getItem, setItem} = useAsyncStorage('userInfo');

const {height, width} = Dimensions.get('window');
let id = 0;

export default class App extends Component {
  state = {
    isModalVisible: false,
    oxygenLevel: 0,
    oxygenHistory: [],
    date: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    hour: new Date().getHours(),
    minutes: new Date().getMinutes(),
  };

  componentDidMount() {
    this.sendOxygenTemp();
  }

  sendOxygenTemp = async () => {
    const {currentTemp, setTemp} = this.state;

    let userInfo = await getItem();
    let _ = JSON.parse(userInfo);

    let payload = {
      current_temp: currentTemp,
      estimate_temp: setTemp,
      userId: _.login_user[0]._id,
    };

    createResource(oxygen, payload, _.token)
      .then((res) => {
        Alert.alert('Success', 'Successfully Added Oxygen!');
      })
      .catch((error) => {
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

  populateArray = () => {
    this.state.oxygenHistory.push({
      id: id++,
      currentOxygenLevel: this.state.oxygenLevel,
      setOxygenLevel: this.state.oxygenLevel - 1,
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
        <Text style={modalStyle.renderListSetTemp}>
          {item.currentOxygenLevel}
        </Text>
        <Text style={modalStyle.renderListAirTemp}>{item.setOxygenLevel}</Text>
      </View>
    </View>
  );

  randomVal() {
    this.oxygen = setInterval(() => {
      const rand = Math.random() * 40;
      this.setState({oxygenLevel: rand.toFixed()});
      this.props.handleOxy(this.state.oxygenLevel);
      this.populateArray();
    }, 15000);
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  render() {
    if (this.props.activate && this.props.run3) {
      setTimeout(() => {
        this.randomVal();
        console.log('true aya');
      }, 50);
    }
    if (this.props.deactivate && this.props.run3) {
      console.log('chala');
      setTimeout(() => {
        clearInterval(this.oxygen);
        this.setState({oxygenLevel: 0});
        console.log('false aya');
      }, 50);
    }
    return (
      <View>
        <View style={style.TemperatureView}>
          <View style={style.Temperature}>
            <View style={style.skinInerContainer}>
              <View style={style.skinIner}>
                <View style={{flex: 1}}>
                  <Text style={style.currentTempText}>
                    Current Oxygen Level
                  </Text>
                  <View style={style.boxUperStyle}>
                    <View style={style.likeInputOxygen}>
                      <Text style={style.tempInputCur}>
                        {/* //todo: here is the value of oxygen */}
                        {this.state.oxygenLevel}
                      </Text>
                    </View>

                    <Text style={style.centiUper}>%</Text>
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
                    <Text style={style.setTemp}>Normal Range</Text>
                    <View style={style.boxLowerStyle}>
                      <View style={style.likeInputMin}>
                        <Text style={style.tempInputSet}>21</Text>
                      </View>

                      <Text style={style.centiLower}>%</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}></View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Modal
          animationIn="slideInUp"
          animationOut="slideOutDown"
          onBackdropPress={() => this.toggleModal()}
          onSwipeComplete={() => this.toggleModal()}
          swipeDirection="right"
          isVisible={this.state.isModalVisible}
          style={style.modalMainContainer}>
          <View style={{flex: 1}}>
            <View style={style.haiderContainer}>
              <View style={style.headerInner}>
                <Text style={style.headerHeading}>Oxygen History</Text>
                <View style={style.headerIcon} />
                <View>
                  <TouchableOpacity
                    onPress={() => this.toggleModal()}
                    style={style.submit}>
                    <Text style={style.alarmText}>Done</Text>
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
                    Current Oxygen Level
                  </Text>
                  <Text style={modalStyle.headingSetTemp}>
                    Recommend Oxygen Level
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <FlatList
                      style={{marginTop: height * 0.01}}
                      data={this.state.oxygenHistory}
                      renderItem={this._renderMyList}
                      keyExtractor={(item) => item.id}
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
