import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/login.screen';
import WelcomeScreen from '../screens/intro/index.screen';

const Stack = createStackNavigator();
const intro=false;

const AuthNavigation = () => {
  return (
    <>
    {intro ?
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        :
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    }
    </>
  );
}

export default AuthNavigation;