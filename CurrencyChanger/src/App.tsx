import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import { currencyByRupee } from './constant';
import CurrencyButton from './components/CurrencyButton';
import Snackbar from 'react-native-snackbar';


const App = () => {
  const [inputValue,setInputValue] =useState('');
  const [resultValue,setResultValue] =useState('');
  const [targetCurrency,setTargetCurrency] =useState('');

  const buttonPressed =(targetValue:Currency)=>
  {
    if(!inputValue)
    {
      return Snackbar.show({text:"entere some value to convert",
        backgroundColor:'#ea7773',
        textColor:'#000'
      });
    }
    
    const inpAmt=parseFloat(inputValue);
    const convertedVal=inpAmt*targetValue.value;
    const result=`${targetValue.symbol} ${convertedVal.toFixed(2) } 🤑 `
    setResultValue(result)
    setTargetCurrency(targetValue.symbol)
  }

  return (
    <SafeAreaView  style={styles.container}>

        <View style={styles.topContainer}>
          <View style={styles.rupeeContainer}>
              <Text style={styles.rupee}>₹</Text>
              <TextInput maxLength={14}
              style={styles.input}
              value={inputValue}
              onChangeText={setInputValue}
              
              keyboardType='numeric'
              placeholder='enter amount in Rupees'/>
          </View>
          {resultValue && <Text style={styles.resultText}>{resultValue}</Text>}
        </View>

        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={currencyByRupee}
            keyExtractor={items=>items.name}
            renderItem={(items)=>(
              <Pressable 
              style={[
                styles.button,
                targetCurrency === items.item.symbol && styles.selected
              ]}
              onPress={()=>buttonPressed(items.item)}>
                <CurrencyButton {...items.item}/>
              </Pressable>
            )}
          />
        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#515151',
  },
  topContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  rupeeContainer:{
    flexDirection:'row',
    alignItems:'center',//this is to align items in same row
    backgroundColor:'#fff',
    borderRadius:8,
    marginBottom:10
  },
  rupee:{
     fontSize:35,
     fontWeight:'bold',
     color:'black',
     marginLeft:9
  },
  resultText:{
    // width:100,
    backgroundColor:'white',
    color:'black',
    borderRadius:3,
    fontSize:22,
    paddingHorizontal:9
  },
  bottomContainer:{
    height:'74%',
    width:'100%',
    // alignSelf:'center',
    // width:'100%'
  },
  button:{
    width:'80%',
    alignSelf:'center',
    // height:100,
    padding:3,
    backgroundColor:'#fff',
    margin:8,
    borderRadius:10
  },
  selected:{
    backgroundColor: '#ffeaa7',
    borderWidth:3,
    borderColor:'white'
  },
  input:{
    width:200,
    color:'#16213e',
    fontSize:18
  }
})

export default App;