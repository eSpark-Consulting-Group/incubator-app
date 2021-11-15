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
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import RNFS from 'react-native-fs';

import axios from 'axios';
import {useAsyncStorage} from '@react-native-community/async-storage';

const {getItem, setItem} = useAsyncStorage('userInfo');

export default class LoginView extends Component {
  state = {
    email: '',
    password: '',
    isLoading: false,
    txtFileData: '',
    spinner: false,
  };

  componentDidMount() {
    this.ReadTxtFile();
  }

  _storeData = async value => {
    try {
      await setItem(JSON.stringify(value));
    } catch (error) {
      console.log('LoginView -> error', error);
      // Error saving data
    }
  };

  ReadTxtFile = async () => {
    const myPath = RNFS.ExternalStorageDirectoryPath;
    try {
      const path = myPath + '/Patent/Login.txt';
      const contents = await RNFS.readFile(path, 'utf8');
      this.setState({txtFileData: contents.toString()});
      console.log(this.state.txtFileData, 'Read Text File mil gae');
    } catch (e) {
      console.log(e, 'error Read Text File');
    }
  };

  checkCredentials = () => {
    this.setState((state = this.state) => {
      state.spinner = true;
    });
    try {
      const {email, password} = this.state;
      const StringVal = this.state.txtFileData;
      const emailMatch = StringVal.match(/(email:)\s.+/g).toString();
      const passMatch = StringVal.match(/(pass:)\s.+/g).toString();
      const emailID = emailMatch.slice(7);
      const pass = passMatch.substr(6);
      if (emailID == email && pass == password) {
        this.setState((state = this.state) => {
          state.spinner = false;
        });
        return this.props.navigation.navigate('Home');
      } else {
        this.setState((state = this.state) => {
          state.spinner = false;
        });
        ToastAndroid.show('Wrong Credentials', ToastAndroid.SHORT);
      }
    } catch (e) {
      this.setState((state = this.state) => {
        state.spinner = false;
      });
      alert('Something when wrong', e);
    }
  };

  onClickListener = viewId => {
    const {email, password} = this.state;
    let data = {
      email,
      password,
    };

    this.setState({isLoading: true});
    axios
      .post(`http://192.168.0.105:8080/users/login`, data, {
        headers: {
          // Authorization: accessToken,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        this.setState({isLoading: false});

        if (response.data.login_user.length) {
          this._storeData(response.data);
          this.props.navigation.navigate('Home');
        }
      })
      .catch(error => {
        console.log('LoginView -> error', error);
      });
    // // Alert.alert('Alert', 'Button pressed ' + viewId);
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
      <View style={styles.container}>
        <Spinner visible={this.state.spinner} color="red" />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
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
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
        </View>

        <TouchableHighlight
          disabled={isLoading}
          style={[styles.buttonContainer, styles.loginButton]}
          // onPress={() => this.onClickListener('login')}
          onPress={() => {
            this.checkCredentials(), this.setState({email: '', password: ''});
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        {isLoading && this.renderLoader()}
      </View>
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
    width: 400,
    height: 50,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 400,
  },
  loginButton: {
    backgroundColor: '#e44f3bd5',
  },
  loginText: {
    color: 'white',
    fontSize: 16,
  },
  containers: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
