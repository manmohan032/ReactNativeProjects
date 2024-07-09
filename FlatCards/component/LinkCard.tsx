import React, {useCallback} from 'react';
import {Text,Linking, StyleSheet, View,Image, Touchable, TouchableOpacity,useColorScheme} from 'react-native';

 const LinkCard = () => {
    const isDark= useColorScheme()==='dark';
     function openLink(websiteLink: string) {
        Linking.openURL(websiteLink);
    };
  return (
    <View style={styles.container}>
        <Text style={[styles.HeaderText,isDark?styles.lightText:styles.darkText]}>Link card</Text>
      <View style={styles.card}>
            <Image 
            source={{uri:'https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Assam.jpg'}}
            style={styles.CardImage}
            />      
            <Text style={{fontSize:18,color:'#fff',margin:10}}>Click on more or follow link to see more photos and info</Text>
            <View style={styles.cardFooter}>
            
            <TouchableOpacity
            onPress={()=>openLink('https://traveltriangle.com/blog/places-to-visit-in-india-before-you-turn-30/') } activeOpacity={1}>{/* 0 - 1*/ }
                <Text style={styles.linksButton}>More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>openLink('https://traveltriangle.com/blog/places-to-visit-in-india-before-you-turn-30/')}>
                <Text style={styles.linksButton
                 }>follow link</Text>
            </TouchableOpacity>


            
            </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    HeaderText:{
        fontSize:24,
        fontWeight:'bold',
        alignSelf:'flex-start'
    },
    darkText:{
        color:'#000'
    },
    lightText:{
        color:'#fff'
    },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    margin:10
  },
  CardImage:{
    // margin:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    marginBottom:8,
    height:180,
    width:300,
    /*to remove width we need to remove flex as it centering every element and we not specified the width its pressuring image to center from left and right making it
    zero width*/
},
  card:{
    width:300,
    backgroundColor:'lightgreen',
    borderRadius:10,
    margin:10,
    borderWidth:1
  } ,
  cardFooter:{
    padding:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  linksButton:{
       color:'#000',
    fontSize:15,
    backgroundColor:'#fff',
    paddingVertical:5,
    paddingHorizontal:16,
    borderRadius:8,
    
}   
});


export default LinkCard;                    