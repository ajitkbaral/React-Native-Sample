import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SignUpScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text>Signup</Text>
        <Button title="Login" onPress={() => navigation.goBack()} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});

export default SignUpScreen;