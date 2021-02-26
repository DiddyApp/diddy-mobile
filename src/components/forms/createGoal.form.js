import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import { FormButton, FormInput } from './form.component';
import { Donemark } from '../icons.component';

const CreateGoalForm = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const { handleBlur, handleChange, handleSubmit, values} = useFormik({
      initialValues: {
        email: ''
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return(
    <View>
        <View style={styles.formView}>
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
            <FormButton title="Reset" onPress={handleSubmit} />
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    formView:{
        marginTop: 40,
    }
});
export default CreateGoalForm;