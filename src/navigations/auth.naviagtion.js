import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/login.screen';
import SignUpScreen from '../screens/auth/signup.screen';
import WelcomeScreen from '../screens/intro/index.screen';
import SplashScreen from '../screens/intro/splash.screen';
import ForgotScreen from  '../screens/auth/forgot.screen';
import createGoalScreen from '../screens/intro/creategoal.screen';

const Stack = createStackNavigator();
const routes = [
  { name: 'Splash', component: SplashScreen },
  { name: 'Welcome', component: WelcomeScreen },
  { name: 'SignUp', component: SignUpScreen },
  { name: 'Login', component: LoginScreen },
  { name: 'Forgot', component: ForgotScreen }
]

const AuthNavigation = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        initialRouteName: 'Splash',
        independent: true
      }}>
        {routes.map((r, i) => <Stack.Screen key={i} name={r.name} component={r.component}  />)}
      </Stack.Navigator>
    </>
  );
}

export default AuthNavigation;