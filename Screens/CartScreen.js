import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image,TouchableOpacity } from 'react-native';


import { Button, Icon,Text,Badge} from '@rneui/themed';

export default function CartScreen({ navigation }) {
      //Increase and decreas quantity
        const [quantity, setQuantity] = useState(1);
        const incrementQuantity = () => {
            setQuantity(quantity + 1);
        };
        
        const decrementQuantity = () => {
            if (quantity > 1) {
            setQuantity(quantity - 1);
            }
        };


  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text h2>Order</Text>
        <Text>3 Items</Text>
       </View>

        <View style={styles.cartCard}>
            <View style={styles.cartProductCard}>
                <View style={styles.cartProductImageC}>
                    <Image 
                    style={styles.cartProductImage}
                    source={require('../assets/Product/AddieArmchair.png')}
                    />
                    <Badge value="1" status="error" />
                </View>
            
                    <View style={{width:'30%'}}>
                    <Text>White Leather Armchair</Text>
                    <Text h4>$ 1120</Text>
                    </View>

                    <View style={styles.quantityC}>
                    <TouchableOpacity style={styles.quantityButton} onPress={decrementQuantity}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity style={styles.quantityButton} onPress={incrementQuantity}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.cartProductCard}>
                <View style={styles.cartProductImageC}>
                    <Image 
                    style={styles.cartProductImage}
                    source={require('../assets/Product/NarraLED:DIMDeskLight.png')}
                    />
                    <Badge value="1" status="error" />
                </View>
            
                    <View style={{width:'30%'}}>
                    <Text>Narra LED/DIM Desk Light</Text>
                    <Text h4>$ 78</Text>
                    </View>

                    <View style={styles.quantityC}>
                    <TouchableOpacity style={styles.quantityButton} onPress={decrementQuantity}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity style={styles.quantityButton} onPress={incrementQuantity}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.cartProductCard}>
                <View style={styles.cartProductImageC}>
                    <Image 
                    style={styles.cartProductImage}
                    source={require('../assets/Product/KianaOutdoorPatioSet.png')}
                    />
                    <Badge value="1" status="error" />
                </View>
            
                    <View style={{width:'30%'}}>
                    <Text>White Leather</Text>
                    <Text h4>$ 7790</Text>
                    </View>

                    <View style={styles.quantityC}>
                    <TouchableOpacity style={styles.quantityButton} onPress={decrementQuantity}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity style={styles.quantityButton} onPress={incrementQuantity}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
        <View style={styles.deleteText}>
            <Icon name='trash-outline' type='ionicon'/>
            <Text>Delete all orders</Text>
        </View>
        <View style={styles.line}/>
        <View>
            <View style={styles.textHeader}>
                <Text>Subtotal</Text>
                <Text>$9188</Text>
            </View>
            <View style={styles.textHeader}>
                <Text>GST/PST Tax</Text>
                <Text>12%</Text>
            </View>
            <View style={styles.textHeader}>
                <Text>Delivery</Text>
                <Text>Standard | Free</Text>
            </View>
            <View style={styles.textHeader}>
                <Text style={{color:'#5F8671'}}>Total</Text>
                <Text style={{color:'#5F8671'}}>$ 10,290.56</Text>
            </View>
        </View>

        
        <View style={{width:'100%',marginTop:20,}}>
            <Button
              title="Checkout"         
              raised={true}              
              onPress={() => navigation.navigate('Payment')}
            />
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexGrow: 1,
    alignItems:'center',
    backgroundColor:'#fff',
    width:'100%',
  },


header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'90%',
    marginBottom:40,
},

cartCard:{
    borderRadius:20,
    width:'90%',
    height:250,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:40,
},

cartProductCard:{
    width:'95%',
    height:'100',
    borderRadius:15,
    elevation:5,
    backgroundColor:"#fff",
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:20,
    alignSelf:'center',
    marginVertical:10,
},

cartProductImageC:{
    width:90,
    height:90,
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    position:"relative",
  },
 cartProductImage:{
    width:90,
    height:90,
    resizeMode: 'contain', 
  },
  quantityC:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    width:90,
    paddingHorizontal:10,
    gap:7,
  },
 

  quantityButton:{
    width:20,
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    height:25,
    backgroundColor:'#fff',
    elevation:2,
  },

  deleteText:{
    width:"100%",
    marginVertical:20,
    alignItems:'center',
    textAlign:'center',
    flexDirection:'row',
    justifyContent:'center',
  },

  line:{
    width:'100%',
    height:1,
    backgroundColor:'#ddd',
  },
  
textHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'90%',
    marginVertical:5,
},

});