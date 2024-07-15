import TrackPlayer, { RepeatMode } from "react-native-track-player";
import { Event } from 'react-native-track-player';

import { playList } from "./src/constant"; 

export async function setUpPlayer(){
    let isSetup=false;
    try{
        await TrackPlayer.getActiveTrack();
        // console.log("setup1");
        isSetup=true
    }catch(error)
    {   
        await TrackPlayer.setupPlayer();
        // console.log("setup2");
        isSetup=true
    }
    finally{
        // console.log("setup3");
        return isSetup;
    }
}

export async function addTrack(){
    await TrackPlayer.add(playList);
    // console.log("trackAdded");
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export  async function playbackService() {
    
        
    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
    
    
        
    
}