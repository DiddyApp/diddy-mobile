import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './main.naviagtion';
import AuthNavigation from './auth.naviagtion';
import { useSelector } from 'react-redux';

const AppNavigation = () => {
  const state = useSelector(state=>state.auth);
  console.log(state);
  return (
    <>
      <NavigationContainer>
        {!state.isLoggedIn ?
          <AuthNavigation />
        :
          <MainNavigation /> 
        }
        </NavigationContainer>
    </>
  );
}

export default AppNavigation;