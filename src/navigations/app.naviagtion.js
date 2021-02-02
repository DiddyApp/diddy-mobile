import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/login.screen';
import WelcomeScreen from '../screens/intro/index.screen';

const Stack = createStackNavigator();
const isLoggedIn=false;

const AppNavigation = () => {
  return (
    <>
    {/* {!isLoggedIn ? */}
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
              }}>
                <Stack.Screen name="Welcome" component={WelcomeScreen}  />
            </Stack.Navigator>
        </NavigationContainer>
    {/* //     :
    //     <NavigationContainer>
    //         <Stack.Navigator>
    //             <Stack.Screen name="Login" component={LoginScreen} />
    //         </Stack.Navigator>
    //     </NavigationContainer>
    // } */}
    </>
  );
}

export default AppNavigation;