import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  ScrollView

} from'react-native';
import FlatCard from "./component/FlatCard";
import ElevatedCards from "./component/ElevatedCards";
import FancyCard from "./component/FancyCard";
import LinkCard from "./component/LinkCard";
import ConatactList from "./component/ConatactList";


function App () {
  return(
  <SafeAreaView style={{flex:1}}>
    <ScrollView>
        <View>

          <FlatCard/>
          <ElevatedCards/>
          {/* <View style={{height:400}}>
          <ScrollView horizontal={false}
            nestedScrollEnabled={true}> */}
          <FancyCard 
              link='https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Goa.png' 
              place='Goa' title="Goa Beaches" 
              description="Unarguably, Goa has to be amongst the first few famous places in India in your twenties. Young and energetic!"/>
          <FancyCard link="https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Rishikesh1.jpg"
           place='Rishikesh' title="River rafting" 
           description="With bursting energy and enthusiasm, the twenties is the best time to enjoy thrill and adventure, especially with your friends."/>
          <FancyCard link="https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Tirthan-Valley.jpg "
           place='Kullu, Tirthan' title="Tirthan Valley" description="Striking a perfect balance between peace and adventure"/>
          {/* </ScrollView>
          </View> */} 
           {/*to Enable scrolling uncomment these and above element respective to these*/}
        </View>     
        <LinkCard/> 
        <ConatactList/>
      </ScrollView>
  </SafeAreaView> 
  )
}

export default App;