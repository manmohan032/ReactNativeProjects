import { FlatList, Image, ImageSourcePropType, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Snackbar from 'react-native-snackbar';

import zero from '../assets/images/zero.png';
import cross from '../assets/images/cross.png';
import write from '../assets/images/write.png';


type boxProps={
  color:string,
  text:string
}
type iconProps={
  name:string
}


const App = () => {
  const [zeroPoints ,setZeroPoints] =useState(0);
  const [crossPoints ,setCrossPoints] =useState(0);
  const [player,setPlayer]=useState('zero');
  const [gameWinner,setGameWinner]= useState<string>('');
  const [array,setArray] = useState(new Array(9).fill('empty',0,9))


  const reload=()=>{
    setArray(new Array(9).fill('empty',0,9));
    setPlayer('zero');
    setGameWinner('');
  }
  function increasePoints(){
    checkWinner()
    if(gameWinner)
      gameWinner=='cross'?setCrossPoints(crossPoints+1):setZeroPoints(zeroPoints+1);
    console.log(gameWinner);
  }
  function checkWinner (){
      if(array[0]===array[1] && array[1]==array[2] && array[0] != 'empty') setGameWinner(array[0]);
      if(array[3]===array[4] && array[4]==array[5] && array[3] != 'empty') setGameWinner(array[3]);
       if(array[6]===array[7] && array[7]==array[8] && array[6] != 'empty') setGameWinner(array[6]);
       if(array[2]===array[5] && array[5]==array[8] && array[2] != 'empty') setGameWinner(array[2]);
       if(array[1]===array[4] && array[4]==array[7] && array[1] != 'empty') setGameWinner(array[1]);
       if(array[0]===array[3] && array[3]==array[6] && array[0] != 'empty') setGameWinner(array[0]);
       if(array[0]===array[4] && array[4]==array[8] && array[0] != 'empty') setGameWinner(array[0]);//diagonal
       if(array[2]===array[4] && array[4]==array[6] && array[2] != 'empty') setGameWinner(array[2]);//diagonal
      
      
      
    }
    
    function itemClick(index:number){
      if(gameWinner)
        { 
          
          return Snackbar.show({
            text:gameWinner+" won!",
            backgroundColor:'#000',
            textColor:'#fff'
          })
        } 
      if(!gameWinner && array[index]==='empty'){
          
          array[index]=player;
          if(player ==='cross')
            setPlayer('zero')
          else 
            setPlayer('cross')    
        // console.log("das");
        // setArray(array);
        
      }

      
  }
  function handleClicks(index:number){
    itemClick(index);
    // increasePoints()
  }
  return (
    <SafeAreaView style={styles.body}>
      {/* <View style={styles.pointsBox}>
        <Text>Zero :{zeroPoints}</Text>
        <Text>Cross :{crossPoints}</Text>
      </View> */}
      <View  style={styles.container}>
      <View style={[{backgroundColor:player!='cross'?'lightblue':'lightgreen'},styles.textBox]}>
        <Text style={styles.boxText}>{gameWinner? `${gameWinner} has won! 🥳 `:`Chance is of ${player}`}</Text>
      </View>
      <View style={styles.grid}>
      <FlatList
      numColumns={3}
      data={array}
      
      renderItem={({item, index}) => (
        <Pressable
        key={index}
        // style={styles.gameBoxs}
        onPress={()=>handleClicks(index)}
        >
          <Icon name={array[index]}/>
        </Pressable>
      )}
      />

      </View>
      
      <Pressable style={[{backgroundColor:'#9932CC'},styles.textBox]} onPress={reload}>
        <Text style={styles.boxText}>{gameWinner? `Start New Game!`:`Reload!`}</Text>
     </Pressable>
    
      </View>
    </SafeAreaView>
  )
}

export default App


export const Icon=(props:iconProps)=>{
  
  let source:ImageSourcePropType=write;
  if(props.name==='cross') source=cross;
  else if(props.name==='zero') source=zero;
  return (
    
    <View >
      <Image style={styles.gameBoxs} source={source}/>
    </View>
)};

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent:'center',
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    // marginTop:'10%'
  },
  textBox:{
    width:'80%',
    height:'10%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  },
  boxText:{
    fontSize:24
  },
  gameBoxs:{
    width:80,
    height:80,
    // backgroundColor:'white',
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    padding:10
  },
  grid:{
    width:'80%',
    // height:'40%',
    margin:10
  },
  pointsBox:{
    alignSelf:'center',
    height:'5%',
    // backgroundColor:'blue',
    marginTop:'10%'
  }
})