import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LoginForm from '../../components/forms/login.form';
import { BackIcon, FaceBookIcon, AppleIcon } from '../../components/icons.component';
import mainStyles from '../../utils/main.style';
import LoginHeader from '../../components/loginHeader.component';
import ForgotForm from '../../components/forms/forgot.form';

const ForgotScreen = ({ navigation }) => {
  useEffect(()=>{ 
    console.log('sdsdsd');
  }, []);

  return (
  <View style={styles.container}>
    <View style={styles.backView}>
      <LoginHeader navigation={navigation} />
    </View>
    <View style={styles.main}>
      <View style={{flex:1}}>
        <Text style={styles.title}>Forgot Password!</Text>
      </View>
      <View style={{flex:5}}>
        <Text style={styles.emailText}>Enter email to  reset account password</Text>
        <ForgotForm />
      </View>
      
    </View>
  </View>
  );
};
// styles
const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    padding: 30,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  backView:{
    flex: 1,
    paddingTop: 30,
    // backgroundColor: '#333',
  },
  main:{
    flex:8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  title:{
    fontFamily: mainStyles.fontFamily.default,
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#333333',
    marginBottom: 50,
  },
  faceBook:{
    flexDirection: 'row',
    color: 'white',
    justifyContent: 'center',
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 38,
    height: 54,
    marginBottom: 30
  },
  faceBookText:{
    marginLeft: 15,
    fontFamily: mainStyles.fontFamily.default,
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#ffffff'
  },
  appleView:{
    flexDirection: 'row',
    color: 'white',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 38,
    height: 54,
    borderColor: 'rgba(51, 51, 51, 0.2)',
    borderWidth: 1,
    marginBottom: 30
  },
  appleText:{
    marginLeft: 15,
    fontFamily: 'Tomorrow',
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#333333'
  },
  emailText:{
    marginLeft: 15,
    fontFamily: 'Tomorrow',
    textAlign: 'center',
    fontStyle: 'normal',
    color: 'rgba(51, 51, 51, 0.5)',
    fontSize: 16,
  }
});

export default ForgotScreen;