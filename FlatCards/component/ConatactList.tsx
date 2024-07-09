import { ScrollView, StyleSheet,Image, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'

const ConatactList = () => {
    const url='https://jsonplaceholder.typicode.com/users';
   const [data,setData] =useState([]);
   const [loading,setLoading]= useState(true);
   useEffect(()=>{
    fetch(url)
    .then((resp)=>resp.json())
    .then((json)=>setData(json))
    .catch((error) => console.log(error))
    .finally(()=>setLoading(false))
   });
  return (
    <View style={{flex:1}}>
      <Text style={styles.HeaderText}>ConatactList</Text>
      <View style={{height:400}}>
      <ScrollView  
      contentContainerStyle={styles.Container}
      scrollEnabled={true}
      nestedScrollEnabled={true}>
        {
            loading ? <Text>Loading...</Text> :
            data.map(({id,name,email}/*you can just use a single map object rather than each prop like (user) than acces data as
                user['id'] \\ user['name']e.t.c this will allow you to use same object  */)=>
                {/*if you use (parenthesis) rather than {curly braces} than you dont need to write return keyword */
                return (
                    
                    <View key={id} style={styles.userCard}>
                        <Image 
                        style={styles.userImage}
                        source={{
                            uri:'https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg'
                        }}
                        />
                        <View style={styles.userData}>
                        <Text style={styles.userName}>Name : {name}</Text>
                        <Text style={styles.userEmail}>{email}</Text>
                        </View>
                    </View>
                )
            })
        }


      </ScrollView>
      </View>
    </View>
  )
}

export default ConatactList

const styles = StyleSheet.create({
    HeaderText:{
        fontSize:24,
        fontWeight:'600',
        marginLeft:10
    },
    Container:{
        alignSelf:'center',
        padding:8,
        // backgroundColor:'#4d9aaf',
        width:'90%',
        borderRadius:10
    },
    userCard:{
        backgroundColor:'#4d9aaf',
        margin:3,
        padding:8,
        borderRadius:10,
        flexDirection:'row'
    },
    userData:{
        alignSelf:'center',
        marginHorizontal:10
    },
    userName:{
        color:'#000',
        fontSize:17
    },
    userEmail:{
        color:'#000'
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:30
    }
})