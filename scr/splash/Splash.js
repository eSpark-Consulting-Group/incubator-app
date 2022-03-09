import React, {Component} from 'react';

import {
  View,
  ActivityIndicator,
  StatusBar,
  Dimensions,
  Animated,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';

import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
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
    this._ack();
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
        <ActivityIndicator size={width * 0.06} color="red" />
      </View>
    );
  }
}
