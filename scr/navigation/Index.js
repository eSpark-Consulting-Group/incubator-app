import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import Home from '../../scr/screens/home/Home';
const AppNavigator = createStackNavigator(
    {
      Home,
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      header: null,
      headerForceInset: { top: 'never', bottom: 'never' },
    },
  },
);
// const Drawer = createDrawerNavigator(
//   {
//     Map
//   },
//   {
//     headerModer: 'none',

//   },
// );
export default createAppContainer(AppNavigator)