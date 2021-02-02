import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const LoginScreen = () => {
  useEffect(()=>{ 
    console.log('sdsdsd');
  }, []);
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    </View>
  );
};
export default LoginScreen;