import { StyleSheet, View, ImageBackground, Image } from 'react-native';

import { Button } from '@rneui/themed';

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/backgroundImage.jpg')}>
    

        <View style={styles.container}>

            <View>
                <Image style={styles.Image} source={require('../assets/Logo.png')}/>
            </View>

          <View>
            <Button
              title="Get started"         
              raised={true}              
              onPress={() => navigation.navigate('LoginScreen')}
            />

          </View>

        </View>

      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexGrow: 1,
    alignItems:'center',
    justifyContent:'center',
    width:'100%'
  },

  backgroundImage: {
    width:'100%',
    flex: 1,
    justifyContent: 'center',
  },

  ImageContainer:{
    flex:1,
    justifyContent: 'center',
    padding:10,
  },

  Image: {
    width:300,
    height:300,
    margin:50,

  }
});