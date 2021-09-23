import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import style from './oxygenStyle';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
const { height, width } = Dimensions.get('window');

export default class App extends Component {
  state = {
    isModalVisible: false
  }


  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    return (
      <View>
        <View style={style.TemperatureView}>
          <View style={style.Temperature}>
            <View style={style.skinInerContainer}>
              <View style={style.skinIner}>
                <View style={{ flex: 1, }}>
                  <Text style={style.currentTempText}>
                    Current Oxygen Level
                    </Text>
                  <View style={style.boxUperStyle}>
                    <View style={style.likeInputOxygen}>
                      <Text
                        style={style.tempInputCur} >
                        34.1
                        </Text>
                    </View>

                    <Text style={style.centiUper}>
                      %
                      </Text>
                    {
                      this.props.locker ? (
                        <TouchableOpacity style={style.iconOpenRow} onPress={this.toggleModal}>
                          <NewOpen name="open-in-new" size={width * .035} color="black" />
                        </TouchableOpacity>
                      ) : (
                          <View style={style.iconOpenRow}>
                            <NewOpen name="open-in-new" size={width * .035} color="red" />
                          </View>
                        )
                    }
                  </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, }}>
                  <View>
                    <Text style={style.setTemp}>
                      Normal Range
                      </Text>
                    <View style={style.boxLowerStyle}>
                      <View style={style.likeInputMin}>
                        <Text style={style.tempInputSet}>
                          21
                          </Text>
                      </View>

                      <Text style={style.centiLower}>
                        %
                        </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', }}>
                  </View>
                </View>
              </View>
            </View>
          </View>

        </View>
        <Modal
          animationIn="slideInUp"
          animationOut="slideOutDown"
          onBackdropPress={() => this.toggleModal()}
          onSwipeComplete={() => this.toggleModal()}
          swipeDirection="right"
          isVisible={this.state.isModalVisible}
          style={style.modalMainContainer}>
          <View style={{ flex: 1, }}>
            <View style={style.haiderContainer}>
              <View style={style.headerInner}>
                <Text style={style.headerHeading}>
                  Oxygen History
                                </Text>
                {/* <View style={style.headerIcon}>


                                    <Status name="notifications-active" size={width * .05} color="#05dd3bc5" style={{ marginHorizontal: width * .01 }} />
                                    <Text style={style.alarmText}>Current Status</Text>
                                </View> */}
                <View >
                  <TouchableOpacity onPress={() => this.toggleModal()} style={style.submit}>

                    <Text style={style.alarmText}>Done</Text>

                  </TouchableOpacity>

                </View>
              </View>

            </View>
            <View style={style.bodyMainContainer}>
              <View style={style.bodyContainer}>

              </View>
            </View>
          </View>
        </Modal>
      </View>

    )
  }
}