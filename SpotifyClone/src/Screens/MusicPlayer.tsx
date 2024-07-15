import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ControllCenter from '../components/ControllCenter'
import SongInfo from '../components/SongInfo'
import SongSlider from '../components/SongSlider'
import TrackPlayer,{Event, Track, useActiveTrack, useTrackPlayerEvents} from 'react-native-track-player'
import { FlatList } from 'react-native'
import { playList } from '../constant'

const {width,height} =Dimensions.get('window')
const imageLength=(width/100)*80;
const MusicPlayer = () => {
    const [track,setTrack]=useState <Track | undefined>();
    

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged],async event => {
        switch(event.type){
            case Event.PlaybackActiveTrackChanged:
                 setTrack(event.track);
                //  console.log(event.track?.album)
                break;
        }
    })
    
    async function setActiveFirstTrack(){
        await TrackPlayer.pause()
        const tr=await TrackPlayer.getActiveTrack()
        setTrack(tr)
    }
    
    const playListOptions=(track:Track | undefined)=>{
        return(
            <View style={styles.imageContainer}>
            {
                track?.artwork &&
                <Image 
                    source={{uri:track?.artwork?.toString()}}
                    style={styles.image}
                />
            }
            </View>
        )
    }

    useEffect(()=>{
        setActiveFirstTrack();
        
    },[])


  return (
    <View style={styles.container}>
        
        <View style={styles.coverImage}>
            {
                track?.artwork &&
                <Image 
                    source={{uri:track?.artwork?.toString()}}
                    style={styles.image}
                />
            }
        </View>
      <SongInfo track={track}/>
      <ControllCenter/>
        <SongSlider/>
        <View style={styles.flatConatiner}>
            <FlatList
                data={playList}
                horizontal
                renderItem={({item,index})=>playListOptions(item)}
                // keyExtractor={(track,index)=>{
                //     return track.id.toString()
                // } }
            />
        </View>
    </View>
  )
}

export default MusicPlayer

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#001d23'

    },
    imageContainer:{
        width:width/100*30,
        height:'100%',
        alignItems:'center',
        margin:10
    },
    image:{
        width:'100%',
        height:'100%',
        objectFit:'contain'
    },
    flatConatiner:{
        // marginTop:15,
        height:width/100*35,
        width:width,
    },
    coverImage:{
        width:width/100*80,
        height:width/100*80,
        alignItems:'center',
        // margin:10
    }
})