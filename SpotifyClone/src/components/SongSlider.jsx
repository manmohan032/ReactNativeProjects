import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';
import TrackPlayer, { useProgress } from 'react-native-track-player';


const SongSlider = () => {
  const {position,duration}=useProgress()
  function changeTime(time) {
    // console.log(new Date(time*1000).toISOString().substring(15,19));
    TrackPlayer.seekTo(time);
  }
  return (
    <View style={styles.container}>
       <Text>
            {new Date(position*1000).toISOString().substring(15,19)}
        </Text>
      <Slider
        // disabled
        style={{width: '75%', height: 40}}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        thumbTintColor='#fff'
        minimumTrackTintColor="lightblue"
        maximumTrackTintColor="black"

        onValueChange={(value)=>changeTime(value)}
        />
        
         <Text>
            {new Date(duration*1000).toISOString().substring(15,19)}
        </Text>

    </View>
  )
}

export default SongSlider

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center'
}
})