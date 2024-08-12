import React, { useState, useRef } from 'react';

import { StyleSheet, View, ScrollView, TouchableOpacity,Animated} from 'react-native';
import { Text, Image, Button, CheckBox, Overlay, Icon} from '@rneui/themed';
import { getProductById} from '../data/productData';

export default function ProductDetailScreen({ route, navigation }) {
  // state all check box 
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(true);
  const [check3, setCheck3] = useState(true);
  const [check4, setCheck4] = useState(true);
  const toggleCheckbox1 = () => setCheck1(!check1);
  const toggleCheckbox2 = () => setCheck2(!check2);
  const toggleCheckbox3 = () => setCheck3(!check3);
  const toggleCheckbox4 = () => setCheck4(!check4);
  
  // state variables used to show or hide the overlay
  const [visibleAlert, setVisibleAlert] = useState(false);

  // get the params from the route
  const { detailId } = route.params;

  // use the helper function in the data file to get a specific flower
  const currProduct = getProductById(detailId);

  // keyFeature map here

  const keyFeature = currProduct.keyFeature.map((currKeyF) =>
  <View key={currKeyF.key} style={styles.KeyFListItem}>
  <Text>∙ {currKeyF.value}</Text>
  </View>
  );

  // Comfort map here
  const Comfort = currProduct.Comfort.map((currKeyC) =>
  <View key={currKeyC.key} style={styles.KeyFListItem}>
  <Text>{currKeyC.value}</Text>
  </View>
  );
  
  //Assembly map here
  const Assembly = currProduct.Assembly.map((currKeyA) =>
  <View key={currKeyA.key} style={styles.KeyFListItem}>
  <Text>{currKeyA.value}</Text>
  </View>
  );

    
  //Care instruction map here
  const CareInstruction = currProduct.CareInstruction.map((currKeyCI) =>
  <View key={currKeyCI.key} style={styles.KeyFListItem}>
  <Text>{currKeyCI.value}</Text>
  </View>
  );

    //Care instruction map here
    const Warranty = currProduct.Warranty.map((currKeyW) =>
    <View key={currKeyW.key} style={styles.KeyFListItem}>
    <Text>{currKeyW.value}</Text>
    </View>
    );

//show card 
const [expanded, setExpanded] = useState(false);
const animation = useRef(new Animated.Value(0)).current;

const toggleExpansion = () => {
  const initialValue = expanded ? 1 : 0;
  const finalValue = expanded ? 0 : 1;

  setExpanded(!expanded);

  Animated.timing(animation, {
    toValue: finalValue,
    duration: 300,
    useNativeDriver: false,
  }).start();
};

const animatedHeight = animation.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 680], // 卡片展开后的高度，可以根据需要调整
 
});


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
    <View style={{backgroundColor:'#fff', position:'relative',height:'100%'}}>
        <ScrollView>
          <View style={styles.ImageC}>
            <Image 
            style={styles.Image}
              source={currProduct.imageUri}
            />
            <View style={styles.chooseBox}>
                <CheckBox
                  checked={check1}
                  checkedIcon="square-o"
                  uncheckedIcon="square-o"
                  checkedColor="#999999"
                  onPress={toggleCheckbox1}
                />
                <CheckBox
                  checked={check2}
                  checkedIcon="square"
                  uncheckedIcon="square-o"
                  checkedColor="#93BEDD"
                  onPress={toggleCheckbox2}
                />
                <CheckBox
                  checked={check3}
                  checkedIcon="square"
                  uncheckedIcon="square-o"
                  checkedColor="#F6E091"
                  onPress={toggleCheckbox3}
                />
                   <CheckBox
                  checked={check4}
                  checkedIcon="square"
                  uncheckedIcon="square-o"
                  checkedColor="#DDA9CE"
                  onPress={toggleCheckbox4}
                />
            </View>
          </View>
   
        
        <TouchableOpacity style={styles.container} onPress={toggleExpansion}>
          
        <View style={styles.lineC}><View style={ styles.line}/></View>
            <View style={styles.title}>
              <Text h3 style={styles.heading}>{currProduct.title}</Text>
              <Text>🟢 12 In Stock</Text>
            </View>
            <Text>{currProduct.describe}</Text>
           
            <Text style={styles.star}>{currProduct.star} <Text>{currProduct.rating}</Text> </Text>
            
          <Animated.View style={{ height: animatedHeight, overflow: 'hidden',}} >
            <Text h4 style={styles.heading}>Key Feature</Text>
            {keyFeature}
            <Text h4 style={styles.heading}>Comfort</Text>
            {Comfort}
            <Text h4 style={styles.heading}>Assembly</Text>
            {Assembly}
            <Text h4 style={styles.heading}>Care Instruction</Text>
            {CareInstruction}
            <Text h4 style={styles.heading}>Warranty</Text>
            {Warranty}


            </Animated.View>


            <Overlay isVisible={visibleAlert} style={styles.overlay}>
              <View style={styles.overlayHeader}>
                <Text h3>Added to Cart</Text>
                <TouchableOpacity  onPress={() => setVisibleAlert(false)} ><Icon name='close-circle-outline' type='ionicon'/></TouchableOpacity> 
              </View>

            <View style={styles.overlayProductCard}>
                <Image 
                style={styles.overlayProductImage}
                source={currProduct.imageUri}
                />
                <View style={{width:'30%'}}>
                  <Text>{currProduct.title}</Text>
                  <Text h4>$ {currProduct.price}</Text>
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
            <View style={styles.overlayButtonC}>
              <Button
                title="Shop More"         
                raised={true}              
                onPress={() => setVisibleAlert(false)}
                type="clear" 
                buttonStyle={{backgroundColor:'transparent', borderColor:'#5F8671', borderWidth:1,}}  
                titleStyle={{color:'#5F8671'}}           
              
              />
              <Button
                title="Continue"         
                raised={true}
                onPress={() => navigation.navigate('Cart')}
              />

            </View>
           
          </Overlay>
         
        </TouchableOpacity>
        </ScrollView>
          <View style={styles.buttonC}>
            <View style={{flexDirection:'row', justifyContent:'space-between',paddingHorizontal:10,marginVertical:10,}}>
            <View style={styles.quantityC}>
                  <TouchableOpacity style={styles.quantityButton} onPress={decrementQuantity}>
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{quantity}</Text>
                  <TouchableOpacity style={styles.quantityButton} onPress={incrementQuantity}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
              <Text>$ {currProduct.price}</Text>
            </View>
                  <Button
                  title='Add to Cart'
                  raised={true}
                  onPress={() => setVisibleAlert(true)}
                  />
          </View>
    </View>

  )
}

const styles = StyleSheet.create({
  title:{
    width:'100%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    padding:5,
  },
  container: {
    paddingTop:10,
    paddingHorizontal:10,
    elevation: 15,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    flex: 1,
    backgroundColor: '#fff',
    textAlign:'right',
    justifyContent: 'flex-start',
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  ImageC:{
    width:'100%',
    height:400,
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative',
  },
  Image:{
    width:400,
    height:400,
    resizeMode: 'contain', 

  },

  chooseBox:{
    position:'absolute',
    top:5,
    right:5,

  },
  KeyFListItem:{
      marginTop:5,
      marginLeft:20,
      alignItems:'start',
  },
  lineC:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20,
  },
  line:{
    backgroundColor:'#888',
    borderRadius:5,
    height:4,
    width:100,
  },
  star:{
    color:'#FFA500',
    fontSize:16,
    marginBottom:20,
    marginTop:20,
  },
  buttonC:{
    position:'absolute',
    paddingVertical:10,
    height:130,
    backgroundColor:"#fff",
    width:"100%",
    bottom:0,
    zIndex:200,
  },

  //OverLay 
 
  overlayHeader:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  overlayProductCard:{
    width:'95%',
    height:'100',
    elevation:5,
    backgroundColor:"#fff",
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:20,
    alignSelf:'center',
    marginVertical:20,
  },
  overlayProductImageC:{
    width:90,
    height:90,
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlayProductImage:{
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

  overlayButtonC:{
    width:'90%',
    flexDirection:'row',
    justifyContent:'center',
    alignSelf:'center',
    paddingHorizontal:20,

  }

})