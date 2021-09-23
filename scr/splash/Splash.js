import React, { Component } from 'react';

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
  Animated
} from 'react-native';


const { height, width } = Dimensions.get('window');

import style from './style';

export default class Splash extends Component {
  state = {
    valueHi: new Animated.Value(0),
    valueWelcome: new Animated.Value(0),
    loadingSpinner: false,
    textView: false
  };
  componentDidMount() {

    const { valueHi, valueWelcome } = this.state;

    Animated.timing(valueHi, {
      toValue:1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(valueWelcome, {
      toValue: 1,
      duration: 7000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      this.setState({ textView: true })
    }, 3000);
    
    setTimeout(() => {
      this.setState({ loadingSpinner: true })
    }, 6000)
  }
  render() {
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'}></StatusBar>
        <ImageBackground source={require('../../images/mainScreen.png')}
          style={style.image} >
            <View style={style.container}>

            {this.state.textView == false ?
            (
              <Animated.View
              style={{
                opacity: this.state.valueHi,
                flex: 1,
                alignSelf: 'center'
              }}
              >
            <Text style={style.animationTextStyle}>Hi</Text>
          </Animated.View>
            ):(
              <Animated.View
              style={{
                opacity: this.state.valueWelcome,
                flex: 1,
                alignSelf: 'center'
              }}
              >
            <Text style={style.animationTextStyle}>Welcome</Text>
          </Animated.View>
            )}
          {this.state.loadingSpinner == false ?
            (
              <Text></Text>
              ) : (
                <ActivityIndicator size={width * .06  } color="white" style={styles.activityIndi} />
                )
              }
              </View>
        </ImageBackground>


      </View>
    );
  }
}