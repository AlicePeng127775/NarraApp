import { StyleSheet, View, FlatList, TextInput, } from 'react-native';
import { Text, Icon } from '@rneui/themed';
import { getAllProduct} from '../data/productData';
import { getAllClassList} from '../data/classList';
import MyProductItem from '../components/MyProductItem';
import MyClassList from '../components/MyClassList';


export default function AllProductScreen( {navigation} ) {
    // Render the items of a categorized list
    const renderList = ({ item }) =>(
      <MyClassList listData={item}/>
    ); 
    // Render the items of product Item
    const renderItem = ({ item }) => (
      <MyProductItem itemData={item} navigatorRef={navigation} />
    );
    
    return (
      <View style={styles.container}>
      
        <View style={styles.header}>
            <Icon name="menu-outline" type="ionicon" />
            <TextInput style={styles.input} placeholder="What are you looking for?" />
            <Icon name="scan-outline" type="ionicon" />
            <Icon name="cart-outline" type="ionicon" />
        </View>

        <FlatList
            //Add fixed content to the top of the FlatList. These fixes will always stay on top when the list scrolls.
            ListHeaderComponent={
                <>
                    <View style={styles.title}>
                        <Text h3 style={styles.heading}>Browse By Categories</Text>
                        <Text>Explore More</Text>
                    </View>

                    <FlatList
                        horizontal
                        data={getAllClassList()}
                        renderItem={renderList}
                        keyExtractor={item => item.id}
                        style={styles.classList}
                    />

                    <View style={styles.title}>
                        <Text h3 style={styles.heading}>Recommended For You</Text>
                        <Text>Sort</Text>
                    </View>
                </>
            }
            data={getAllProduct()}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2} //Two Columns
            style={{ width: '100%' }}
            columnWrapperStyle={{ justifyContent: 'space-around' }}
        />
  </View>
);
    
}

const styles = StyleSheet.create({
  title:{
    width:'100%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
  
  },

  header:{
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: 10,
    width:'100%',
  },

  input: {
    marginHorizontal: 10,
    width: '75%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  classList: {
    paddingVertical:10,
    margin:10,
  },

  });

  