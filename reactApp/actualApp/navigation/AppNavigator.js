import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import homeScreen from '../screens/HomeScreen';
import logInScreen from '../screens/logInScreen'
/*
public function changeScreen(var pageToChangeTo) {
  return
}
*/
export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  HomeScreen: homeScreen,
  LogIn:logInScreen,


});
