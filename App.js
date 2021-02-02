import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './src/navigations/app.naviagtion';
import { setCustomText } from 'react-native-global-props';

const App = () => {
  
  useEffect(()=>{ 
    console.log('sdsdsd');
    SplashScreen.hide();
  }, []);
  return (
    <>
      <AppNavigation />
    </>
  );
};

const customTextProps = {
  style: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Tomorrow-Thin' : 'Tomorrow-thin',
    color: 'black'
  }
};
setCustomText(customTextProps);

export default App;
