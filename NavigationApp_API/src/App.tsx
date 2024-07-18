
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Details from './screens/Details'
import { Text, View } from 'react-native'

export type RootStackPrams={
  Home:undefined,
  Details:{product:Product }
}//what other screen can expect as data


const Stack=createNativeStackNavigator<RootStackPrams>()//this stack is for navigation



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} 
        options={ {title: "Product List",}}/>
        <Stack.Screen name='Details' component={Details} 
        options={ {title: "Product Details",}}/>
      </Stack.Navigator>  
    </NavigationContainer>
    // <View>
    //   <Text>here</Text>
    // </View>
  )
}

export default App

