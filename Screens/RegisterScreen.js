import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


import { Button, Input , Icon, CheckBox} from '@rneui/themed';

export default function RegisterScreen({ navigation }) {
    const [check1, setCheck1] = useState(false);

    // Drop Down Menu
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'English', value: 'English' },
        { label: 'French', value: 'French' },
        { label: 'Chiness', value: 'Chiness' },
    ]);

  return (
    <View style={styles.container}>
        <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="English"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />
      <Image
        style={styles.backgroundImage}
        source={require('../assets/Register.jpeg')}/>
        <Text style={styles.loginHeader}>Register</Text>
        <Text>Please sign up to continue</Text>
        <View style={{marginTop:20,}}>
            <Input placeholder=' Enter Email' leftIcon={{ type: 'ionicon', name: 'mail-outline',marginRight:10 ,color:'#000' }}/>
            <Input placeholder=' Phone Number' leftIcon={{ type: 'ionicon', name: 'call-outline', marginRight:10 ,color:'#000'}} />
            <Input placeholder=' Creat Password' leftIcon={{ type: 'ionicon', name: 'lock-closed-outline', marginRight:10 ,color:'#000'}} secureTextEntry={true} />

        </View>

        <View style={styles.container}>

          <View style={{width:'100%'}}>
            <Button
              title="Create account"         
              raised={true}              
              onPress={() => navigation.navigate('RegisterScreen')}
            />
            <Button
              title="Continue as guest"         
              raised={true}
              type="clear" 
              buttonStyle={{backgroundColor:'transparent', borderColor:'#5F8671', borderWidth:1,}}  
              titleStyle={{color:'#5F8671'}}           
              onPress={() => navigation.navigate('ProductList')}
            />

          </View>

          <Text style={{color:'#888'}}>Not a member? Create an account</Text>

        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex:1,
    flexGrow: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    position:'relative',
  },
  dropdown: {
    width: 100,
  
    borderColor: '#5F8671',
    position:'absolute',
    right:0,
    top:10,
  },
  dropdownContainer: {
    position:'absolute',
    width: 100,
    borderColor: '#5F8671',
    right:0,
    top:60,
  },

  loginHeader:{
    fontSize:60,
    color:'#E5B444',
    fontFamily:'Merriweather_700Bold',
  },

  backgroundImage: {
    marginTop:25,
    width:'100%',
    flex: 1,
    justifyContent: 'center',
    resizeMode:'center',
  },

  ImageContainer:{
    flex:1,
    justifyContent: 'center',
    padding:10,
  },

  Image: {
    width:200,
    height:200,
    margin:50,

  }
});