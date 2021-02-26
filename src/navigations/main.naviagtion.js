import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import createGoalScreen from '../screens/intro/creategoal.screen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <>
      {/* <Stack.Navigator
      screenOptions={{
          headerShown: false,
          initialRouteName: 'createGoal',
          independent: true
        }}>
      </Stack.Navigator> */}
    </>
  );
}

export default MainNavigation;