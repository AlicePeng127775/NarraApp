import React from 'react';

import {  View, StyleSheet} from 'react-native';

import { Text, Avatar } from '@rneui/themed';

export default function MyClassList({listData}) {
    return(
        <View> 
        <View style={styles.showClassList}>
          
            <Avatar 
              rounded
              source={listData.imageUri}
            />
            <Text style={{marginRight:10, marginTop:0,}}>{listData.title}</Text>
            <View style={styles.background}/>
          </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    
    showClassList:{
      flex:1,
      alignItems:'center',
      justifyContent:'space-around',
      position:'relative',
      paddingHorizontal:5,marginBottom:10,
   
    },
    background:{
      position:'absolute',
      width:'100%',
      height:80,
      backgroundColor:'#fff',
      elevation:5,
      zIndex:-11,
      bottom:0,
      borderRadius:10,
      shadowColor: '#666',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 4,

    }
})  
  