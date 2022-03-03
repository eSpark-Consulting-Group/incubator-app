import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
  Dimensions,
  Animated,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';

import {
  PERMISSIONS,
  RESULTS,
  request,
  check,
  requestMultiple,
  openSettings,
} from 'react-native-permissions';
const {height, width} = Dimensions.get('window');

import clc from 'cli-color';

import style from './style';

export default class Splash extends Component {
  state = {
    valueHi: new Animated.Value(0),
    valueWelcome: new Animated.Value(0),
    loadingSpinner: false,
    textView: false,
    permissionEnabled: false,
  };
  componentDidMount() {
    const {valueHi, valueWelcome} = this.state;
    // this._askPermission();
    this._ack();
    // this._ask();
    Animated.timing(valueHi, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(valueWelcome, {
      toValue: 1,
      duration: 7000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      this.setState({textView: true});
    }, 3000);

    setTimeout(() => {
      this.setState({loadingSpinner: true});
    }, 6000);
  }

  _ask = async () => {
    try {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION,
      ).then(res => {
        if (res == PermissionsAndroid.RESULTS.GRANTED) {
          console.log('got permission');
        } else {
          console.log('deny permission');
        }
      });
    } catch (e) {
      console.warn(e);
    }
  };

  _ack = async () => {
    requestMultiple([
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ]).then(statuses => {
      console.log(
        'Camera',
        statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
      );
      console.log(
        'FaceID',
        statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE],
      );
    });
  };

  _askPermission = async () => {
    try {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]).then(results => {
        if (
          results['android.permission.READ_EXTERNAL_STORAGE'] &&
          results['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
        ) {
          this.setState({permissionEnabled: true});
          console.log(clc.bgRed('Granted Read Write Permissions'));
        } else if (
          (results['android.permission.READ_EXTERNAL_STORAGE'] &&
            results['android.permission.WRITE_EXTERNAL_STORAGE'] ===
              'denied') ||
          (results['android.permission.READ_EXTERNAL_STORAGE'] &&
            results['android.permission.WRITE_EXTERNAL_STORAGE'] ===
              'never_ask_again')
        ) {
          ToastAndroid.show(
            'App cannot Work Without Accepting Permission',
            ToastAndroid.SHORT,
          );
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View style={style.container}>
        <StatusBar
          backgroundColor="black"
          barStyle="default"
          hidden={true}
          translucent
          showHideTransition={'fade'}></StatusBar>
        <ActivityIndicator
          size={width * 0.06}
          color="red"
          // style={styles.activityIndi}
        />
        {/* <ImageBackground
          source={require('../../images/mainScreen.png')}
          style={style.image}>
          <View style={style.container}>
            {this.state.textView == false ? (
              <Animated.View
                style={{
                  opacity: this.state.valueHi,
                  flex: 1,
                  alignSelf: 'center',
                }}>
                <Text style={style.animationTextStyle}>Hi</Text>
              </Animated.View>
            ) : (
              <Animated.View
                style={{
                  opacity: this.state.valueWelcome,
                  flex: 1,
                  alignSelf: 'center',
                }}>
                <Text style={style.animationTextStyle}>Welcome</Text>
              </Animated.View>
            )}
            {this.state.loadingSpinner == false ? (
              <Text></Text>
            ) : (
              <ActivityIndicator
                size={width * 0.06}
                color="red"
                style={styles.activityIndi}
              />
            )}
          </View>
        </ImageBackground> */}
      </View>
    );
  }
}
