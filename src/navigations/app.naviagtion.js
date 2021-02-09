import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/login.screen';
import SignUpScreen from '../screens/auth/signup.screen';
import WelcomeScreen from '../screens/intro/index.screen';
import SplashScreen from '../screens/intro/splash.screen';

const Stack = createStackNavigator();
const isLoggedIn=false;
const welcome=true;

const AppNavigation = () => {
  return (
    <>
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false,
                initialRouteName: 'Splash'
              }}>
                <Stack.Screen name="Splash" component={SplashScreen}  />
                <Stack.Screen name="Welcome" component={WelcomeScreen}  />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

export default AppNavigation;