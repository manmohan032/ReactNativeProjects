import React, { useState } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import TrackPlayer, { PlaybackState, State, usePlaybackState } from 'react-native-track-player'
import { getPlaybackState } from 'react-native-track-player/lib/src/trackPlayer'


import Icon from 'react-native-vector-icons/MaterialIcons'



const ControllCenter = ()=> {
    const playBackState = usePlaybackState()
    const [playing,setPlaying]=useState(false)
    const skipToNext=async()=>{
        await TrackPlayer.skipToNext()
    }
    const skipToPrev=async()=>{
        await TrackPlayer.skipToPrevious()
    }
    const play=async(playback: State)=>{
        const currTrack=await TrackPlayer.getActiveTrack();
        if(currTrack!=null)
        {
            if(playback===State.Playing )
            {
                await TrackPlayer.pause()
                setPlaying(false)
            }
            else
            {
                await TrackPlayer.play()
                setPlaying(true)
            }
        }
    }
  return (
    <View style={styles.controls}>
        <Pressable onPress={()=>skipToPrev()}>
         <Icon style={styles.icon} name="skip-previous" size={50}/>
        </Pressable>
        {
            playing?
            (<Pressable onPress={()=>play(State.Playing)}>
         <Icon style={styles.icon} name="pause" size={70}/>
        </Pressable>):(
        <Pressable onPress={()=>play(State.Paused)}>
         <Icon style={styles.icon} name="play-arrow" size={70}/>
        </Pressable>)
        }
        <Pressable onPress={()=>skipToNext()}>
         <Icon style={styles.icon} name="skip-next" size={50}/>
        </Pressable>
    </View>
  )
}

export default ControllCenter

const styles = StyleSheet.create({

    controls:{
        flexDirection:'row',
        alignItems:'center'
    },
    icon:{
        color:'white'
    }
})