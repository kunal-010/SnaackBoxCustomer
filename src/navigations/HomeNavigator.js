import React from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { CATEGORY, CONTACT, HOME, ITEM_DETAILS, MENU } from '../constants/routeNames';
import Menu from './../screens/Menu';
import ItemDetails from '../screens/ItemDetails';
import Home from '../screens/Home';
import Category from './../screens/Category'
import Contact from './../screens/Contact';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator ();
  return (
    <HomeStack.Navigator 
      initialRouteName={HOME}
      screenOptions={{
        headerShown: false,
      }}
      
    >
        <HomeStack.Screen 
          name={HOME} 
          component={Home} 
        />

        <HomeStack.Screen 
          name={MENU} 
          component={Menu} 
        />

        <HomeStack.Screen 
          name={CATEGORY} 
          component={Category} 
        />

        <HomeStack.Screen 
          name={ITEM_DETAILS} 
          component={ItemDetails} 
        />

        <HomeStack.Screen 
          name={CONTACT} 
          component={Contact} 
        />

    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
