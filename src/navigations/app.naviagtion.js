import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './main.naviagtion';
import AuthNavigation from './auth.naviagtion';

const isLoggedIn=false;

const AppNavigation = () => {
  return (
    <>{!isLoggedIn && 
        <NavigationContainer>
          <AuthNavigation />
        {/* </NavigationContainer>
        :
        <NavigationContainer> */}
          <MainNavigation />
        </NavigationContainer>
      }
    </>
  );
}

export default AppNavigation;