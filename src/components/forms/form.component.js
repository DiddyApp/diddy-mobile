import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { DateIcon } from '../icons.component';
import moment from 'moment';

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
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(moment().utc().format("DD-MM-YYYY"));
    useEffect(()=>{
        console.log(date);
    },[date, show])
   return(
        <>
            <TouchableWithoutFeedback onPress={()=>setShow(true)} style={{...styles.dateInput}}>
                <DateIcon />
                <Text style={styles.dataLabel}>Due Date</Text>
                <Text style={styles.dateValue}>{date}</Text>
            </TouchableWithoutFeedback>
            <Modal
                animationType="slide"
                transparent={true}
                visible={show}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setShow(!show);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <DatePicker
                            format="DD-MM-YYYY"
                            // date={date.toString()}
                            onDateChange={(value)=>console.log(value)}
                            mode="date"
                            minDate="01-01-2016"
                            maxDate="01-01-2019"
                        />
                        <TouchableOpacity onPress={()=>setShow(false)} style={styles.button}>
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input:{
        height: 54,
        borderColor: '#333',
        backgroundColor: '#EFF0F2',
        borderRadius: 14,
        padding: 20,
        marginTop: 10,
        marginBottom: 10
    },
    dateInput:{
        height: 54,
        flexDirection: 'row',
        borderColor: '#333',
        backgroundColor: '#EFF0F2',
        borderRadius: 14,
        padding: 15,
        marginTop: 10,
        marginBottom: 10
    },
    dateLabel:{
        marginLeft: 20,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.2
    },
    dateValue:{
        marginLeft: 'auto',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.2
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
    datePickerStyle: {
      width: 200,
      marginTop: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})



export {
    FormInput,
    FormButton,
    FormDate
}