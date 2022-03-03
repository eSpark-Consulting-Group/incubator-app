import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ActivityIndicator,
  ToastAndroid,
  PermissionsAndroid,
  Linking,
  Platform,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import {check, openSettings} from 'react-native-permissions';
import Spinner from 'react-native-loading-spinner-overlay';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
export default class LoginView extends Component {
  state = {
    email: '',
    password: '',
    isLoading: false,
    txtFileData: '',
    spinner: false,
    permissionState: false,
    focused: false,
  };

  componentDidMount() {
    this.checkForExists();
    console.log('Kya', Platform.Version);
    if (Platform.Version > 29) this._permissionCheck();
    Keyboard.addListener('keyboardDidHide', () => {
      this.setState({focused: false});
      console.log('XXXXX');
    });
  }

  componentWillUnmount() {
    Keyboard.removeAllListeners('keyboardDidHide');
  }

  _checkPermissions = async () => {
    const readGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    const writeGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    if (!readGranted || !writeGranted) {
      console.log('Read and write permissions have not been granted');
      return;
    }
  };

  _permissionCheck = async () => {
    try {
      const value = await AsyncStorage.getItem('permission');
      if (value !== null && value == '1') {
        console.log('XXXX----Yahoo----XXXX');
      } else {
        this._check();
      }
    } catch (e) {}
  };

  checkForExists = async () => {
    let appFolder = 'Patenty';
    let path = RNFS.ExternalStorageDirectoryPath + '/' + appFolder;

    const res = await RNFS.exists(path);
    if (res) {
      console.log('Existed');
    } else {
      RNFS.mkdir(path)
        .then(res => {
          console.log('Done');
        })
        .catch(e => {
          const string = e.toString();
          if (string.includes('Directory could not be created'))
            ToastAndroid.show('Permission Error', ToastAndroid.SHORT);
          console.log('Kia ha Error', e);
        });
    }
  };

  _permissionDone = async () => {
    try {
      await AsyncStorage.setItem('permission', '1');
    } catch (e) {
      // console.warn('permission', e);
    }
  };

  // _storeData = async value => {
  //   try {
  //     await setItem(JSON.stringify(value));
  //   } catch (error) {
  //     console.log('LoginView -> error', error);
  //     // Error saving data
  //   }
  // };

  _check = async () => {
    Alert.alert(
      'ALLOW Permissions',
      'Allow all Files Permissions to continue',
      [
        {
          text: 'Go to Settings',
          onPress: () => {
            openSettings();
            this._permissionDone();
          },
          style: 'default',
        },
        {
          text: 'No',
          onPress: () =>
            ToastAndroid.show(
              'Allow Files Access Required in Android 11 and above',
              ToastAndroid.SHORT,
            ),
          style: 'cancel',
        },
      ],
    );
  };

  ReadTxtFile = async isGuest => {
    const myPath = RNFS.ExternalStorageDirectoryPath;
    try {
      const path = myPath + '/Patent/Login.txt';
      const contents = await RNFS.readFile(path, 'utf8');
      this.setState({txtFileData: contents.toString()}, () => {
        if (isGuest) this.checkGuest();
        else this.checkCredentials();
      });
      console.log(this.state.txtFileData, 'Read Text File mil gae');
    } catch (e) {
      let string = e.toString();
      console.warn(string);
      if (string.includes('No such file or directory'))
        ToastAndroid.show('Not Found Error', ToastAndroid.SHORT);
      if (string.includes('Permission denied'))
        if (Platform.Version > 29) this._check();
    }
  };

  //? email: test@test.com
  //? pass: 12345

  checkGuest = () => {
    this.setState({spinner: true});
    setTimeout(() => {
      this.setState({spinner: false});
      this.props.navigation.navigate('Home', {guest: true});
    }, 1000);
  };

  checkCredentials = contents => {
    this.setState({
      spinner: true,
    });
    try {
      const {email, password} = this.state;
      const StringVal = this.state.txtFileData;
      const emailMatch = StringVal.match(/(email:)\s.+/g).toString();
      const passMatch = StringVal.match(/(pass:)\s.+/g).toString();
      const emailID = emailMatch.slice(7);
      const pass = passMatch.substr(6);
      if (emailID == email && pass == password) {
        this.setState({
          spinner: false,
          email: '',
          password: '',
        });
        return this.props.navigation.navigate('Home', {guest: false});
      } else {
        console.log('email', email);
        console.log('pass', password);
        this.setState({
          spinner: false,
          email: '',
          password: '',
        });
        ToastAndroid.show('Wrong Credentials', ToastAndroid.SHORT);
      }
    } catch (e) {
      this.setState({
        spinner: false,
        email: '',
        password: '',
      });
      alert('Something when wrong', e);
    }
  };

  _guestLogIn = () => {
    Alert.alert('Guest LogIn', 'You will be logged in as Guest', [
      {
        style: 'default',
        onPress: () => this.ReadTxtFile(true),
        text: 'Log In',
      },
      {
        style: 'cancel',
        onPress: () => console.log('Cancel Pressed on Guest Log in'),
        text: 'Cancel',
      },
    ]);
  };

  renderLoader = () => {
    return (
      <View style={[styles.containers, styles.horizontal]}>
        <ActivityIndicator size="large" color="#e44f3bd5" />
      </View>
    );
  };

  render() {
    const {email, password, isLoading} = this.state;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Spinner visible={this.state.spinner} color="red" />
        {this.state.focused && <View style={{height: 100}} />}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect={false}
            onFocus={() => {
              this.setState({focused: true});
              LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
            }}
            onBlur={() => {
              this.setState({focused: false});
              LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
            }}
            onEndEditing={() => {
              this.setState({focused: false});
              LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
            }}
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({email})}
            value={email}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onFocus={() => {
              this.setState({focused: true});
              LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
            }}
            onBlur={() => {
              this.setState({focused: false});
              LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
            }}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
        </View>

        <TouchableHighlight
          disabled={isLoading}
          underlayColor={'#9c9c9c'}
          style={[styles.buttonContainer, styles.loginButton]}
          // onPress={() => this.onClickListener('login')}
          onPress={() => {
            this.ReadTxtFile(false);
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#80808094',
              height: 1,
              width: 75,
            }}
          />
          <View style={{marginHorizontal: 10}}>
            <Text style={{color: '#212121b0'}}>OR</Text>
          </View>
          <View
            style={{
              backgroundColor: '#80808094',
              height: 1,
              width: 75,
            }}
          />
        </View>
        <View style={{marginTop: height * 0.02}}>
          <TouchableOpacity underlayColor={'#fff'} onPress={this._guestLogIn}>
            <View
              style={{
                borderWidth: height * 0.0035,
                borderColor: '#e44f3bd5',
                borderRadius: height * 0.015,
                alignItems: 'center',
                justifyContent: 'center',
                height: height * 0.08,
                width: width * 0.12,
                backgroundColor: 'transparent',
              }}>
              <Text style={{color: '#e44f3bd5', fontSize: height * 0.024}}>
                Log In as Guest
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* {isLoading && this.renderLoader()} */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: width * 0.4,
    height: height * 0.1,
    marginBottom: width * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: height * 0.1,
    marginLeft: width * 0.01,
    borderBottomColor: '#FFFFFF',
    // flex: 1,
  },
  inputIcon: {
    width: height * 0.025,
    height: height * 0.025,
    marginLeft: height * 0.024,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: height * 0.1,
    width: width * 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: width * 0.02,
  },
  loginButton: {
    backgroundColor: '#e44f3bd5',
  },
  loginText: {
    color: 'white',
    fontSize: height * 0.026,
  },
  containers: {
    position: 'absolute',
    // flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: height * 0.02,
  },
});
