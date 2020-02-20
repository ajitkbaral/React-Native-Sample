import React, { Component } from 'react';
import { View, Text, StyleSheet, RefreshControl, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';


const Item = ({ id, title, completed, goToDetailsHandler }) => {

    return (
        <TouchableOpacity onPress={goToDetailsHandler}>
            <View style={{ paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderColor: '#ddd' }}>
                <Text key={id}>{title}</Text>
            </View>
        </TouchableOpacity >
    )
}

class FeedScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    isLoading: false,
                    dataSource: json
                })
            }).catch(error => {
                console.log(error);

            });
    }

    goToDetailsHandler = (item) => {
        this.props.navigation.navigate('Feed Details', { item })
    }

    render() {
        // if (this.state.isLoading) {
        //     return (
        //         <View style={styles.loadingContainer}>
        //             <ActivityIndicator></ActivityIndicator>
        //             <Text style={{ marginTop: 10 }}>Loading...</Text>
        //         </ View>
        //     )
        // } else {

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                        <Item title={item.title} id={item.id} completed={item.completed} goToDetailsHandler={() => this.goToDetailsHandler(item)} />
                    }
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isLoading}
                            onRefresh={this.loadData()}
                        />}
                >
                </FlatList>
            </View>
        )
        // }
    }
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
})
export default FeedScreen;