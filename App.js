import * as React from 'react';
import { StyleSheet, View, ActivityIndicator, } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Merriweather_400Regular, Merriweather_700Bold } from '@expo-google-fonts/merriweather';

import { ThemeProvider, Icon } from '@rneui/themed';
import { NarraTheme } from './theme/NarraTheme';


import ProductListScreen from './Screens/ProductListScreen';
import HomeScreen from './Screens/HomeScreen';
import ProductDetailScreen from './Screens/ProductDetailScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import CartScreen from './Screens/CartScreen';
import PaymentScreen from './Screens/PaymentScreen';
import SuccessScreen from './Screens/SuccessScreen';
const Stack = createNativeStackNavigator();



export default function App() {
// Use fonts and check if they are loaded.
  let[fontsLoaded] = useFonts({
    Merriweather_400Regular,
    Merriweather_700Bold,
  });

// If the font is not yet loaded, display the loading 
  if(!fontsLoaded){
    return(
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#5F8671'/>
      </View>
    )
  }
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={NarraTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name='LoginScreen'
            component={LoginScreen}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name='RegisterScreen'
            component={RegisterScreen}
            options={{ title: 'Register' }}
          />
          <Stack.Screen
            name='ProductList'
            component={ProductListScreen}
            options={{ title: 'Product List' }}
          />
          <Stack.Screen
            name='ProductDetail'
            component={ProductDetailScreen}
            options={{ 
              title: 'Detail' ,
              headerRight: () => (
                <Icon
                  name='open-outline'
                  type='ionicon'
                  containerStyle={{ marginRight: 5}}
                />
              ),
          
          }}
           
          />
          <Stack.Screen
            name='Cart'
            component={CartScreen}
            options={{ 
              title: 'Cart' ,
              headerRight: () => (
                <Icon
                  name='chatbubble-outline'
                  type='ionicon'
                  containerStyle={{ marginRight: 5}}
                />
              ),
            }}
          />

          <Stack.Screen
            name='Payment'
            component={PaymentScreen}
            options={{ 
              title: 'Payment' ,
              headerRight: () => (
                <Icon
                  name='chatbubble-outline'
                  type='ionicon'
                  containerStyle={{ marginRight: 5}}
                />
              ),
            }} 
          />
            <Stack.Screen
            name='Success'
            component={SuccessScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
});