import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Switch, Image, StatusBar, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import style from './weightStyle';
import comStyle from './weightCompStyle';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import NewOpen from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import Status from 'react-native-vector-icons/MaterialIcons';
import Send from 'react-native-vector-icons/FontAwesome';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import SwitchToggle from 'react-native-switch-toggle';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../../../utils/fonts';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import NumericInput from 'react-native-numeric-input'
import Check from 'react-native-vector-icons/AntDesign';

const { height, width } = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            toggle: false,
            currentWei: 0,
            preWei: 3,
            weight: false,
            dateList: [],
            date: new Date().getDate(),
            month: new Date().getMonth() + 1,
            year: new Date().getFullYear(),
            hour: new Date().getHours(),
            minutes: new Date().getMinutes(),
        }
    }
    _renderMyList = ({ item }) => (
        <View style={{ flex: 1, }}>
            <View style={style.renderListContainer}>
                <Text style={style.renderListHeading1}>
                    {this.state.date}/{this.state.month}/{this.state.year}
                </Text>
                <Text style={style.renderListHeading2}>
                    {this.state.hour}:{this.state.minutes}
                </Text>
                <Text style={style.renderListHeading1}>
                    {item}
                </Text>
            </View>
        </View>
    )
    openToggel = () => {
        this.setState({ toggle: !this.state.toggle, currentWei: null })
    }
    submitCondition = () => {
        const historyData = this.state.currentWei;
        let unit;
        !this.props.value ? (unit = 'kg') : (unit = 'lb');
        if (this.state.currentWei == null) {
            alert('Type Weight')
        }
        else {
            this.state.dateList.push(historyData + unit)
            this.setState({ toggle: !this.state.toggle });
        }
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });

    };
    render() {
        console.log(this.state.dateList)
        const showData = this.state.dateList;
        return (
            <View>
                {
                    this.props.locker ? (
                        <View style={comStyle.TemperatureView} >
                            <View style={comStyle.Temperature}>
                                <View style={comStyle.weighHeaderContainer}>
                                    <View style={{ flex: 1, paddingLeft: width * .005 }}>
                                        <Text style={comStyle.currentTempText}>
                                            Current Weight
                                        </Text>
                                        <View style={comStyle.boxUperStyle}>
                                            <TouchableOpacity style={comStyle.likeInputOxygen} onPress={() => this.openToggel()}>
                                                <Text
                                                    style={comStyle.tempInputCur} >
                                                    {this.state.currentWei}
                                                </Text>
                                            </TouchableOpacity>
                                            {
                                                !this.props.value ? (
                                                    <Text style={comStyle.kgUper}>
                                                        kg
                                                    </Text>
                                                ) : (
                                                        <Text style={comStyle.pondUper}>
                                                            £
                                                        </Text>
                                                    )
                                            }
                                            <TouchableOpacity style={comStyle.iconOpenRow} onPress={() => this.toggleModal()}>
                                                <View>
                                                    <NewOpen name="open-in-new" size={width * .035} color="black" />
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={comStyle.zeroBotton}
                                                onPress={() => this.setState({ currentWei: 0 })}
                                            >
                                                <Text style={comStyle.zeroText}>
                                                    Auto Zero
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ) : (
                            <View style={comStyle.TemperatureView} >
                                <View style={comStyle.Temperature}>
                                    <View style={comStyle.weighHeaderContainer}>
                                        <View style={{ flex: 1, paddingLeft: width * .005 }}>
                                            <Text style={comStyle.currentTempText}>
                                                Current Weight
                                            </Text>
                                            <View style={comStyle.boxUperStyle}>
                                                <View style={comStyle.likeInputOxygen}>
                                                    <Text
                                                        style={comStyle.tempInputCur} >
                                                        {this.state.currentWei}
                                                    </Text>
                                                </View>
                                                {
                                                    !this.props.value ? (
                                                        <Text style={comStyle.kgUper}>
                                                            kg
                                                        </Text>
                                                    ) : (
                                                            <Text style={comStyle.pondUper}>
                                                                £
                                                            </Text>
                                                        )
                                                }
                                                <View style={comStyle.iconOpenRow} >
                                                    <View>
                                                        <NewOpen name="open-in-new" size={width * .035} color="red" />
                                                    </View>
                                                </View>
                                                <View style={comStyle.zeroBotton}
                                                // onPress={() => this.setState({ currentWei: 0 })}
                                                >
                                                    <Text style={comStyle.zeroText}>
                                                        Auto Zero
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}

                < Modal
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    isVisible={this.state.toggle}
                    style={style.insertWeightModal}>
                    <View style={style.insertWeightContainer}>
                        <View style={style.insertWeightInner}>
                            <View style={style.insertWeightHeader}>
                                <View style={style.inserWeightHeaderInner}>
                                    <TouchableOpacity onPress={this.openToggel} style={style.inserBackBotton}>
                                        <Back name={'keyboard-backspace'} size={width * .03} color='white' />
                                    </TouchableOpacity>
                                    <Text style={style.inserHeaderHeading}>
                                        Baby Weight
                                    </Text>
                                </View>
                            </View>
                            <View style={style.inserBodyConatiner}>
                                <View style={style.inserBodyInner}>
                                    <Text style={style.inserTypeHeading}>
                                        Type Weight
                                    </Text>
                                    <View style={style.inserTextinputView}>
                                        <TextInput
                                            placeholder='Type Here'
                                            keyboardType="number-pad"
                                            maxLength={3}
                                            style={style.inserTextinput}
                                            onChangeText={e => this.setState({ currentWei: e })}
                                        />
                                    </View>
                                    {
                                        !this.props.value ? (
                                            <Text style={style.inserConditionUnit}>
                                                kg
                                            </Text>
                                        ) : (
                                                <Text style={style.inserConditionUnit}>
                                                    £
                                                </Text>
                                        )
                                    }
                                </View>
                            </View>
                            <View style={style.inserFooterContainer}>
                                <View style={style.inserFooterInner}>
                                    <TouchableOpacity style={style.inserSubmitBottonView}
                                        onPress={this.submitCondition}>
                                        <Text style={style.inserSubmitText}>
                                            Submit
                                            </Text>
                                        <Check name={'checkcircle'} size={width * .012} color='white' style={style.check} />
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
                    style={style.modalMainContainer}>
                    <View style={{ flex: 1, }}>
                        <View style={style.haiderContainer}>
                            <View style={style.headerInner}>
                                <Text style={style.headerHeading}>
                                    Weight History
                                </Text>
                                <View >
                                    <TouchableOpacity onPress={() => this.toggleModal()} style={style.submit}>
                                        <Text style={style.alarmText}>Done</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={style.bodyMainContainer}>
                            <View style={style.bodyContainer}>
                                <View style={style.historyContentHeadingView}>
                                    <Text style={style.headingDate}>
                                        Date
                                    </Text>
                                    <Text style={style.headingTime}>
                                        Time
                                    </Text>
                                    <Text style={style.headingWeight}>
                                        Weight
                                    </Text>
                                </View>
                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                >
                                    <FlatList
                                        style={{ marginTop: height * .01 }}
                                        data={this.state.dateList}
                                        renderItem={this._renderMyList}
                                    />
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View >

        )
    }
}