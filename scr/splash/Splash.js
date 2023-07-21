import React, {Component} from 'react';

import {
  View,
  ActivityIndicator,
  StatusBar,
  Dimensions,
  Animated,
} from 'react-native';

import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
const {height, width} = Dimensions.get('window');
import * as ScopedStorage from 'react-native-scoped-storage';
import RNFS from 'react-native-fs';

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
    this._ack();

    setTimeout(() => {
      this.setState({loadingSpinner: true});
    }, 6000);
  }

  _ack = async () => {

    console.log("_ack _ack");
    const myPath = RNFS.ExternalStorageDirectoryPath;
    const path = myPath + '/Patent/Login.txt';
    // ScopedStorage.openDocumentTree(true)
    // .then((res) => {
    //   console.log("ScopedStorage res", res);
    // })
    requestMultiple([
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ])
      .then(statuses => {
        console.log(
          'Camera',
          statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
        );
        console.log(
          'FaceID',
          statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE],
        );
      })
      .catch(err => {
        console.log('err', err);
      });
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
