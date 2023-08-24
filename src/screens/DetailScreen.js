import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {heightToDp, widthToDp} from '../utils';

const DetailScreen = () => {
  const currentProduct = useSelector(state => state?.currentProduct);
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: widthToDp(20)}}>
        <Text
          style={{fontSize: 24, color: '#fff', paddingBottom: heightToDp(0)}}>
          {currentProduct?.title}
        </Text>

        <Text
          style={{fontSize: 16, color: '#fff', paddingBottom: heightToDp(10)}}>
          {currentProduct?.brand}
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            paddingBottom: heightToDp(10),
            fontWeight: '700',
          }}>
          ${currentProduct?.price}
        </Text>

        <Text
          style={{fontSize: 16, color: '#fff', paddingBottom: heightToDp(10)}}>
          Discount Available: {currentProduct?.discountPercentage.toFixed(0)}%
        </Text>

        <Text style={{fontSize: widthToDp(16), paddingBottom: heightToDp(10)}}>
          {currentProduct?.description}
        </Text>

        <Text
          style={{fontSize: 16, color: '#fff', paddingBottom: heightToDp(10)}}>
          Rating: {currentProduct?.rating.toFixed(1)}{' '}
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: widthToDp(20),
          borderRadius: widthToDp(20),
          paddingTop: heightToDp(50),
        }}>
        <FlatList
          data={currentProduct?.images}
          horizontal
          renderItem={({item, index}) => (
            <Image
              source={{uri: item}}
              resizeMode="contain"
              width={widthToDp(200)}
              height={widthToDp(200)}
              alt="Thumbnail"
              style={{borderRadius: widthToDp(25)}}
            />
          )}
          ItemSeparatorComponent={
            <View style={{paddingHorizontal: widthToDp(10)}} />
          }
          keyExtractor={index => index}
        />
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: widthToDp(20),
    paddingTop: heightToDp(30),
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
