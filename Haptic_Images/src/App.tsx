import { Image, ImageSourcePropType, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import OneDice from '../assests/One.png'
import TwoDice from '../assests/Two.png'
import ThreeDice from '../assests/Three.png'
import FourDice from '../assests/Four.png'
import FiveDice from '../assests/Five.png'
import SixDice from '../assests/Six.png'

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

// Trigger haptic feedback


type DiceProps=PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>

const Dice =({imageUrl}:DiceProps):JSX.Element=> {
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>{/*we can give uri as {uri : string} but we use obj of imageurl */}
    </View> 
  )
}

const App = () => {
  const [diceImage,setDiceImage]=useState<ImageSourcePropType>(OneDice);
  function rollDice(){
    const randomNO=Math.floor(Math.random()*6)+1;
    let a=null;
    switch(randomNO){
      case 1:
        a=OneDice;
        break;
      case 2:
        a=TwoDice;
        break;
      case 3:
        a=ThreeDice;
        break;
      case 4:
        a=FourDice;
        break;
      case 5:
        a=FiveDice;
        break;
      case 6:
        a=SixDice;
    }
    setDiceImage(a);
    ReactNativeHapticFeedback.trigger("impactHeavy", options);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin:10}}>
        <Dice imageUrl={diceImage}/>
        <Text>This is text</Text>
      </View>
      <Pressable onPress={rollDice}>
       
          <Text style={styles.button}>Roll Dice</Text>
    
      </Pressable>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#FFF2F2',
  },
  diceImage:{
    width:200,
    height:200
  },
  button:{
    fontSize:30,
    color: '#347',
    borderWidth:2,
    borderColor: '#E5E0FF',
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor:'#ccc',
    borderRadius:13
  }

})