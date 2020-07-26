import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './../../Screen/Home/Home';
// import Map from './../../Screen/Map/Map';
import Country from './../../Screen/Country/Country'
const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Country" component={Country} />
        {/* <Drawer.Screen name="Map" component={Map} /> */}
      </Drawer.Navigator>
  );
}