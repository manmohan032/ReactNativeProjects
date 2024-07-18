import { Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackPrams } from '../App';
import { useNavigation } from '@react-navigation/native';

type DetailsProps = NativeStackScreenProps<RootStackPrams, "Details">;

const { width, height } = Dimensions.get('window');

const Details = ({ route }: DetailsProps) => {

  // const product=route.params.product //or
  const { product } = route.params
  const navigation = useNavigation<NativeStackNavigationProp<RootStackPrams>>();
  { console.log(product.image) }
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: product.image }}
            alt='here should be a image'
            resizeMode={'contain'} // cover or contain its upto you view look
          />
        </View>
        <View>
          <Text style={styles.text}>{product.title}</Text>
          <View style={styles.rowContainer}>
            <Text style={styles.rating}> {product.rating.rate}★ </Text>
            <Text>({product.rating.count})</Text>
          </View>
          <Text style={styles.text}>{product.category}</Text>
          <Text style={styles.text}>₹{product.price}</Text>
        </View>

      </View>
      {/* <TouchableOpacity
        onPress={() => navigation.goBack()}
        // onPress={()=>navigation.push("Home")}
        // onPress={()=>navigation.replace("Home")}
        style={styles.button}
      >
        <Text>Goto Home</Text>
      </TouchableOpacity> */}
      {/* <Button
        title='Goto to all screen back'
        // onPress={()=>navigation.pop(1)}
        onPress={()=>navigation.popToTop()}
      /> */}
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  product: {
    flex: 1
  },
  button: {
    height: '5%',
    width: '100%',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer:{
    
    height: height / 100 * 60,
    width: width / 100 * 90,
    alignSelf:'center'
  },
  image: {
    height:'100%',
    width:'100%',

  },
  detailsContainer: {
    // alignItems:'center',
    justifyContent: 'center',
    width: width / 100 * 70,
    padding: 10
  },
  rating: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 17,
    borderRadius: 5,
    padding: 2,
    marginRight: 4
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:3
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom:3
  }
})