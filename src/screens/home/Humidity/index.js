import React, {Component} from 'react';
import {Text, View, Alert, Dimensions, TouchableOpacity} from 'react-native';
import style from './style';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {createResource} from '../../../config/SimpleApiCall';
import {humidity} from '../../../config/WebServices';

const {height, width} = Dimensions.get('window');

export default class App extends Component {
  state = {
    isModalVisible: false,
  };

  sendHumidityTemp = async () => {
    const {currentTemp, setTemp} = this.state;

    let userInfo = await AsyncStorage.getItem('userInfo');
    let _ = JSON.parse(userInfo);

    let payload = {
      current_temp: currentTemp,
      estimate_temp: setTemp,
      userId: _.login_user[0]._id,
    };

    createResource(humidity, payload, _.token)
      .then(res => {
        Alert.alert('Success', 'Successfully Added Humidity!');
      })
      .catch(error => {
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

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  render() {
    return (
      <View>
        <View style={style.TemperatureView}>
          <View style={style.Temperature}>
            <View style={style.skinInerContainer}>
              <View style={style.skinIner}>
                <View style={{flex: 1}}>
                  <Text style={style.currentTempText}>Current Humidity</Text>
                  <View style={style.boxUperStyle}>
                    <View style={style.likeInputOxygen}>
                      <Text style={style.tempInputCur}>50</Text>
                    </View>

                    <Text style={style.centiUper}>%</Text>
                    {this.props.locker ? (
                      <TouchableOpacity style={style.iconOpenRow}>
                        <NewOpen
                          name="open-in-new"
                          size={height * 0.06}
                          color="black"
                        />
                      </TouchableOpacity>
                    ) : (
                      <View style={style.iconOpenRow}>
                        <NewOpen
                          name="open-in-new"
                          size={height * 0.06}
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
                        <Text style={style.tempInputSet}>60</Text>
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
      </View>
    );
  }
}
