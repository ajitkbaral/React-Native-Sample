import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Category from './components/home/Category';
import HomeItem from './components/home/HomeItem';

const { height, width } = Dimensions.get('window');
class HomeScreen extends Component {

    goToDetails() {
        this.props.navigation.navigate('Details');
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView scrollEventThrottle={16}>
                    <View style={{ flex: 1, paddingTop: 20, backgroundColor: '#fff' }}>
                        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }} onPress={() => this.navigate()} >What can we help your find?
                        </Text>
                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity onPress={() => this.goToDetails()}>
                                    <Category imageUri={require('../assets/home.jpg')} name="Home" />
                                </TouchableOpacity>
                                <Category imageUri={require('../assets/home.jpg')} name="Experience" />
                                <Category imageUri={require('../assets/home.jpg')} name="Resturants" />
                                <Category imageUri={require('../assets/home.jpg')} name="Home" />
                                <Category imageUri={require('../assets/home.jpg')} name="Home" />
                                <Category imageUri={require('../assets/home.jpg')} name="Home" />
                            </ScrollView>
                        </View>
                    </View>
                    <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: '700' }}>Introduction Airbnb Plus</Text>
                        <Text>A new selection of homes verified for quality & confort</Text>
                        <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                            <Image source={require('../assets/home.jpg')} style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#ddd' }} />
                        </View>
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>Homes around a world</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 40 }}>
                            <HomeItem width={width} />
                            <HomeItem width={width} />
                            <HomeItem width={width} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >
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

export default HomeScreen;