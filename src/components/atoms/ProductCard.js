import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightToDp, widthToDp} from '../../utils';
import {Colors} from '../../constants';

const ProductCard = ({productDetails}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.playIconContainer}>
        <Text style={{color:'#000'}} >{productDetails?.title} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: widthToDp(30),
    marginVertical: heightToDp(8),
    borderRadius: widthToDp(20),
    shadowRadius: 20,
    shadowColor: Colors.boxShadowColor,
  },
  playIconContainer: {
    flex: 1,
    backgroundColor: Colors.workoutCardRedColor,
    paddingVertical: heightToDp(30),
    paddingHorizontal: widthToDp(12),
    borderRadius: widthToDp(20),
    elevation: 1,
    shadowRadius: 20,
    shadowColor: Colors.boxShadowColor,
  },
});
