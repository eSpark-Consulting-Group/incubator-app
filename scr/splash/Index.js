import React, { Component } from "react";
import { Text } from "react-native";

import Splash from "./Splash";
import Login from "../navigation/Index";


// import {withNavigation} from "react-navigation"

 class Main extends Component {

    // componentDidMount(){
    //     console.log(this.props, "splash")
    // }
    constructor(props){
        super(props);
        this.state = { currentScreen:'Splash'};
        // console.log('start doing some tasks for about 3 seconds')
        setTimeout(() => {


            // console.log('Done some tasks for about 3 seconds')
            this.setState({currentScreen:'Login'})

        }, 7500)


    }

    render(){
        const  {currentScreen} = this.state 
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />
        return mainScreen

    }
}

export default Main;
