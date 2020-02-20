import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';


function handleBack(navigation) {
    navigation.goBack()
}
const alertDialog = (navigation) => {
    Alert.alert('Are you sure?', 'Do you want to go back to the home screen?', [
        { text: 'Yes', onPress: () => handleBack(navigation) }, { text: 'No', style: 'cancle' }
    ], { cancelable: false })
}

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Calendar style={{ flex: 1 }} />
            <View style={styles.container}>
                <Button title="Show Alert" onPress={() => alertDialog(navigation)} />
                <Button title="Go Back To Home Page" onPress={() => navigation.goBack()} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});

export default DetailsScreen;