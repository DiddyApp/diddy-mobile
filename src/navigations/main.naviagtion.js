import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import createGoalScreen from '../screens/intro/creategoal.screen';

const Stack = createStackNavigator();
const routes = [
  { 
    name: 'goalScreen',
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
          {routes.map((r, i) => <Stack.Screen key={i} name={r.name} component={r.component}  />)}
      </Stack.Navigator>
    </>
  );
}


export default MainNavigation;