import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Track } from 'react-native-track-player'

type SongInfoProps=PropsWithChildren<{
    track: Track | null | undefined
}>
const SongInfo = ({track}:SongInfoProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{track?.name}</Text>
        <Text>{track?.artist}   .   {track?.album}</Text>
        {/* <Text>{track?.description}</Text> */}
      </View>
    </View>
  )
}

export default SongInfo

const styles = StyleSheet.create({
    container:{

    }
})