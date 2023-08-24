import {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductList} from '../redux/productSlice';
import {ProductCard} from '../components';
import {heightToDp, widthToDp} from '../utils';
import Spinner from 'react-native-loading-spinner-overlay';

const HomeScreen = ({navigation}) => {
  const [searchedProductText, setSearchedProductText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();
  const products = useSelector(state => state?.products);
  const loading = useSelector(state => state?.loading);

  // console.log(products);

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  const searchProduct = text => {
    setSearchedProductText(text);
    const lowerCaseSearchTerm = text.toLowerCase();

    // Use the some method to check if any object has a name containing the search term
    const found = products.filter(item =>
      item.title.toLowerCase().includes(lowerCaseSearchTerm),
    );
    console.log(found);

    setSearchResults(found);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Spinner visible={loading} />
      <View style={{backgroundColor: 'gray'}}>
        <TextInput
          placeholder="Search your product"
          value={searchedProductText}
          onChangeText={text => searchProduct(text)}
        />
      </View>
      {searchedProductText === '' ? (
        <FlatList
          data={products}
          renderItem={({item}) => <ProductCard productDetails={item} />}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      ) : (
        <FlatList
          data={searchResults}
          renderItem={({item}) => <ProductCard productDetails={item} />}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      )}
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailScreen')}
      /> */}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    paddingHorizontal: widthToDp(20),
    paddingBottom: heightToDp(50),
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
