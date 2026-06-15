import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import style from './style';
import Modal from 'react-native-modal';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import Check from 'react-native-vector-icons/AntDesign';
import NumericInput from 'react-native-numeric-input';

const {height, width} = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      LockorUnlo: false,
      toggleWeight: false,
      toggleTemp: false,
      uperLimit: 190,
      lowerLimit: 70,
      airTemp: false,
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
      this.state.uperLimit < 70 ||
      this.state.uperLimit > 190 ||
      this.state.lowerLimit < 70 ||
      this.state.lowerLimit > 170
    ) {
      alert('Please Set Value Above 70 In Lower and Lower 170 Value In Higher');
      this.setState({
        airTemp: this.state.airTemp,
      });
    } else {
      this.setState(
        {
          airTemp: !this.state.airTemp,
        },
        () => {
          this.props.hrUper(this.state.uperLimit),
            this.props.hrLower(this.state.lowerLimit);
        },
      );
    }
  };
  toggleAir = () => {
    this.setState({airTemp: !this.state.airTemp});
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps.alarmFlag) {
      if (this.props.alarmFlag) {
        this.setState({
          airTemp: false,
        });
      }
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={style.listView} onPress={this.toggleAir}>
          <Text style={style.listText}>Heart Rate</Text>
          <Alarm name={'alarm-light'} size={width * 0.02} />
        </TouchableOpacity>
        <Modal
          animationIn="slideInDown"
          animationOut="slideOutUp"
          statusBarTranslucent
          isVisible={this.state.airTemp}>
          <KeyboardAvoidingView
            style={{
              height: height,
              alignItems: 'center',
            }}
            behavior="position">
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
                      <Text style={style.headerHeading}>Heart Rate</Text>
                    </View>
                  </View>
                  <View style={style.bodyContainer}>
                    <View style={style.bodyInner}>
                      <Text style={style.currentHeading}>Upper Limit</Text>
                      <NumericInput
                        onChange={uperLimit => this.setState({uperLimit})}
                        totalWidth={width * 0.15}
                        totalHeight={height * 0.05}
                        initValue={this.state.uperLimit}
                        rounded
                      />

                      <Text style={style.currentHeading}>Lower Limit</Text>
                      <NumericInput
                        onChange={lowerLimit => this.setState({lowerLimit})}
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
          </KeyboardAvoidingView>
        </Modal>
      </View>
    );
  }
}
