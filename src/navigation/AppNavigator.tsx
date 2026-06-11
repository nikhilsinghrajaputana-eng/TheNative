import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ForgotPassword from '../screens/ForgotPassword';
import Signup from '../screens/Signup';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';


const Stack = createNativeStackNavigator();
type AppNavigatorProps = {
  isDarkMode: boolean;
};

export default function AppNavigator({ isDarkMode }: AppNavigatorProps) {
  return (
    <NavigationContainer   theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
         <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotPassword}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}