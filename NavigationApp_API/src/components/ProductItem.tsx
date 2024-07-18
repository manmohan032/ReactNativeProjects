import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type Productprops=PropsWithChildren<{
    product:Product
}>
const {width,height}=Dimensions.get('window');
const ProductItem = ({product}:Productprops) => {
  return (
    <View style={styles.container}>
        <Image source={{uri:product.image}} style={styles.image} resizeMode='contain'/>
        <View style={styles.detailsContainer}>
            <Text style={styles.text}>{product.title}</Text>
            <View style={styles.rowContainer}>
                <Text style= {styles.rating}> {product.rating.rate}★ </Text> 
                <Text>({product.rating.count})</Text>
            </View>
            <Text style={styles.text}>₹{product.price}</Text>
        </View>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        margin:10
    },
    image:{
        height:height/100*20,
        width:width/100*30
    },
    detailsContainer:{
        // alignItems:'center',
        justifyContent:'center',
        width:width/100*70,
        padding:10
    },
    rating:{
      backgroundColor:'green',
      color:'white',
        fontSize:17,
        borderRadius:5,
        padding:2,
        marginRight:4
    },
    text:{
        fontSize:18,
        fontWeight:'bold'
    },
    rowContainer:{
        flexDirection:'row'
    }

})