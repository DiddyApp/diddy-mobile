import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/login.screen';
import SignUpScreen from '../screens/auth/signup.screen';
import WelcomeScreen from '../screens/intro/index.screen';
import SplashScreen from '../screens/intro/splash.screen';
import ForgotScreen from  '../screens/auth/forgot.screen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <>
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            initialRouteName: 'Splash',
            independent: true
          }}>
            <Stack.Screen name="Splash" component={SplashScreen}  />
            <Stack.Screen name="Welcome" component={WelcomeScreen}  />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Forgot" component={ForgotScreen} />
        </Stack.Navigator>
    </>
  );
}

export default AuthNavigation;