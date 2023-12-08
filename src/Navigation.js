// src/Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import HabitTrackingScreen from './screens/HabitTrackingScreen';
import GoalSettingScreen from './screens/GoalSettingScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HabitTracking" component={HabitTrackingScreen} />
        <Stack.Screen name="GoalSetting" component={GoalSettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
