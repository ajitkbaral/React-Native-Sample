import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ImageBackground, Animated, Dimensions, Keyboard, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'native-base';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const INITIAL_HEIGHT = 150;

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholderText: 'Enter your mobile number'
        }
        this.loginHeight = new Animated.Value(INITIAL_HEIGHT);

        switch (Platform.OS) {
            case 'ios':
                this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
                this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
                break;
            case 'android':
                this.keyboardWillShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
                this.keyboardWillHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
                break;
        }

        this.keyboardHeightAnimation = new Animated.Value(0);
        this.forwardArrowOpacityAnimation = new Animated.Value(0);
        this.borderBottomWidthAnimation = new Animated.Value(0);


    }

    keyboardWillShow = (event) => {
        if (Platform.OS === 'android') {
            duration = 100;
        } else {
            duration = event.duration;
        }

        Animated.parallel([
            Animated.timing(this.keyboardHeightAnimation, {
                duration: duration + 100,
                toValue: event.endCoordinates.height + 10
            }),
            Animated.timing(this.forwardArrowOpacityAnimation, {
                duration: duration,
                toValue: 1,
            }),
            Animated.timing(this.borderBottomWidthAnimation, {
                duration: duration,
                toValue: 1
            }),
        ]).start();
    }

    keyboardWillHide = (event) => {
        if (Platform.OS === 'android') {
            duration = 100;
        } else {
            duration = event.duration;
        }
        Animated.parallel([
            Animated.timing(this.keyboardHeightAnimation, {
                duration: duration + 100,
                toValue: 0
            }),
            Animated.timing(this.forwardArrowOpacityAnimation, {
                duration: duration,
                toValue: 0,
            }),
            Animated.timing(this.borderBottomWidthAnimation, {
                duration: duration,
                toValue: 0
            }),
        ]).start();
    }

    increaseHeightOfLogin() {

        this.setState({
            placeholderText: '9810293847'
        })
        Animated.timing(this.loginHeight, {
            toValue: SCREEN_HEIGHT,
            duration: 500
        }).start(() => {
            this.refs.textInputMobile.focus();
        });
    }

    decreaseHeightOfLogin() {
        this.setState({ placeholderText: 'Enter your mobile number' })
        Keyboard.dismiss();
        Animated.timing(this.loginHeight, {
            toValue: INITIAL_HEIGHT,
            duration: 500
        }).start();
    }

    render() {
        const headerTextOpacityAnimation = this.loginHeight.interpolate({
            inputRange: [INITIAL_HEIGHT, SCREEN_HEIGHT],
            outputRange: [1, 0]
        });
        const marginTopAnimation = this.loginHeight.interpolate({
            inputRange: [INITIAL_HEIGHT, SCREEN_HEIGHT],
            outputRange: [25, 100]
        });
        const headerBackArrowOpacity = this.loginHeight.interpolate({
            inputRange: [INITIAL_HEIGHT, SCREEN_HEIGHT],
            outputRange: [0, 1]
        });
        const titleTextLeft = this.loginHeight.interpolate({
            inputRange: [INITIAL_HEIGHT, SCREEN_HEIGHT],
            outputRange: [100, 25]
        });
        const titleTextBottom = this.loginHeight.interpolate({
            inputRange: [INITIAL_HEIGHT, 400, SCREEN_HEIGHT],
            outputRange: [0, 0, 100]
        });
        const titleTextOpacity = this.loginHeight.interpolate({
            inputRange: [INITIAL_HEIGHT, SCREEN_HEIGHT],
            outputRange: [0, 1]
        });

        return (
            <View style={{ flex: 1 }}>
                <Animated.View style={{
                    position: 'absolute',
                    top: 60,
                    left: 25,
                    zIndex: 100,
                    width: 60, height: 60,
                    opacity: headerBackArrowOpacity,
                }}>
                    <TouchableOpacity onPress={() => this.decreaseHeightOfLogin()}>
                        <Icon name="md-arrow-back" style={{ color: 'black' }} />
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={{
                    position: 'absolute',
                    width: 60, height: 60,
                    right: 10,
                    bottom: this.keyboardHeightAnimation, // Animated
                    opacity: this.forwardArrowOpacityAnimation, // Animated,
                    zIndex: 100,
                    backgroundColor: '#54575e',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 30
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Tab')}>
                        <Icon name="md-arrow-forward" style={{ color: 'white' }} />
                    </TouchableOpacity>

                </Animated.View>


                <ImageBackground source={require('../assets/login_bg.jpg')} style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Animatable.View animation="zoomIn" iterationCount={1}
                            style={{ width: 100, height: 100, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>UBER</Text>
                        </Animatable.View>
                    </View>
                    {/* BOTTOM HALF */}
                    <Animatable.View animation="slideInUp" iterationCount={1}>
                        <Animated.View style={{
                            height: this.loginHeight,
                            backgroundColor: '#fff'
                        }}>
                            <Animated.View style={{
                                opacity: headerTextOpacityAnimation, // Animated
                                alignItems: 'flex-start',
                                paddingHorizontal: 25,
                                marginTop: marginTopAnimation // Animated
                            }}>
                                <Text style={{
                                    fontSize: 24
                                }}>Get moving with Uber</Text>
                            </Animated.View>

                            <TouchableOpacity onPress={() => this.increaseHeightOfLogin()}>
                                <Animated.View style={{
                                    marginTop: marginTopAnimation, // Animated
                                    paddingHorizontal: 25,
                                    flexDirection: 'row',
                                }}>
                                    <Animated.Text
                                        style={{
                                            fontSize: 24,
                                            color: 'grey',
                                            position: 'absolute',
                                            left: titleTextLeft,
                                            bottom: titleTextBottom,
                                            opacity: titleTextOpacity
                                        }}>
                                        Enter your mobile number</Animated.Text>
                                    <Image source={require('../assets/india.png')} style={{
                                        width: 24, height: 24, resizeMode: 'contain'
                                    }} />
                                    <Animated.View pointerEvents="none"
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            borderBottomWidth: this.borderBottomWidthAnimation
                                        }}>
                                        <Text style={{
                                            fontSize: 20,
                                            paddingHorizontal: 10
                                        }}>+977</Text>
                                        <TextInput
                                            ref="textInputMobile"
                                            keyboardType="numeric"
                                            style={{
                                                flex: 1,
                                                fontSize: 20,
                                            }}
                                            placeholder={this.state.placeholderText}
                                            underlineColorAndroid="transparent">
                                        </TextInput>
                                    </Animated.View>
                                </Animated.View>
                            </TouchableOpacity>
                        </Animated.View>
                        <View style={{
                            height: 70,
                            backgroundColor: '#fff',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            borderTopWidth: 1,
                            borderTopColor: '#e8e8ec',
                            paddingHorizontal: 25
                        }}>
                            <TouchableOpacity>
                                <Text style={{ color: '#5a7fdf', fontWeight: 'bold' }}>Or Connect Using a Social Account</Text>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </ImageBackground>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});

export default LoginScreen;