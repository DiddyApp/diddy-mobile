import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { NextIcon } from '../../components/icons.component';
// import { bgIntroImg } from '../../assets/assets';
import IntroSlider from '../../components/introslider.component';
import contents from '../../utils/introContents';

const bgIntroImg = require('../../assets/bgImage.png');

// const contents = 
const SplashScreen = ({navigation}) => {
  const [active, setActive] = useState(0);
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