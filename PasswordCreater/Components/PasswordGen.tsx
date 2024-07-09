import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik';

import * as Yup from 'yup';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const passwordSchema =Yup.object().shape({
    passwordLength:Yup.number().min(8,'Password should be >= 8').max(16,'should be less than 16').required('length is required'),
    
})

export default function PasswordGen() {
    const [password,setPassword] =useState('');
    const [isPasswordGenerated,setIsPasswordGenerated]=useState(false);
    
    const [upperCase,setUpperCase] =useState(false);
    const [lowerCase,setLowerCase] =useState(true);
    const [number,setNumber] =useState(false);
    const [symbol,setSymbol] =useState(false);

    const genratePasswordString=(passwordLength:number)=>{
        //this is to create string for system with the changes selected•

        let characters:string='';
        const upperCaseChar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChar='abcdefghijklmnopqrstuvwxyz';
        const numberChar='1234567890';
        const symbolChar='!@#$%^&*()_+';
        
        if(upperCase)
            characters+=upperCaseChar;
        if(lowerCase)
            characters+=lowerCaseChar;
        if(number)
            characters+=numberChar;
        if(symbol)
            characters+=symbolChar;

        const password=createPassword(characters,passwordLength);
        setPassword( password);
        setIsPasswordGenerated(true);

    };
    const createPassword=(characters:string,passwordLength:number)=>{
        
        //this will show /genereate the password for user

        let result='';
        for(let i=0;i<passwordLength;i++){
            let charIndex = Math.round(Math.random()*characters.length);
            result+=characters.charAt(charIndex);
        }
            
        return result;
    }   
    const resetPassword=()=>{
        // we will reset all the states to default in case reset button is clicked

        setIsPasswordGenerated(false);
        setLowerCase(true);
        setUpperCase(false);
        setNumber(false);
        setSymbol(false);
    }
    
  return (
    // <View style={{alignItems:'center'}}>
    //   <Text>password  :  {password}</Text> 
    //   <Button title='UpperCase' 
    //   onPress={()=>{upperCase? setUpperCase(false): setUpperCase(true)}}/>
    //   <Button title='Number' 
    //   onPress={()=>{number?setNumber(false):setNumber(true)}}/>
    //   <Button title='Symbol' 
    //   onPress={()=>{symbol?setSymbol(false):setSymbol(true)}}/> 
    //   <Button title='Submit' 
    //   onPress={()=>genratePasswordString(11)}/>
    // </View>
    <ScrollView keyboardShouldPersistTaps='handled'>
        <SafeAreaView style={styles.appContainer}>
            
            <View style={styles.formContainer}>
                <Formik
        initialValues={{ passwordLength: ''}}
        validationSchema={passwordSchema}
        onSubmit={values => {
            console.log("input came");
            genratePasswordString(+values.passwordLength)//+ is converting this to number
        }}
        >
        {({
            values,
            errors,
            isValid,
            touched,
            handleChange,
            handleSubmit,
            handleReset,
            /* and other goodies */
        }) => (
            <>
            <View style={styles.inputWrapper}>
                <View style={styles.inputColumn}>
                    <Text>Password Length :-</Text>
                    {touched.passwordLength && errors.passwordLength && (
                        <Text style={styles.errorText}>{errors.passwordLength}</Text>
                    )}
                    
                </View>
                <TextInput style={styles.inputStyle}
                    onChangeText={handleChange('passwordLength')}
                    placeholder='Ex 8'
                    keyboardType='numeric'/>
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include lowerCase</Text>
                <View><BouncyCheckbox
                isChecked={lowerCase}
                onPress={()=>setLowerCase(!lowerCase)}
                fillColor='#29ab87'
                /></View>
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include UpperCase</Text>
                <View><BouncyCheckbox
                isChecked={upperCase}
                onPress={()=>setUpperCase(!upperCase)}
                fillColor='#FED85D'
                /></View>
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Number</Text>
                <View><BouncyCheckbox
                isChecked={number}
                onPress={()=>setNumber(!number)}
                fillColor='#C9A0DC'
                /></View>
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Symbol</Text>
                <View><BouncyCheckbox
                isChecked={symbol}
                onPress={()=>setSymbol(!symbol)}
                fillColor='#FC80A5'
                />
                </View>
            </View>

            <View style={styles.formActionArea}>
                <TouchableOpacity 
                disabled={!isValid}
                onPress={()=>{handleSubmit();}}
                style={[styles.button,styles.generateButton]}>
                    <Text style={styles.baseText}>Generate </Text>
                <Text style={styles.baseText}>Password</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.button,styles.resetButton]}
                    onPress={()=>{handleReset(); resetPassword()}}
                    >
                    <Text style={styles.baseText}>Reset</Text></TouchableOpacity>
            </View>
            </>
        )}
        </Formik>
            </View>
            {
                isPasswordGenerated? (<View style={styles.output}>
                    <Text style={{fontSize:24,padding:8}}>Output :- </Text>
                    <Text selectable style={[styles.baseText,styles.outputText]}>{password}</Text>
                </View>):(null)
            }
        </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    appContainer:{},
    formContainer:{},
    inputWrapper:{
        margin:10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    inputColumn:{},
    inputStyle:{
        padding: 8,
        width: '30%',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#16213e',
    },
    heading:{},
    formActionArea:{
        marginTop:20,
        alignSelf:'center',
        flexDirection:'row',
    },
    button:{
        width:'40%',
        alignItems:'center',
        marginHorizontal:4,
        justifyContent:'center',
        borderRadius:7,
    },
    generateButton:{
        
        backgroundColor:'#4Aaa92'

    },
    resetButton:{
        backgroundColor:'#FC80A5'
    },
    errorText:{
        color:'red'
    },
    baseText:{
        fontSize:18
    },
    output:{
        alignSelf:'center',
        margin:30,
        flexDirection:'row',
    },
    outputText:{
        borderWidth:1,
        borderColor:'lightblue',
        borderRadius:4,
        padding:8
    }
})