import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import createGoalScreen from '../screens/intro/creategoal.screen';
import dashboardScreen from '../screens/dashboard/index.screen';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
const onboardingRoutes = [
  { 
    name: 'goalScreen',
    component: createGoalScreen
  }
];

const mainRoutes= [
  { 
    name: 'dashBoard',
    component: dashboardScreen
  },
  { 
    name: 'tasks',
    component: dashboardScreen
  },
  { 
    name: 'history',
    component: dashboardScreen
  }
];

const MainNavigation = () => {
  const [mainScreen, setMainScreen] = useState('goalScreen');
  const states = useSelector(state=>state.auth);
  useEffect(()=>{
    let mS = states.isBoarded ? 'dashBoard': 'goalScreen';
    console.log(mS)
    setMainScreen(mS);
  },[states]);
  console.log('nain===>', states)
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          initialRouteName: mainScreen,
          independent: true
        }}>
          
          {states.isBoarded ? mainRoutes.map((r, i) => <Stack.Screen key={i} name={r.name} component={r.component}  />) : onboardingRoutes.map((r, i) => <Stack.Screen key={i} name={r.name} component={r.component}  />)  }
      </Stack.Navigator>
    </>
  );
}


export default MainNavigation;