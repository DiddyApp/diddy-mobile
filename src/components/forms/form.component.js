import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const FormInput = ({onChangeText, onBlur, value, placeholder, style}) => {
    return(
        <TextInput
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            style={{...styles.input, style}}
            placeholder={placeholder}
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

const styles = StyleSheet.create({
    input:{
        height: 54,
        borderColor: '#333',
        backgroundColor: '#EFF0F2',
        borderRadius: 14,
        padding: 20,
        marginTop: 10,
        marginBottom: 10
    },
    button:{
      flexDirection:'row',
      justifyContent: 'space-between',
      marginTop: 50,
      backgroundColor: '#333333',
      borderRadius: 38,
      padding: 20,
      marginTop: 30,
      marginBottom: 10
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
})


export {
    FormInput,
    FormButton
}