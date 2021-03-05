import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import createGoalScreen from '../screens/intro/creategoal.screen';
import dashboardScreen from '../screens/dashboard';

const Stack = createStackNavigator();
const routes = [
  { 
    name: 'goalScreen',
    component: dashboardScreen
  },
  {
    name: 'createGoal',
    component: createGoalScreen
  }
]

const MainNavigation = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          initialRouteName: 'goalScreen',
          independent: true
        }}>
          {routes.map((r, i) => <Stack.Screen name={r.name} component={r.component}  />)}
      </Stack.Navigator>
    </>
  );
}

export default MainNavigation;