// screens/HomeScreen.js

import React, {useEffect,useState}from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { NativeStackScreenProps,NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackPrams } from '../App';


type HomeScreenProps = NativeStackScreenProps<RootStackPrams ,"HomeScreen">;

function HomeScreen({ navigation }:HomeScreenProps) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.json();
      setMovies(data);
    } catch (err) {
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  const handleMoviePress = (movie: any) => {
    navigation.navigate('DetailsScreen', { movie:movie });
  };

  const handleSearchPress = () => {
    navigation.navigate('SearchScreen');
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
        <Text style={styles.title}>{item.show.name}</Text>
        {/* <Text style={styles.summary}>{item.show.summary.replace(/<\/?[^>]+(>|$)/g, "")}</Text> */}
      </View>
    </TouchableOpacity>
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Movies</Text>
        <Button title="Search" onPress={handleSearchPress} />
      </View>
      <FlatList
        
        data={movies}
        renderItem={renderMovie}
        numColumns={3}
        keyExtractor={(item) => item.show.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
});

export default HomeScreen;