import { View, Text, StyleSheet } from 'react-native'

import { PropsWithChildren } from 'react'
import React from 'react'

type currencyProp =PropsWithChildren<{
  name: string,
  flag: string
}>

const CurrencyButton = (props:currencyProp):React.JSX.Element => {
  return (
    <View style={styles.ButtonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  ButtonContainer:{
    alignItems:'center',
    // backgroundColor:'#fff',
    // margin:10
  },
  flag:{
    fontSize:26,
    color:'#fff',
    marginBottom:4
  },
  country:{
    fontSize:14,
    color:'#2d3436',
    // marginBottom:4
  }
})

export default CurrencyButton