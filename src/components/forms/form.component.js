import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const FormInput = ({secureTextEntry=false, onChangeText, onBlur, value, placeholder, style}) => {
    return(
        <TextInput
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            style={{...styles.input, style}}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry} 
        />
    )
}
const FormButton = ({title, styleButton, styleText, onPress, Image }) => {
    return(
        <TouchableOpacity style={{...styles.button, styleButton}} onPress={onPress}>
            <View></View>
            <Text style={{...styles.buttonText, styleText}}>{title}</Text>
            {Image ? <Image /> : <View></View>}
        </TouchableOpacity>
    )
}
const FormDate = ({onChangeText, onBlur, value, placeholder, style}) => {
   return(
        <DatePicker
            date={value}
            onDateChange={onChangeText}
            onBlur={onBlur}
            mode="date"
        />
    )
}

export {
    FormInput,
    FormButton,
    FormDate
}