import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PasswordGen from './Components/PasswordGen'



export default function App() {
  return (
    <SafeAreaView style={{}} >
      <Text style={{fontSize:24,margin:10,alignSelf:'center'}}>Password Generator</Text>
      <PasswordGen/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})