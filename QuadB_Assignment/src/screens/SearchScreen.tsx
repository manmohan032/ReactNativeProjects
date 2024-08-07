// screens/SearchScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Touchable, TouchableOpacity, ActivityIndicator, Image, FlatList } from 'react-native';
import { NativeStackScreenProps,NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackPrams } from '../App';

type SearchScreenProps = NativeStackScreenProps<RootStackPrams ,"SearchScreen">;

export default function SearchScreen({ navigation }:SearchScreenProps) {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
    fetchMovies();
  }, [query]);

  
  const handleBack=()=>{
    navigation.goBack();
  }
  const fetchMovies = async () => {
    setLoading(true);
    try {
      const url= query?'https://api.tvmaze.com/search/shows?q=${query}':'https://api.tvmaze.com/search/shows?q=all';
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data);
    } catch (err) {
      setError('Failed to fetch movies');
    } finally {
      setTimeout(()=>{
        setLoading(false)
      },1000)
    }
  };
  const handleMoviePress = (movie: any) => {
    navigation.navigate('DetailsScreen', { movie:movie });
  };
  const renderMovie = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.movieContainer} onPress={() => handleMoviePress(item)}>
      {item.show.image?.medium ? (
          <Image
            source={{ uri: item.show.image.medium }}
            style={styles.thumbnail}
            resizeMode="contain"
          />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={{color:'#888'}}>No Image Available</Text>
          </View>
        )}
      <View style={styles.details}>
        <Text style={styles.headerTitle}>{item.show.name}</Text>
        {/* <Text style={styles.summary}>{item.show.summary.replace(/<\/?[^>]+(>|$)/g, "")}</Text> */}
      </View>
    </TouchableOpacity>
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
          movies.length==0?
          <Text style={{alignSelf:'center',fontSize:40}}>No movies with name {query}</Text>:
          <FlatList
          
          data={movies}
          renderItem={renderMovie}
          numColumns={3}
          keyExtractor={(item) => item.show.id.toString()}
        />}
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
  movieContainer: {
    width:'33%',
    flexDirection: 'column',
    marginBottom: 16,
    marginHorizontal:'1%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  thumbnail: {
    width: 100,
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
