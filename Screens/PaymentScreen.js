import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, ScrollView,} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { Button, Input , Icon,Text, CheckBox} from '@rneui/themed';

export default function PaymentScreen({ navigation }) {
    const [check1, setCheck1] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    // Drop Down Menu
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Standard Delivery | Free', value: 'Standard Delivery | Free' },
        { label: 'Express Delivery + $5.00', value: 'Express Delivery + $5.00' },
        { label: 'Same Day Delivery + $7.00', value: 'Same Day Delivery + $7.00' },
        { label: 'Scheduled Delivery', value: 'Scheduled Delivery' },
    ]);

  return (
    <View style={styles.mainContainer}>
    
        <ScrollView style={styles.container}>
            
            <Text h3>Delievery Information</Text>
                <View style={{marginTop:20, alignSelf:'center'}}>
                    <Input placeholder=' Enter Delievery Address'/>
                    <Input placeholder=' Phone Number' />
                    <Input placeholder=' Email Address' />
                </View>
            <Text h3>Delievery Type</Text>
                <View style={{marginVertical:20,alignSelf:'center'}}>
                        <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder="Select Delivery Type"
                        style={styles.dropdown}
                        dropDownContainerStyle={styles.dropdownContainer}
                        textStyle={styles.dropdownText}
                    />
                </View>
                <Text h3>Payment Method</Text>
                <View style={styles.creditCardcontainer}>
                    <Text h4 style={{marginHorizontal:10,}}>Credit Card</Text>
                
                    <View style={styles.backgroundImageC} >
                    <View style={styles.chooseBox}>
                             <View style={[styles.checkboxContainer, selectedOption === 1 && styles.selectedCheckbox]}>
                                <CheckBox
                                    checked={selectedOption === 1}
                                    checkedIcon={<Image source={require('../assets/visa.png')} style={styles.checkboxImage} />}
                                    uncheckedIcon={<Image source={require('../assets/visa.png')} style={styles.checkboxImage} />}
                                    onPress={() => setSelectedOption(1)}
                                />
                            </View>
                            <View style={[styles.checkboxContainer, selectedOption === 2 && styles.selectedCheckbox]}>
                                <CheckBox
                                    checked={selectedOption === 2}
                                    checkedIcon={<Image source={require('../assets/mastercard.png')} style={styles.checkboxImage} />}
                                    uncheckedIcon={<Image source={require('../assets/mastercard.png')} style={styles.checkboxImage} />}
                                    onPress={() => setSelectedOption(2)}
                                />
                            </View>
                            <View style={[styles.checkboxContainer, selectedOption === 4 && styles.selectedCheckbox]}>
                                <CheckBox
                                    checked={selectedOption === 4}
                                    checkedIcon={<Image source={require('../assets/American.png')} style={styles.checkboxImage} />}
                                    uncheckedIcon={<Image source={require('../assets/American.png')} style={styles.checkboxImage} />}
                                    onPress={() => setSelectedOption(4)}
                                />
                            </View>
                            <View style={[styles.checkboxContainer, selectedOption === 3 && styles.selectedCheckbox]}>
                                <CheckBox
                                    checked={selectedOption === 3}
                                    checkedIcon={<Image source={require('../assets/JCB.png')} style={styles.checkboxImage} />}
                                    uncheckedIcon={<Image source={require('../assets/JCB.png')} style={styles.checkboxImage} />}
                                    onPress={() => setSelectedOption(3)}
                                />
                            </View>

                        </View>
                        <Image style={styles.backgroundImage}
                        source={require('../assets/CreditCard.png')}/>
                    </View>
                    <Text style={{alignSelf:'center'}}>Add New Card</Text>
                </View>
                <View style={styles.listCardcontainer}>
                    <Text h4 style={{marginHorizontal:10,}}>Google | Apple Pay</Text>
                    <Icon name='chevron-forward-outline' type='ionicon' color='#aaa'/>
                </View>
                <View style={styles.listCardcontainer}>
                    <Text h4 style={{marginHorizontal:10,}}>Debit Card</Text>
                    <Icon name='chevron-forward-outline' type='ionicon' color='#aaa'/>
                </View>
                <View style={styles.listCardcontainer}>
                    <Text h4 style={{marginHorizontal:10,}}>Gift Card</Text>
                    <Icon name='chevron-forward-outline' type='ionicon' color='#aaa'/>
                </View>
                <View>
                    <CheckBox
                        title="I have read and accepted with the Term and Condition of the app"
                        checked={check1}
                        onPress={() => setCheck1(!check1)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checkedColor='#5F8671'
                    />
                </View>

                <View style={{paddingHorizontal:10,marginVertical:20,}}>
                    <Text h5>Payment Data Collection</Text>
                    <Text>At Narra, we are committed to ensuring the privacy and security of your payment information when you use our delivery service. We understand the importance of safeguarding your personal and financial data, and we have implemented robust measures to protect your information.</Text>
                    <Text h5>Privacy and Security </Text>
                    <Text>We collect and process the necessary payment information, such as credit card details or other payment methods, to facilitate transactions through the Narra mobile application. This data is used solely for payment processing and is securely stored. We  also employ advanced encryption technology to protect your payment information during transmission. This ensures that your sensitive data remains confidential and secure when sent over the internet. Your personal information and payment data are stored securely within our systems. Access to this information is restricted to authorized personnel only.</Text>
                </View>

        </ScrollView >

        <View style={{width:'100%',marginVertical:10,}}>
                    <Button
                    title="Pay now"         
                    raised={true}              
                    onPress={() => navigation.navigate('Success')}
                    />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
},
container: {
    paddingHorizontal:10,
    backgroundColor:'#fff',
    position:'relative',
    width:'100%'
  },
  dropdown: {
    width: "90%",
    height:40,   
    borderRadius: 10,
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor:"#eee", // 移除边框
    elevation:5,

  },

  dropdownContainer: {
    width: "90%",
    borderRadius: 5,
    borderWidth: 0,
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation:5,
    
  },
  dropdownText: {
    fontSize: 16,  // 調整文本大小
  },

  creditCardcontainer:{
    elevation:5,
    paddingHorizontal:5,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 10,
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  listCardcontainer:{
    width:"95%",
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    alignSelf:'center',
    paddingVertical:20,
    paddingHorizontal:10,
    elevation:5,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 10,
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },

  chooseBox: {
    flexDirection: 'row',
    justifyContent:'space-between',
    width:'100%',
  },
  checkboxImage: {
    width: 40,
    height: 30,
    resizeMode:'cover',
  },
  selectedCheckbox: {
    borderWidth: 2,
    borderColor: '#5F8671',
    borderRadius: 5,
    padding:0,
  },
  checkboxContainer: {
    marginHorizontal:0,
    padding:0,
  },

  backgroundImage: {
    height:300,
    width:300,
    alignSelf:'center',
    resizeMode:'center',
  },
  backgroundImageC: {
    marginTop:25,
    width:'100%',
    justifyContent: 'center',
  },
  
});