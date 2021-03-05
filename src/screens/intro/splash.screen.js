import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

// const contents = 
const SplashScreen = ({navigation}) => {
  const state = useSelector(state=>state);
  console.log(state);
  useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate('Welcome');
    },3000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'white' }}>
          <Text style={styles.title}> DIDDY </Text>
      </View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title:{
    fontFamily: 'Tomorrow',
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 36,
    fontWeight: "bold",
    lineHeight: 50,
    letterSpacing: 0.2,
    color: '#333333'
  },
});
export default SplashScreen;