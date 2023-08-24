import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {DetailScreen, HomeScreen} from './src/screens';
import {useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

const App = () => {
  const currentProduct = useSelector(state => state?.currentProduct);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'rgba(51, 51, 51,0.2)',
            },
          }}>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerTitle: 'All Products'}}
          />

          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{headerTitle: currentProduct?.title}}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <Toast />
    </>
  );
};

export default App;
