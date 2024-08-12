import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';


import { Button, Input , Icon, CheckBox} from '@rneui/themed';

export default function SuccessScreen({ navigation }) {
    const [check1, setCheck1] = useState(false);

  return (
    <View style={{position:'relative',height:'100%'}}>
        <View   style={styles.backgroundImageC}>
        <Image
        style={styles.backgroundImage}
        source={require('../assets/success.png')}/>

        </View>
        <Icon name="checkmark-circle-outline" type="ionicon" color='green' size={80}/>
        <Text style={styles.Header}>Thank You</Text>
        <Text style={{alignSelf:'center'}}>Your transaction was successful</Text>

          <View style={{width:'100%', position:'absolute',bottom:20,}}>
            <Button
              title="Continue shopping"         
              raised={true}              
              onPress={() => navigation.navigate('ProductList')}
            />
            <Button
              title="Track order"         
              raised={true}
              type="clear" 
              buttonStyle={{backgroundColor:'transparent', borderColor:'#5F8671', borderWidth:1,}}  
              titleStyle={{color:'#5F8671'}}           
              onPress={() => navigation.navigate('ProductList')}
            />

          </View>

        
    </View>

  );
}

const styles = StyleSheet.create({
  container: {

    alignItems:'center',
    justifyContent:'center',
    width:'100%'
  },
  backgroundImage: {
    height:300,
    width:"100%",
    alignSelf:'center',
    resizeMode:'center',
  },
  backgroundImageC: {
    marginTop:25,
    width:'100%',
    justifyContent: 'center',
  },
  Header:{
    fontSize:60,
    color:'#333',
    fontFamily:'Merriweather_700Bold',
    alignSelf:'center',
    
  },
});