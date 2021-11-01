import React from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { ITEM_DETAILS, MENU, SUBMENU } from '../constants/routeNames';
import Menu from './../screens/Menu';
import SubMenu from '../screens/SubMenu';
import colors from '../assets/theme/colors';
import ItemDetails from '../screens/ItemDetails';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator ();
  return (
    <HomeStack.Navigator 
      initialRouteName={MENU}
      screenOptions={{
        headerShown: false,
      }}
    >
        <HomeStack.Screen 
          name={MENU} 
          component={Menu} 
        />

        <HomeStack.Screen 
          name={SUBMENU} 
          component={SubMenu} 
        />

        <HomeStack.Screen 
          name={ITEM_DETAILS} 
          component={ItemDetails} 
        />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
