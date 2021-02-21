import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RequestBookScreen from '../screens/ExchangeScreen';
import DonatetBookScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/WelcomeScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const TabNavigator = createBottomTabNavigator(
  {
    Homescreen: {
      screen: DonatetBookScreen,
    },
    Exhange: {
      screen: RequestBookScreen,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'Homescreen') {
          return (
            <Image
              style={{ height: 28, width: 36 }}
              source={require('../assets/Home.png')}
            />
          );
        } else if (routeName === 'Exhange') {
          return (
            <Image
              style={{ height: 32, width: 32 }}
              source={require('../assets/Exchange.png')}
            />
          );
        }
      },
    }),
  }
);

