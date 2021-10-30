import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../../scr/screens/home/Home';
import Login from '../login';

const AppNavigator = createStackNavigator(
  {
    Login,
    Home,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      header: null,
      headerForceInset: {top: 'never', bottom: 'never'},
    },
  },
);
export default createAppContainer(AppNavigator);
