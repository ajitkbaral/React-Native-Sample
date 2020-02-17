import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import FeedScreen from './screens/FeedScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';


function getHeaderTitle(route) {
  let routeName = route.state ? route.state.routes[route.state.index].name : 'Home'
  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Feed':
      return 'Feed';
    case 'Settings':
      return 'Settings'
  }
}

function shouldHeaderBeShown(route) {
  let routeName = route.state ? route.state.routes[route.state.index].name : 'Home'
  switch (routeName) {
    case 'Home':
      return false;
  }
}

const HomeStack = createStackNavigator();

const HomeStackNavigator = ({ navigation, route }) => {
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index > 0 ? false : true
    })
  }
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Details" component={DetailsScreen} options={{ headerShown: true }} />
    </HomeStack.Navigator>
  )
}

const SettingsScreen = () => (
  <View style={styles.container}>
    <Text>Settings Screen</Text>
  </View>
)

const Tab = createBottomTabNavigator();

const TabNavigatorScreen = () => (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        // iconName = focused
        //   ? 'ios-information-circle'
        //   : 'ios-information-circle-outline';
        iconName = 'md-home';
      } else if (route.name === 'Feed') {
        iconName = 'logo-rss';
        // iconName = focused ? 'ios-list-box' : 'ios-list';
      } else if (route.name === 'Settings') {
        iconName = 'ios-settings';
        // iconName = focused ? 'ios-list-box' : 'ios-list';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Home" component={HomeStackNavigator} />
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
)

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Tab" options={({ route }) => ({
        title: getHeaderTitle(route),
        headerShown: shouldHeaderBeShown(route)
      })} component={TabNavigatorScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

export default App;