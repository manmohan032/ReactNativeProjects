import React from "react";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    SafeAreaView
} from 'react-native';


function AppPro() : JSX.Element{
    const isDarkMode =useColorScheme() === 'dark';
    return (
        <SafeAreaView style={style.container}>
            <View>
                <Text style={isDarkMode ? style.whiteText : style.blackText}>hello world!</Text>
            </View>
        </SafeAreaView>
    )
}


const style =StyleSheet.create({    
    container:{
        flex: 1 ,
        alignItems:'center',
        justifyContent:'center',
        fontSize:120,
        fontWeight:'600'
    },
    whiteText:{
        color:'#fff',
    },
    blackText:{
        color:'#000'
    }
});

export default AppPro;



