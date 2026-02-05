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
import AirTemp from './airTemp/index';
import SkinTemp from './skinTemp/index';
import Spo2 from './spo2/index';
import Hr from './hr/index';

// import SysSettings from 'react-native-vector-icons/Octicons';
import {Fonts} from '../../../utils/fonts';
import {TextInput} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props);
    (this.state = {
      isModalVisible: false,
      LockorUnlo: false,
      toggleWeight: false,
      toggleTemp: false,
      higherAirValue: null,
      lowerAirValue: 22.1,
      skinHighTemp: 32.1,
      skinLowTemp: 34.1,
      spo2Upper: 99,
      spo2Lower: 91,
      hrUpper: 190,
      hrLower: 70,
    }),
      (this.handleAirHigher = this.handleAirHigher.bind(this));
    this.handleAirlower = this.handleAirlower.bind(this);
    // this.handleSkinCurrent = this.handleSkinCurrent.bind(this);
    this.handleSkinLow = this.handleSkinLow.bind(this);
    this.handleSkinHigh = this.handleSkinHigh.bind(this);
  }
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  collectData = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
    this.props.airHigTemp(this.state.higherAirValue);
    this.props.airLowTemp(this.state.lowerAirValue);
    this.props.skinHighTemp(this.state.skinHighTemp);
    this.props.skinLowTemp(this.state.skinLowTemp);
    // this.props.spo2Uper(this.state.spo2Upper);
    // this.props.spo2Lower(this.state.spo2Lower);
    // this.props.hrUper(this.state.hrUpper);
    // this.props.hrLower(this.state.hrLower);
    // this.props.modalOff(!this.state.isModalVisible);
  };
  handleAirHigher(child) {
    this.setState({
      higherAirValue: child,
    });
  }
  handleAirlower(child) {
    this.setState({
      lowerAirValue: child,
    });
  }
  handleSkinHigh(child) {
    this.setState({
      skinHighTemp: child,
    });
  }
  handleSkinLow(child) {
    this.setState({
      skinLowTemp: child,
    });
  }
  handleSpo2Uper = (child) => {
    this.setState({
      spo2Upper: child,
    });
  };
  handleSpo2Lower = (child) => {
    this.setState({
      spo2Lower: child,
    });
  };
  handleHrUper = (child) => {
    this.setState({
      hrUpper: child,
    });
  };
  handleHrLower = (child) => {
    this.setState({
      hrLower: child,
    });
  };

  handleAirHigh = (child) => {
    this.setState({higherAirValue: child});
  };

  handleAirLow = (child) => {
    this.setState({lowerAirValue: child});
  };

  render() {
    // console.log(this.state.skinCurrentTemp)
    // console.log(this.state.skinSetTemp)
    return (
      <View>
        {/* Component */}
        <TouchableOpacity style={style.mainList} onPress={this.toggleModal}>
          <Text style={style.listText}>Alarms Settings</Text>
          <Alarm name={'alarm-light'} size={width * 0.02} />
        </TouchableOpacity>
        {/* Modal */}
        <Modal
          animationIn="slideInDown"
          animationOut="slideOutUp"
          isVisible={this.state.isModalVisible}
          style={style.modalContainer}>
          <View style={style.modalInner}>
            <View style={style.boxConatainer}>
              <View style={style.boxInner}>
                {/* Box Header */}
                <View style={style.boxHeader}>
                  <View style={style.boxHeaderInner}>
                    <TouchableOpacity onPress={this.toggleModal}>
                      <Back
                        name={'keyboard-backspace'}
                        size={width * 0.04}
                        color="white"
                      />
                    </TouchableOpacity>
                    <Text style={style.headerHeading}>Alarms Settings</Text>
                    <TouchableOpacity
                      style={style.headerbotton}
                      onPress={() => {
                        console.log(this.state.higherAirValue, 'aya');
                        this.collectData();
                      }}>
                      <Text style={style.bottonText}>Submit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Box Body */}
                <View style={style.boxBody}>
                  <View style={style.boxBodyInner}>
                    {/* Air Temperature */}
                    <AirTemp
                      currentTemp={this.handleAirHigher}
                      setTemp={this.handleAirlower}
                      newAirHigh={this.handleAirHigh}
                      newAirLow={this.handleAirLow}
                    />
                    {/* Skin Temperature */}
                    <SkinTemp
                      highSkinTemp={this.handleSkinHigh}
                      lowerSkinTemp={this.handleSkinLow}
                    />
                    {/* Spo2 */}
                    <Spo2
                      spo2Uper={this.handleSpo2Uper}
                      spo2Lower={this.handleSpo2Lower}
                    />
                    {/* Hr */}
                    <Hr
                      hrUper={this.handleHrUper}
                      hrLower={this.handleHrLower}
                    />
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
