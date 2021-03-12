import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
// import { CreateGoalIcon, NextIcon } from '../../components/icons.component';
// import CreateGoalForm from '../../components/forms/createGoal.form';
import MainHeader from '../../components/headers/main.header';
import PageView from '../../components/page.component';

const bgIntroImg = require('../../assets/bgImage.png');

// const contents = 
const dashboardScreen = ({ navigation }) => {
  const [active, setActive] = useState(0);
  const onClickPress = () => {
      
  }
  return (
    <View style={styles.container}>
      <PageView navigation={navigation}>
        <Text>Your Goals</Text>
      </PageView>
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
    textAlign: 'center',
    marginTop: 10,
    alignItems:'center',
    justifyContent: "center",
  },
  textInfo:{
    flex: 1, 
    height: 100,
    padding: 40
  },
  title:{
    fontFamily: 'Tomorrow',
    textAlign: 'left',
    fontStyle: 'normal',
    fontSize: 36,
    fontWeight: "bold",
    lineHeight: 40,
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
export default dashboardScreen;