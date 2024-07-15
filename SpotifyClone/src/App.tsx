import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { setUpPlayer,addTrack } from '../musicService';
import ControllCenter from './components/ControllCenter';
import MusicPlayer from './Screens/MusicPlayer';

const App = () => {
  const [isPlayerReady,setIsPlayerReady] =useState<Boolean>(false);

  async function setup(){
    let isSetup = await setUpPlayer()
    if(isSetup)
    {
      await addTrack()
    }
    setIsPlayerReady(isSetup);
  }
  useEffect(()=>{
    setup();

  },[]) // we put [] so it only run one time read documentry useEffect run on render 


  

  
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar barStyle={"light-content"}/>
      <View style={styles.nameBarContainer}>
          <Text style={styles.nameBarText}>MS Music Player</Text>
      </View>
      {isPlayerReady?<MusicPlayer/>:<ActivityIndicator />}
    </SafeAreaView>
  )
};

export default App;

const styles = StyleSheet.create({
  body:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center'
  },
  nameBarText:{
      backgroundColor:'transparent',
      color:'#ffffff',
      fontSize:33,
      fontWeight:'bold',
      
  },
  nameBarContainer:{
      alignItems:'center',
      backgroundColor:'#405d70',
      padding:5
  }
})