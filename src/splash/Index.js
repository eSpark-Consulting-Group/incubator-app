import React, {Component} from 'react';
import Splash from './Splash';
import Login from '../navigation/Index';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {currentScreen: 'Splash'};
    setTimeout(() => {
      this.setState({currentScreen: 'Login'});
    }, 7500);
  }

  render() {
    const {currentScreen} = this.state;
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />; //! splash screen removed
    return mainScreen;
  }
}

export default Main;
