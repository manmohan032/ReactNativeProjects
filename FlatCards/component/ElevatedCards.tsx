import { ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
    const isDarkMode = useColorScheme() === 'dark';
  return (
    <View >
          <Text style={[styles.HeadingText, isDarkMode ? styles.lightText : styles.darkText]}>ElevatedCards</Text>
          <ScrollView horizontal={true} style={styles.Container}>
              <View style={[styles.Card,styles.cardElevated]}>
                <Text>Tap</Text>
               </View>
              <View style={[styles.Card,styles.cardElevated]}>
                <Text>here</Text>
               </View>
              <View style={[styles.Card,styles.cardElevated]}>
                <Text>to</Text>
               </View>
              <View style={[styles.Card,styles.cardElevated]}>
                <Text>scroll</Text>
               </View>
              <View style={[styles.Card,styles.cardElevated]}>
                <Text>more</Text>
               </View>
              <View style={[styles.Card,styles.cardElevated]}>
                <Text>item</Text>
               </View>
          </ScrollView>
      </View>
  )
}

export default ElevatedCards;


const styles = StyleSheet.create({
    HeadingText:{
      fontSize:24,
      fontWeight:'600',
      marginLeft:10
    },
    Container:{
      margin:8
    },
    Card:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:100,
      height:100,
      margin:8,
      borderRadius:10
    },
    cardElevated:{
        backgroundColor:'lightblue',
        elevation:4
    },
    darkText:{
      color:"#000"
    },
    lightText:{
      color:"#fff"
    }

})