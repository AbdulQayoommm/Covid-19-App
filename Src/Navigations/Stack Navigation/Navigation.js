import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './../Drawer Navigation/Drawer'
import WelCome from './../../Screen/WelCome/Welcome'
const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelCome" component={WelCome} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={DrawerNavigation} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;



