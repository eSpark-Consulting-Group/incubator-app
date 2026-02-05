import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import Modal from 'react-native-modal';
import SwitchToggle from 'react-native-switch-toggle';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import Check from 'react-native-vector-icons/AntDesign';
import NumericInput from 'react-native-numeric-input';
// import SysSettings from 'react-native-vector-icons/Octicons';
import {Fonts} from '../../../../utils/fonts';
import {TextInput} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      LockorUnlo: false,
      toggleWeight: false,
      toggleTemp: false,
      uperLimit: 99,
      lowerLimit: 91,
      airTemp: false,
      higher: 40,
      lower: 20,
    };
  }

  changeValueHandler = () => {
    if (this.state.uperLimit == null) {
      alert('Empty Higher Temperature');
      this.setState({
        airTemp: this.state.airTemp,
      });
    } else if (this.state.lowerLimit == null) {
      alert('Empty lower Temperature');
      this.setState({
        airTemp: this.state.airTemp,
      });
    } else if (
      this.state.uperLimit < 90 ||
      this.state.uperLimit > 100 ||
      this.state.lowerLimit < 90 ||
      this.state.lowerLimit > 100
    ) {
      alert('Please Set Value Above 90 In Lower and Lower 100 Value In Higher');
      this.setState({
        airTemp: this.state.airTemp,
      });
    } else {
      this.setState(
        {
          airTemp: !this.state.airTemp,
        },
        () => {
          this.props.spo2Uper(this.state.uperLimit),
            this.props.spo2Lower(this.state.lowerLimit);
        },
      );
    }
  };
  toggleAir = () => {
    this.setState({airTemp: !this.state.airTemp});
  };

  render() {
    // console.log(this.state.uperLimit)
    // console.log(this.state.lowerLimit)
    return (
      <View>
        <TouchableOpacity style={style.listView} onPress={this.toggleAir}>
          <Text style={style.listText}>SPO2</Text>
          <Alarm name={'alarm-light'} size={width * 0.02} />
        </TouchableOpacity>
        <Modal
          animationIn="slideInDown"
          animationOut="slideOutUp"
          isVisible={this.state.airTemp}
          style={style.modal}>
          <View style={style.modalInner}>
            <View style={style.modalContainer}>
              <View style={style.modalContainerInner}>
                <View style={style.headerContainer}>
                  <View style={style.headerInner}>
                    <TouchableOpacity
                      onPress={this.toggleAir}
                      style={style.backBotton}>
                      <Back
                        name={'keyboard-backspace'}
                        size={width * 0.03}
                        color="white"
                      />
                    </TouchableOpacity>
                    <Text style={style.headerHeading}>SPO2</Text>
                  </View>
                </View>
                <View style={style.bodyContainer}>
                  <View style={style.bodyInner}>
                    <Text style={style.currentHeading}>Upper Limit</Text>
                    {/* <TextInput
                                                placeholder='Type Here'
                                                keyboardType="number-pad"
                                                maxLength={5}
                                                style={style.currentInput}
                                                onChangeText={airCurrentTemp => this.setState({airCurrentTemp})}
                                                
                                            /> */}
                    <NumericInput
                      onChange={(uperLimit) => this.setState({uperLimit})}
                      totalWidth={width * 0.15}
                      totalHeight={height * 0.05}
                      initValue={this.state.uperLimit}
                      rounded
                    />

                    <Text style={style.currentHeading}>Lower Limit</Text>
                    <NumericInput
                      onChange={(lowerLimit) => this.setState({lowerLimit})}
                      totalWidth={width * 0.15}
                      totalHeight={height * 0.05}
                      initValue={this.state.lowerLimit}
                      rounded
                    />
                  </View>
                </View>
                <View style={style.footerContainer}>
                  <View style={style.footerInner}>
                    <TouchableOpacity
                      style={style.bottonView}
                      onPress={this.changeValueHandler}>
                      <Text style={style.bottonText}>Submit</Text>
                      <Check
                        name={'checkcircle'}
                        size={width * 0.015}
                        color="white"
                        style={style.check}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
