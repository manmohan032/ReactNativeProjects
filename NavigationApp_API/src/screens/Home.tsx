import { StyleSheet, Text,TouchableOpacity,Image, View,Button, FlatList, Dimensions, Pressable } from 'react-native'
import React from 'react'

import { NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackPrams } from '../App';
import postApi from '../api/postApi';
import ProductItem from '../components/ProductItem';
import Seprator from '../components/Seprator';


type HomeProps = NativeStackScreenProps<RootStackPrams ,"Home">;
const {width,height}=Dimensions.get('window');

const Home = ({navigation}:HomeProps) => {
  const products=new postApi();
  const productData=products.getData();
  
  return (
    <View style={styles.container}>
      {/* <Text>Home</Text> */}
      <View style={{flex:1,alignItems:'center'}}>
      <FlatList
          data={productData}
          renderItem={({item,index})=>(
            <Pressable
            onPress={()=>{navigation.navigate("Details",{product:item})}}>
              <ProductItem product={item}/>
              <Seprator/>
            </Pressable>
          )}  

          keyExtractor={(item)=>item.id.toString()}
          
      />
      </View>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
      height:height/100*50,
      width:width/100*50
    }
})