import React from 'react';
import { createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import homeScreen from '../screens/HomeScreen';
//import logInScreen from '../screens/logInScreen'
import logInScreen from '../screens/logInScreen/user_regv2'
/*
public function changeScreen(var pageToChangeTo) {
  return
}
*/
export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  HomeScreen: homeScreen,
  LogIn:logInScreen,



});
