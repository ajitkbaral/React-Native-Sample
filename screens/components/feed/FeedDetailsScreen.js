import React from 'react';
import { View, Text } from 'react-native-animatable';
import { StyleSheet } from 'react-native';


export default FeedDetailsScreen = ({ navigation, route }) => {
    const { item } = route.params;
    console.log(item);

    return (
        <View style={styles.container}>
            <Text>{item.title}</Text>
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
})