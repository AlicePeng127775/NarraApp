import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


import { Button, Input , Icon, CheckBox} from '@rneui/themed';

export default function LoginScreen({ navigation }) {
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
        textStyle={styles.dropdownText}
      />
      <Image
        style={styles.backgroundImage}
        source={require('../assets/login.jpeg')}/>
        <Text style={styles.loginHeader}>LOG IN</Text>
        <Text>Please sign in to continue</Text>
        <View style={{marginTop:20,}}>
            <Input placeholder=' Username' leftIcon={{ type: 'ionicon', name: 'mail-outline',marginRight:10 ,color:'#000' }}/>
            <Input placeholder=' Password' leftIcon={{ type: 'ionicon', name: 'lock-closed-outline', marginRight:10 ,color:'#000'}} secureTextEntry={true} />
        </View>
      <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',width:'100%',paddingHorizontal:10}}>
        <CheckBox
            title="Remember Me"
           checked={check1}
           onPress={() => setCheck1(!check1)}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
         />
         <Text style={{color:'#888'}}>Forgot Password</Text>
      </View>

        <View style={styles.container}>

          <View style={{width:'100%'}}>
            <Button
              title="Sign in"         
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
    flex:1,
    flexGrow: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    position:'relative',
    width:'100%'
  },
  dropdown: {
    width: 100,
    borderColor: '#5F8671',
    height:40,
    position:'absolute',
    right:5,
    top:10,
  },

  dropdownContainer: {
    position:'absolute',
    width: 100,
    borderColor: '#5F8671',
    right:5,
    top:60,
  },
  dropdownText: {
    fontSize: 12,  // 調整文本大小
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