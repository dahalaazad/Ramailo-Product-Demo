import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightToDp, widthToDp} from '../../utils';
import {Colors} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductCard = ({productDetails, onPressHandler}) => {
  const shortenString = str => {
    if (str.length > 22) {
      return str.substring(0, 19) + '...';
    }
    return str;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.playIconContainer}
        onPress={onPressHandler}>
        <View style={{flexDirection: 'row'}}>
          <View style={{paddingRight: widthToDp(10)}}>
            <Image
              source={{uri: productDetails?.images[0]}}
              resizeMode="cover"
              height={50}
              width={50}
              alt="Thumbnail"
              style={{borderRadius: widthToDp(25)}}
            />
          </View>

          <View style={{}}>
            <Text style={styles.textStyle}>
              {shortenString(productDetails?.title)}
            </Text>

            <Text style={[styles.textStyle, {color: '#2888F8'}]}>
              {productDetails?.category}
            </Text>

            <Text style={[styles.textStyle]}>${productDetails?.price}</Text>
          </View>
        </View>

        <View style={{justifyContent: 'center'}}>
          <Ionicons name="chevron-forward" size={widthToDp(30)} color="#000" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: heightToDp(8),
    borderRadius: widthToDp(20),
    shadowRadius: 20,
    shadowColor: Colors.boxShadowColor,
  },
  playIconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.workoutCardRedColor,
    paddingVertical: heightToDp(20),
    paddingHorizontal: widthToDp(12),
    borderRadius: widthToDp(20),
    elevation: 1,
    shadowRadius: 20,
    shadowColor: Colors.boxShadowColor,
  },
  textStyle: {
    color: '#000',
    fontSize: widthToDp(16),
    fontWeight: '600',
    paddingHorizontal: widthToDp(30),
  },
});
