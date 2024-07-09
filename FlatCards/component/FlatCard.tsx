import { StyleSheet, Text, View,useColorScheme } from 'react-native'
import React from 'react'

const FlatCard = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
        <View style={{flex:1,alignItems:'center',margin:1}}>
          <Text style={[styles.HeadingText, isDarkMode ? styles.lightText :styles.darkText  ]}>Flat Card</Text>
          </View>
        <View style={styles.Container}> 
          
          <View style={[styles.Container,styles.Card,styles.Card_1]}><Text>red</Text></View>
          <View style={[styles.Container,styles.Card,styles.Card_2]}><Text>blue</Text></View>
          <View style={[styles.Container,styles.Card,styles.Card_3]}><Text>green</Text></View>
          
        </View>
    </View>
  )
}

export default FlatCard;

const styles = StyleSheet.create({
    HeadingText:{
      fontSize:24,
      fontWeight:'600',
      margin:10
    },
    Container:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      padding:9,
      margin:2
    },
    Card:{
      width:100,
      height:100,
      margin:8,
      borderRadius:10
    },
    Card_1:{
      backgroundColor:'red'
    },
    Card_2:{
      backgroundColor:'lightblue'
    },
    Card_3:{
      backgroundColor:'lightgreen'
    },
    darkText:{
      color:"#000"
    },
    lightText:{
      color:"#fff"
    }

})