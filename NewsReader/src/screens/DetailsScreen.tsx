import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, Linking } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackPrams } from '../App';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

type DetailsScreenProps = NativeStackScreenProps<RootStackPrams, "DetailsScreen">;

export default function DetailsScreen({ route }: DetailsScreenProps) {
  const { news } = route.params;
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const navigation = useNavigation();

  
  const cleanedSummary = news.show.summary ? news.show.summary.replace(/<\/?[^>]+(>|$)/g, "") : "No summary available.";
  
  
  const sortSummary = isExpand ? cleanedSummary : cleanedSummary.slice(0, 100) + '...';

  const handleBack=()=>{
    navigation.goBack();
  }
  
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>

      <View style={styles.toolbar}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={{fontSize:20,fontWeight:'700',color:'black'}}>Back</Text>
        </TouchableOpacity>
        <Text style={{alignSelf:'center',marginBottom:7,color:'black',fontSize:27,fontWeight:'600'}}>Details Screen </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {news.show.image?.medium ? (
          <Image
            source={{ uri: news.show }}
            style={styles.thumbnail}
            resizeMode="contain"
          />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imagePlaceholderText}>No Image Available</Text>
          </View>
        )}

        <Text style={styles.title}>{news.show.name}</Text>
        
        <Text style={styles.summary}>{sortSummary}</Text>
        <TouchableOpacity style={styles.readMoreButton} onPress={() => setIsExpand(!isExpand)}>
          <Text style={styles.readMoreText}>Read {isExpand ? "Less" : "More"}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toolbar:{
    backgroundColor:'#ddd',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10
  },
  scrollContainer: {
    flexGrow: 1,
    padding:10
  },
  thumbnail: {
    width: width,
    height: height / 3,
    alignSelf: 'center',
  },
  imagePlaceholder: {
    width: width,
    height: height / 3,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imagePlaceholderText: {
    color: '#888',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  summary: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
  readMoreButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  readMoreText: {
    fontSize: 17,
    color: 'blue',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
