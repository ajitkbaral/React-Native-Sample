import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text>Detail Screen</Text>
        <Button title="Home Page" onPress={() => navigation.goBack()} />
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

export default DetailsScreen;