/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import App from './scr/splash/Index';
import {name as appName} from './app.json';

LogBox.ignoreAllLogs(true)
AppRegistry.registerComponent(appName, () => App);
