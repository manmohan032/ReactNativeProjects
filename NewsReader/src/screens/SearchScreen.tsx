// screens/SearchScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Touchable, TouchableOpacity, ActivityIndicator, Image, FlatList, Linking } from 'react-native';
import { NativeStackScreenProps,NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackPrams } from '../App';

type SearchScreenProps = NativeStackScreenProps<RootStackPrams ,"SearchScreen">;

export default function SearchScreen({ navigation }:SearchScreenProps) {
  const [query, setQuery] = useState('');
  const [news, setnews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  var baseurl = 'https://newsapi.org/v2/everything?';
  const apiKey = 'apiKey=673a20716e4545d7964cae90addde29c';
  var url3= `https://newsapi.org/v2/everything?q=${query}&apiKey=673a20716e4545d7964cae90addde29c`;

  useEffect(() => {
    fetchnews();
  }, [query]);

  
  const handleBack=()=>{
    navigation.goBack();
  }
  const fetchnews = async () => {
    try {
      setLoading(true);
      const response = await fetch(url3);
      const data = await response.json();
      setnews(data.articles);
    } catch (err) {
      setError('Failed to fetch news');
    } finally {
      setLoading(false);
    }
  };
  const handlenewsPress = (url: string) => {
    
    Linking.openURL(url)

  };
  const rendernews = ({ item }: { item: any }) => (
    item.title!='[Removed]'?
    <TouchableOpacity style={styles.newsContainer} onPress={() => handlenewsPress(item.url)}>

      {item.urlToImage ? (
        <Image
        source={{ uri: item.urlToImage }}
        style={styles.thumbnail}
        resizeMode="cover"
        />
      ) : (
        <Text style={{color:'#888'}}>No Image Available</Text>
      )}
      <View style={styles.details}>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.summary}>{item.show.summary.replace(/<\/?[^>]+(>|$)/g, "")}</Text> */}
      </View>
    </TouchableOpacity>:
    <></>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={{fontSize:20,fontWeight:'700',color:'black'}}>Back</Text>
        </TouchableOpacity>
        <Text style={{alignSelf:'center',marginBottom:7,color:'black',fontSize:27,fontWeight:'600'}}>Search Screen </Text>
      </View>
      <View style={styles.box}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter search query"
            placeholderTextColor="#888"
            value={query}
            onChangeText={setQuery}
          />
          
        </View>
        <View >{
          loading?
          <View><ActivityIndicator size="large" color="#0000ff" /></View>
          :
          news?
          
          <FlatList
          
          data={news}
          renderItem={rendernews}
          
          keyExtractor={(item,index) => index.toString()}/>
          :
          <Text style={{alignSelf:'center',fontSize:40}}>{query==''?'Enter News to Search ':`No News with Result  ${query}`}</Text>
        }
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  toolbar:{
    backgroundColor:'#ddd',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
  },
  author:{
    fontSize:18,
    fontWeight:'bold',
    color:'black'

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:8,
    marginBottom: 16,
    marginTop:3
  },
  headerTitle: {
    fontSize: 24,
    color:'black',
    alignSelf:'center',
    fontWeight:'700',
    marginBottom:10
  },
  newsContainer: {
    flexDirection: 'column',
    marginBottom: 16,
    marginHorizontal:'1%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  thumbnail: {
    height: 150,
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  summary: {
    marginTop: 8,
    color: '#666',
  },
  imagePlaceholder: {
    width: 100,
    height: 150 ,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  box:{
    flex:1,
    padding:10
  },
  input: {
    flex:2,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginEnd:10,
    color:'black',
  },
  button:{
    backgroundColor:'lightblue',
    padding:10,
    color:'#fff',
    fontSize:15
  },
  searchBox:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center'
  }
});
