import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import style from './style';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import modalStyle from './modalsStyling';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import Check from 'react-native-vector-icons/AntDesign';

const { height, width } = Dimensions.get('window');
export default class App extends Component {
  state = {
    isModalVisible: false,
    airTemp: true,
    currentTemp: 0,
    setTemp: 0,
    preWei: 3,
    toggle: false,
    currentAirTemperature: 35,
    setTempList: [],
    airTempList: [],
    temperatureHistory:[],
    date: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    hour: new Date().getHours(),
    minutes: new Date().getMinutes(),
  }
  componentDidMount() {
    const high = this.props.airHigherTemp;
    const lower = this.props.airLowerTemp;

    if (this.state.currentAirTemperature > high || this.state.currentAirTemperature < lower) {
      this.setState({ airTemp: false })
    } else {
      this.setState({ airTemp: true })
    }
  }
  _renderMyList = ({ item }) => (
    <View style={{ flex: 1, }}>
      <View style={modalStyle.renderMyListContainer}>
        <Text style={modalStyle.renderListHeading1}>
          {this.state.date}/{this.state.month}/{this.state.year}
        </Text>
        <Text style={modalStyle.renderListHeading2}>
          {this.state.hour}:{this.state.minutes}
        </Text>
        <Text style={modalStyle.renderListSetTemp}>
          {item.setTemperature}
        </Text>
        <Text style={modalStyle.renderListAirTemp}>
        {item.currentTemperature}
        </Text>
      </View>
    </View>
  )
  openToggel = () => {
    this.setState({ toggle: !this.state.toggle, currentTemp: null,setTemp:null })
  }
  submitCondition = () => {
    const historyData = this.state.currentTemp;
    const historyData2 = this.state.setTemp;
    let unit;
    !this.props.value ? (unit = '\u2103') : (unit = '\u2109');
    if (this.state.currentTemp == null || this.state.setTemp == null) {
      alert('Type Plase Or Go Back')
    }
    else if(this.state.currentTemp <= 20 || this.state.currentTemp >= 39 || this.state.setTemp <= 20 || this.state.setTemp >= 39){
      alert('Not Accepted Temperature Will Set Greater Then 20 And Less Than 39')
    }
    else {
      this.setState({ toggle: !this.state.toggle });
      this.state.temperatureHistory.push({currentTemperature:this.state.currentTemp + unit,setTemperature:this.state.setTemp + unit}); 
    }
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };



  render() {
    return (
      <View>
        {
          this.props.locker ? (
            <View style={style.TemperatureView} >
              <View style={style.Temperature}>
                <View style={style.skinInerContainer}>
                  <View style={style.skinIner}>
                    <View style={{ flex: 1, }}>
                      <Text style={style.currentTempText}>
                        Current Temperature
                      </Text>
                      <View style={style.boxUperStyle}>
                        <TouchableOpacity style={style.likeInputOxygen} onPress={() => this.openToggel()}>
                          <Text
                            style={style.tempInputCur} >
                            {this.state.currentTemp}
                          </Text>
                        </TouchableOpacity>
                        {!this.props.value ? (
                          <Text style={style.centiUper}>
                            {'\u2103'}
                          </Text>
                        ) : (
                            <Text style={style.centiUper}>
                              {'\u2109'}
                            </Text>
                          )
                        }
                        <TouchableOpacity style={style.iconOpenRow} onPress={() => this.toggleModal()}>
                          <NewOpen name="open-in-new" size={width * .035} color="black" />
                        </TouchableOpacity>
                        <View style={{ position: 'absolute', right: width * -.01, top: height * .09, }}>
                          <Alarm name={'alarm-light'} size={width * .055} color={this.state.airTemp ? '#0ae916' : 'red'} />
                        </View>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, }}>
                      <View>
                        <Text style={style.setTemp}>
                          Set Temperature
                      </Text>
                        <View style={style.boxLowerStyle}>
                          <TouchableOpacity style={style.likeInputMin} onPress={() => this.openToggel()}>
                            <Text style={style.tempInputSet}>
                              {this.state.setTemp}
                            </Text>
                          </TouchableOpacity>
                          {!this.props.value ? (
                            <Text style={style.centiLower}>
                              {'\u2103'}
                            </Text>
                          ) : (
                              <Text style={style.centiLower}>
                                {'\u2109'}
                              </Text>
                            )
                          }
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ) : (
              <View style={style.TemperatureView}>
                <View style={style.Temperature}>
                  <View style={style.skinInerContainer}>
                    <View style={style.skinIner}>
                      <View style={{ flex: 1, }}>
                        <Text style={style.currentTempText}>
                          Current Temperature
                        </Text>
                        <View style={style.boxUperStyle}>
                          <View style={style.likeInputOxygen}>
                            <Text
                              style={style.tempInputCur} >
                              {this.state.currentTemp}
                            </Text>
                          </View>
                          {!this.props.value ? (
                            <Text style={style.centiUper}>
                              {'\u2103'}
                            </Text>
                          ) : (
                              <Text style={style.centiUper}>
                                {'\u2109'}
                              </Text>
                            )
                          }
                          <View style={style.iconOpenRow}>
                            <NewOpen name="open-in-new" size={width * .035} color="red" />
                          </View>
                          <View style={{ position: 'absolute', right: width * -.01, top: height * .09, }}>
                            <Alarm name={'alarm-light'} size={width * .055} color={this.state.airTemp ? '#0ae916' : 'red'} />
                          </View>
                        </View>
                      </View>
                      <View style={{ flexDirection: 'row', flex: 1, }}>
                        <View>
                          <Text style={style.setTemp}>
                            Set Temperature
                          </Text>
                          <View style={style.boxLowerStyle}>
                            <View style={style.likeInputMin}>
                              <Text style={style.tempInputSet}>
                                {this.props.airLowerTemp}
                              </Text>
                            </View>
                            {!this.props.value ? (
                              <Text style={style.centiLower}>
                                {'\u2103'}
                              </Text>
                            ) : (
                                <Text style={style.centiLower}>
                                  {'\u2109'}
                                </Text>
                              )
                            }
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
        <Modal
          animationIn="bounceIn"
          animationOut="bounceOut"
          isVisible={this.state.toggle}
          style={modalStyle.insertWeightModal}>
          <View style={modalStyle.insertWeightContainer}>
            <View style={modalStyle.insertWeightInner}>
              <View style={modalStyle.insertWeightHeader}>
                <View style={modalStyle.inserWeightHeaderInner}>
                  <TouchableOpacity onPress={this.openToggel} style={modalStyle.inserBackBotton}>
                    <Back name={'keyboard-backspace'} size={width * .03} color='white' />
                  </TouchableOpacity>
                  <Text style={modalStyle.inserHeaderHeading}>
                    Air Temperature
                  </Text>
                </View>
              </View>
              <View style={modalStyle.inserBodyConatiner}>
                <View style={modalStyle.inserBodyInner}>
                  <Text style={modalStyle.inserTypeHeading}>
                    Current Temperature
                  </Text>
                  <View style={modalStyle.inserTextinputView}>
                    <TextInput
                      placeholder='Type Here'
                      keyboardType="number-pad"
                      maxLength={3}
                      style={modalStyle.inserTextinput}
                      onChangeText={e => this.setState({ currentTemp: e })}
                    />
                  </View>
                  {!this.props.value ? (
                    <Text style={style.centiLower}>
                      {'\u2103'}
                    </Text>
                  ) : (
                      <Text style={style.centiLower}>
                        {'\u2109'}
                      </Text>
                    )
                  }
                </View>
                <View style={modalStyle.inserBodyInner}>
                  <Text style={modalStyle.inserTypeHeading}>
                    Set Temperature
                  </Text>
                  <View style={modalStyle.inserTextinputView}>
                    <TextInput
                      placeholder='Type Here'
                      keyboardType="number-pad"
                      maxLength={3}
                      style={modalStyle.inserTextinput}
                      onChangeText={e => this.setState({ setTemp: e })}
                    />
                  </View>
                  {!this.props.value ? (
                    <Text style={style.centiLower}>
                      {'\u2103'}
                    </Text>
                  ) : (
                      <Text style={style.centiLower}>
                        {'\u2109'}
                      </Text>
                    )
                  }
                </View>
              </View>
              <View style={modalStyle.inserFooterContainer}>
                <View style={modalStyle.inserFooterInner}>
                  <TouchableOpacity style={modalStyle.inserSubmitBottonView}
                    onPress={this.submitCondition}>
                    <Text style={modalStyle.inserSubmitText}>
                      Submit
                    </Text>
                    <Check name={'checkcircle'} size={width * .012} color='white' style={modalStyle.check} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationIn="slideInUp"
          animationOut="slideOutDown"
          isVisible={this.state.isModalVisible}
          style={modalStyle.modalMainContainer}>
          <View style={{ flex: 1, }}>
            <View style={modalStyle.haiderContainer}>
              <View style={modalStyle.headerInner}>
                <Text style={modalStyle.headerHeading}>
                  Air Temperature History
                </Text>
                <View >
                  <TouchableOpacity onPress={() => this.toggleModal()} style={modalStyle.submit}>
                    <Text style={modalStyle.alarmText}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={modalStyle.bodyMainContainer}>
              <View style={modalStyle.bodyContainer}>
                <View style={modalStyle.historyContentHeadingView}>
                  <Text style={modalStyle.headingDate}>
                    Date
                                    </Text>
                  <Text style={modalStyle.headingTime}>
                    Time
                                    </Text>
                  <Text style={modalStyle.headingWeight}>
                    Previous Set Temperature
                  </Text>
                  <Text style={modalStyle.headingSetTemp}>
                    Previous Air Temperature
                  </Text>
                </View>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                >
                  <View style={{
                    flexDirection: 'row'
                  }}>
                    <FlatList
                      style={{ marginTop: height * .01 }}
                      data={this.state.temperatureHistory}
                      renderItem={this._renderMyList}
                    />
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </Modal>
      </View >

    )
  }
}