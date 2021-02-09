import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { NextIcon } from '../../components/icons.component';
// import { bgIntroImg } from '../../assets/assets';
import IntroSlider from '../../components/introslider.component';
import contents from '../../utils/introContents';

const bgIntroImg = require('../../assets/bgImage.png');

// const contents = 
const IntroScreen = ({ navigation }) => {
  const [active, setActive] = useState(0);
  const onClickPress = () => {
    if(active !== (contents.length-1)){
      setActive(active+1);
    }else{
      navigation.navigate('SignUp');
    }
  }
  return (
    <View style={styles.container}>
      <View style={{flex: 4, height: 100}}> 
        <ImageBackground source={bgIntroImg} style={styles.image}>
          <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <IntroSlider count={contents.length} active={active} />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.textInfo}>
        <Text style={styles.title}>{contents[active].title} </Text>
        <Text style={styles.description}>{contents[active].description}</Text>
        <TouchableOpacity style={styles.button} onPress={onClickPress}>
          <View></View>
          <Text style={styles.buttonText}>{contents[active].button}</Text>
          <NextIcon />
        </TouchableOpacity>
        {active === (contents.length -1) && 
          <View style={{flexDirection:'row', textAlign: 'center', justifyContent: 'center'}}>
            <Text style={styles.loginPreText}>Already have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              <Text style={{...styles.loginPreText, color: '#333'}}> Login</Text>
            </TouchableOpacity>
          </View>}
      </View>
    </View>
  );
};
// styles
const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  image:{
    flex: 1,
    position: 'relative',
    resizeMode: "cover",
    justifyContent: "center",
  },
  textInfo:{
    flex: 2, 
    height: 100,
    padding: 40
  },
  title:{
    fontFamily: 'Tomorrow',
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#333333'
  },
  description:{
    paddingTop: 30,
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 20,
    letterSpacing: 0.2,
    height: 100,
    color: '#333333'
  },
  button:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop: 30,
    backgroundColor: '#333333',
    borderRadius: 38,
    padding: 20
  },
  buttonText: {
    color:'#FFFFFF',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  loginPreText:{
    paddingTop: 10,
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    alignItems: 'center',
    letterSpacing: 0.2,
    color: 'rgba(51, 51, 51, 0.5)'
  }
});
export default IntroScreen;