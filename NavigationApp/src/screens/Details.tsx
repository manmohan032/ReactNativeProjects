import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps,NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackPrams } from '../App';
import { useNavigation } from '@react-navigation/native';

type DetailsProps = NativeStackScreenProps<RootStackPrams ,"Details">;

const Details = ({route}:DetailsProps) => {

    // const productId=route.params.productId //or
    const {productId} =route.params
    const navigation=useNavigation<NativeStackNavigationProp<RootStackPrams>>();
  return (
    <View style={styles.container}>
      <Text style={{color:'#000'}}>Details :- {productId}</Text>
      <Button
        title='Goto Home'
        // onPress={()=>navigation.push("Home")}
        // onPress={()=>navigation.replace("Home")}
        onPress={()=>navigation.goBack()}
      />
      <Button
        title='Goto to all screen back'
        // onPress={()=>navigation.pop(1)}
        onPress={()=>navigation.popToTop()}
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

})