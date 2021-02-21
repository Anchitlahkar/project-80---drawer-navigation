import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {TabNavigator} from './components/tabNavigator'
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: {screen: WelcomeScreen},
  Drawer: {screen: AppDrawerNavigator },
});

const AppContainer = createAppContainer(AppNavigator);
