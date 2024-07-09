import { View, Text,StyleSheet,useColorScheme, Image } from 'react-native'
import React from 'react'

type fancyProps ={
  link:string,
  title:string,
  place:string,
  description:string
};

const FancyCard = ({link,title,place,description}:fancyProps) => {
    const isDarkMode = useColorScheme() === 'dark';
  return (
    <View >
      <Text style={[styles.HeadingText, isDarkMode ? styles.lightText : styles.darkText]}>FancyCard</Text>
      <View style={styles.Container}>
      <View style={[styles.cardElevated,styles.Card]}>
      <Image source={{
            uri:link   
        }}
        style={styles.CardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.label}>{place}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.footer}>10min's away</Text>
        </View>
      </View>
      </View>

    </View>
  )
}

export default FancyCard;
const styles = StyleSheet.create({
    HeadingText:{
      fontSize:24,
      fontWeight:'600',
      marginLeft:10
    },
    Container:{
        flex:1,
        alignItems:'center'
    },
    Card:{
        // height:300,
        width:300,
        margin:10,
        // padding:10,
        borderRadius:10
    },
    cardElevated:{
        // elevation:4,
        backgroundColor:"lightblue"
    },
    CardImage:{
        // margin:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginBottom:8,
        height:180
    },
    darkText:{
      color:"#000"
    },
    lightText:{
      color:"#fff"
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:10
    },
    title:{
        fontSize:22, 
        fontWeight:'bold',
        color:'#fff'
    },
    description:{
        fontSize: 13, 
        marginTop:8,
        marginBottom:8
    },
    label:{
        fontSize:15 

    },
    footer:{
        alignSelf:'flex-end'
    }
})