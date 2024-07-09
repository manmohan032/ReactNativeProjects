import { Text, StyleSheet, View, SafeAreaView, StatusBar, Touchable, TouchableOpacity } from 'react-native'
import React, { useState }  from 'react'






export default function App(){
  const [randomBG,setRandomBG]=useState("#000000");
  const options="0123456789ABCDEF"
  const [colorArr,setColorArr] =useState(["#000","#000","#000"])
  const genrateRandomBG=()=>{
      
      let color  = "#";
      for(let i=0;i<8;i++)
        color+=options.charAt(Math.floor(Math.random()*options.length));

      // console.log(color);
      setRandomBG(color);
    }
    function  genrateRandomColor():(string){
      
      let color:string  = "#";
      for(let i=0;i<6;i++)
        color+=options.charAt(Math.floor(Math.random()*options.length));
      
      return color.toString();
    }
    const genrateRandomColorArr=()=>{
      const arr:string[]=[];
    const c1:string=genrateRandomColor().toString();
    const c2:string=genrateRandomColor().toString();
    const c3:string=genrateRandomColor().toString();
    arr.push(c1,c2,c3);
    setColorArr(arr);
    console.log(colorArr[0]);
    console.log(colorArr[1]);
    console.log(colorArr[2]);
  }
  function generate(){
    genrateRandomBG();
    genrateRandomColorArr();
  }
  return(
    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor={randomBG}/>
      <View style={[styles.container,{backgroundColor:randomBG}]}>
          <View style={{justifyContent:'space-evenly',flexDirection:'row',flex:1,alignItems:'center'}}>
            <View style={[styles.rectangle,{backgroundColor:colorArr[0]}]}></View>
            <View style={[styles.circle,{backgroundColor:colorArr[1]}]}></View>
          </View>
          <TouchableOpacity onPress={generate} style={{flex:1,justifyContent:'center'}}>
            <View style={[styles.button]}>
              <Text style={{fontSize:26}}>Press Me</Text>
            </View>
          </TouchableOpacity> 
          <View style={{flex:1}}>
          <View style={[styles.triangle,{borderBottomColor:colorArr[2]}]}></View>
          </View>
      </View>
    </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,//this works as the above container is flex 1 which means to parent size 
    justifyContent:'center',
  },
  button:{
    backgroundColor:"#bbbbbbbb",
    paddingVertical:10,
    paddingHorizontal:35,
    borderRadius:5,
    alignSelf:'center'
  },
  rectangle:{
    width:100,
    height:100,
    // backgroundColor:"#bbb"
  },
  circle:{
    width:100,
    height:100,
    borderRadius:50,
    // backgroundColor:"#bbb"
  },
  triangle:{
    alignSelf:'center',
    borderLeftWidth:50,
    borderRightWidth:50,
    borderBottomWidth:100,
    borderRightColor:'transparent',
    borderLeftColor:'transparent',

  }

})