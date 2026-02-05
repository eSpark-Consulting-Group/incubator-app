import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './scr/splash/Index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);