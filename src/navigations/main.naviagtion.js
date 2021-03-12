import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import createGoalScreen from '../screens/intro/creategoal.screen';
import dashboardScreen from '../screens/dashboard/index.screen';
import { useSelector } from 'react-redux';
import { HomeIcon, ArticleIcon, NewIcon, PremiumIcon, AccountIcon } from '../components/icons.component';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const onboardingRoutes = [
  { 
    name: 'goalScreen',
    component: createGoalScreen
  }
];

const mainRoutes= [
  { 
    name: 'Home',
    component: dashboardScreen,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <HomeIcon />
      )
    }
  },
  { 
    name: 'Articles',
    component: dashboardScreen,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <ArticleIcon />
      )
    }
  },
  { 
    name: 'Create',
    component: dashboardScreen,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <NewIcon />
      ),
      tabBarOptions:(showLabel) => {
        return { showLabel: false }
      }
    }
  },
  { 
    name: 'Premium',
    component: dashboardScreen,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <PremiumIcon />
      )
    }
  },
  { 
    name: 'Account',
    component: dashboardScreen,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <AccountIcon />
      )
    }
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
      {!states.isBoarded ? <Stack.Navigator
        screenOptions={{
          headerShown: false,
          initialRouteName: mainScreen,
          independent: true
        }}>
          
      {onboardingRoutes.map((r, i) => <Stack.Screen key={i} name={r.name} component={r.component}  />) }
      </Stack.Navigator> :
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        tabStyle: {marginTop: 10, padding: 0, height: 60},
        labelStyle:{
          fontSize: 10,
          fontWeight: '500',
          padding: 0,
          marginTop: 0
        },
        style:{
          height: 100
        }
      }}>
        {mainRoutes.map((r, i) => <Tab.Screen key={i} name={r.name} component={r.component} options={r.navigationOptions} />) }
      </Tab.Navigator>
      }

      
    </>
  );
}


export default MainNavigation;
