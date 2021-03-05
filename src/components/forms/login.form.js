import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFormik } from 'formik';
import { FormButton, FormInput } from './form.component';
import { Donemark, EyeVisibleOff, EyeVisibleOn } from '../icons.component';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { Login } from '../../redux/actions/auth.action';
const userData = {
    userId: '12345678',
    token: 'axfaslfkhlashflkasf',
    refreshToken: 'asklfhsalkfjasf',
    expiresOn: '24h',
    data:{
        name: 'John Doe'
    },
}

const LoginForm = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const { handleBlur, handleChange, handleSubmit, values} = useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      onSubmit: values => {
        // alert(JSON.stringify(values, null, 2));
        // Login(values);
        return loginUser();
        // navigation.navigate('createGoal');
      },
    });
    const loginUser = () => {
        return Login(values);
    }
    return(
    <View>
        <View style={styles.formView}>
            <View>
                <FormInput 
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder='Email address or Username'
                />
                {values.email ? 
                    <View style={{position:'absolute', right:20, top: 20}}>
                        <Donemark />
                    </View>
                : null}
            </View>
            <View>
                <FormInput 
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder='Password'
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
            <FormButton title="Login" onPress={handleSubmit} />
            <TouchableOpacity style={{marginTop: 30}} onPress={()=>navigation.navigate('Forgot')} title="Submit">
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