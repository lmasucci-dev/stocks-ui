// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from '../../constants/routes';
import Stocks from '../../screens/Stocks';
import StockDetail from '../../screens/StockDetail';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.Stocks} component={Stocks} />
        <Stack.Screen name={Routes.StockDetail} component={StockDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;