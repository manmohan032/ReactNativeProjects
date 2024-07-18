import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

import { NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackPrams } from '../App';
type HomeProps = NativeStackScreenProps<RootStackPrams ,"Home">;



const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Goto details"
        onPress={()=>navigation.navigate("Details",{productId:'18'})}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})