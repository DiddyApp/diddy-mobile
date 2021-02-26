import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useFormik } from 'formik';
import { FormButton, FormInput } from './form.component';
import { BackIcon, Donemark, EyeVisibleOff, EyeVisibleOn } from '../icons.component';
import { TouchableHighlight } from 'react-native-gesture-handler';

const SignForm = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const { handleBlur, handleChange, handleSubmit, values} = useFormik({
      initialValues: {
        username:'',
        email: '',
        password: ''
      },
      onSubmit: values => {
        // alert(JSON.stringify(values, null, 2));
        navigation.navigate('createGoal');
      },
    });
    // console.log("here-login", values)
    return(
    <View>
        <View style={styles.formView}>
            <View style={{position:'relative'}}>
                <FormInput 
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    placeholder='Username'
                />  
                <View style={{position:'absolute', right:20, top: 20}}>
                    {values.username ? <Donemark />: null}
                </View>
            </View>
            <View style={{position:'relative'}}>
                <FormInput 
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder='Email address'
                />
                <View style={{position:'absolute', right:20, top: 20}}>
                    {values.email ? <Donemark />: null}
                </View>
            </View>
            <View style={{position:'relative'}}>
                <FormInput 
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder='Password'
                    secureTextEntry={!showPassword}
                />
                { values.password ? 
                    <View style={{position:'absolute', right:20, top: 25}}>
                        <TouchableHighlight 
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                            onPress={()=>setShowPassword(!showPassword)}>
                            <Text>{ showPassword ? <EyeVisibleOff /> : <EyeVisibleOn /> } </Text>
                        </TouchableHighlight>
                    </View>
                : null} 
            </View>
            <FormButton title="Sign Up" onPress={handleSubmit} />
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    formView:{
        marginTop: 40,
    }
});
export default SignForm;