import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {DetailScreen, HomeScreen} from './src/screens';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const App = () => {
  const currentProduct = useSelector(state => state?.currentProduct);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
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
    </>
  );
};

export default App;
