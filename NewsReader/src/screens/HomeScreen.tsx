// screens/HomeScreen.js

import React, {useEffect,useState}from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, TextInput, Button, Linking } from 'react-native';
import { NativeStackScreenProps,NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackPrams } from '../App';


type HomeScreenProps = NativeStackScreenProps<RootStackPrams ,"HomeScreen">;

function HomeScreen({ navigation }:HomeScreenProps) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    fetchnews();
  }, []);

  const fetchnews = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=673a20716e4545d7964cae90addde29c');
      const data = await response.json();
      setNews(data);
    } catch (err) {
      setError('Failed to fetch news');
    } finally {
      setLoading(false);
    }
  };

  const handlenewsPress = (url: string) => {
    Linking.openURL(url);

  };

  const handleSearchPress = () => {
    navigation.navigate('SearchScreen');
  };

  const rendernews = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.newsContainer} onPress={() => handlenewsPress(item.url)}>
      {item.urlToImage ? (
        <Image
        source={{ uri: item.urlToImage}}
        style={styles.thumbnail}
        resizeMode="contain"
        />
      ) : (
        <Text style={{color:'#888'}}>No Image Available</Text>
      )}
      <View style={styles.details}>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.summary}>{item.show.summary.replace(/<\/?[^>]+(>|$)/g, "")}</Text> */}
      </View>
    </TouchableOpacity>
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Top News</Text>
        <Button title="Search" onPress={handleSearchPress} />
      </View>
      <FlatList
        
        data={news.articles}
        renderItem={rendernews}
        keyExtractor={(item,index) => index.toString()}
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
  newsContainer: {
    flexDirection: 'column',
    marginBottom: 16,
    marginHorizontal:'1%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  author:{
    fontSize:18,
    fontWeight:'bold',
    color:'black'

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
    fontSize: 17,
    fontWeight: '400',
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