import React, { useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useFormik } from 'formik';
import { FormButton, FormInput } from './form.component';

const LoginForm = ({ navigation }) => {
    const { handleBlur, handleChange, handleSubmit, values} = useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    console.log("here-login")
    return(
    <View>
        <View style={styles.formView}>
            <FormInput 
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder='Email address or Username'
            />
            <FormInput 
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder='Password'
            />
            <FormButton title="Login" onPress={console.log("press")} />
            <TouchableOpacity style={{marginTop: 30}} onPress={handleSubmit} title="Submit">
                <Text style={styles.forgot}>Forgot Password ? </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    formView:{
        marginTop: 40,
    },
    forgot:{
        textAlign:'center',
        color: '#333',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20
    }
});
export default LoginForm;