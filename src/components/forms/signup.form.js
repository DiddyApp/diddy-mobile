import React, { useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useFormik } from 'formik';
import { FormButton, FormInput } from './form.component';

const SignForm = ({ navigation }) => {
    const { handleBlur, handleChange, handleSubmit, values} = useFormik({
      initialValues: {
        username:'',
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
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.email}
                placeholder='Username'
            />
            <FormInput 
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder='Email address'
            />
            <FormInput 
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder='Password'
            />
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