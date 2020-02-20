import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import FeedScreen from './screens/components/feed/FeedScreen';
import FeedDetailsScreen from './screens/components/feed/FeedDetailsScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
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
    case 'Feed':
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

const FeedStack = createStackNavigator();

const FeedStackNavigator = ({ navigation, route }) => {
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index > 0 ? false : true
    })
  }
  return (
    <FeedStack.Navigator initialRouteName="Feed">
      <FeedStack.Screen name="Feed" component={FeedScreen} />
      <FeedStack.Screen name="Feed Details" component={FeedDetailsScreen} options={{ headerShown: true }} />
    </FeedStack.Navigator>
  )
}


const Tab = createBottomTabNavigator();

const TabNavigatorScreen = () => (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName, badgeCount;

      if (route.name === 'Home') {
        // iconName = focused
        //   ? 'ios-information-circle'
        //   : 'ios-information-circle-outline';
        iconName = 'md-home';
        badgeCount = 0
      } else if (route.name === 'Feed') {
        iconName = 'logo-rss';
        // iconName = focused ? 'ios-list-box' : 'ios-list';
        badgeCount = 1
      } else if (route.name === 'Settings') {
        iconName = 'ios-settings';
        // iconName = focused ? 'ios-list-box' : 'ios-list';
        badgeCount = 2
      }
      return <IconWithBadge name={iconName} badgeCount={badgeCount} size={size} color={color} />;
    },
  })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Home" component={HomeStackNavigator} />
    <Tab.Screen name="Feed" component={FeedStackNavigator} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
)

function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

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

export default App;