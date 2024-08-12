import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { CheckBox} from '@rneui/themed';

export default function MyProductItem({ itemData, navigatorRef }) {
  
  //status of like buttons
  const [like, setState] = React.useState(true);
  const toggleCheckbox = () => setState(!like);

  return (
      <TouchableOpacity style={styles.productCard}
      disabled={!itemData.active}
      onPress={() => navigatorRef.navigate("ProductDetail",{detailId: itemData.id}
      )}
       >
         <View>
          <View style={styles.productImageC}>
          <Image
             source={itemData.imageUri}
             style={styles.productImage}
           />
            <View style={styles.likeBox}>
              <CheckBox
                  checked={like}
                  checkedIcon="heart"
                  uncheckedIcon="heart-o"
                  checkedColor="red"
                  onPress={toggleCheckbox}
                />
            </View>
          </View>
           
           <Text style={styles.productSize}>{itemData.size}</Text>
           <View style={styles.productTextBox}>
             <Text style={styles.productTitle}>{itemData.title}</Text>
             <Text style={styles.productPrice}>${itemData.price}</Text>
           </View>
         
         </View>
       </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  
  productCard: {
    maxWidth: '45%',
    flex: 0.5,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 10,
    elevation: 15,
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },

  productImageC:{
    position:'relative',
  },
  likeBox:{
    position:'absolute',
    right:0,
  },
  
  productImage: {
    width: '100%',
    height: 180,
    alignItems:'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode:'contain',
  },

  productSize:{
    fontSize:10,
    textAlign:'center',
  }, 
  productTitle:{
    width:'48%',
    fontSize:12,
  },

 productPrice:{
    width:'40%',
    textAlign:'right',
  },
  
  productTextBox: { 
    width:'100%',
    flexDirection: 'row',
    alignItems:'baseline',
    justifyContent: 'space-between',
    padding:5,
   
  },
  
  });
