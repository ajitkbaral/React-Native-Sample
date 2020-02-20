import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { StyleSheet } from 'react-native';


class FeedDetailsScreen extends Component {
    render() {
        const {
            navigation, route
        } = this.props;
        const { item } = route.params;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="height">
                <Text>{item.title}</Text>
                <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                    <View style={styles.textView}>
                        <Text> Enter Name: </Text>
                    </View>
                    <TextInput style={styles.textInput} placeholder="Eg. John Doe" />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    textView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingLeft: 10
    }
});

export default FeedDetailsScreen;