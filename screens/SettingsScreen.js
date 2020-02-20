import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function SettingsScreen() {
    const [toggle, setToggle] = useState(false);
    const [name, setName] = useState('Ajit Kumar Baral');
    const [address, setAddress] = useState({ country: 'Nepal', state: 'Bagmati', zipcode: '44700' })

    const clickHandler = () => {
        if (!toggle) {
            setName('Mark Zuckerberg');
            setAddress({ country: 'USA', 'state': 'California', zipcode: '47890' })
        } else {
            setName('Ajit Kumar Baral');
            setAddress({ country: 'Nepal', 'state': 'Bagmati', zipcode: '44700' })
        }
        setToggle(!toggle);
    }

    return (
        <View style={styles.container}>
            <Text>Name: {name}</Text>
            <Text>County: {address.country}</Text>
            <Text>State: {address.state}</Text>
            <Text>Zip Code: {address.zipcode}</Text>
            <Button title="Change my information" onPress={clickHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export default SettingsScreen;