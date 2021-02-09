import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Header = ({navigation}) => {
  useEffect(()=>{ 
    console.log('sdsdsd');
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Header</Text>
    </View>
  );
};
export default Header;