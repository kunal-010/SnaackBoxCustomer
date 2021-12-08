import React from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screens/Register';
import { REGISTER } from '../constants/routeNames';

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator ();
  return (
    <AuthStack.Navigator 
      initialRouteName={REGISTER}
      screenOptions={{
        headerShown: false,
      }}
      
    >
        <AuthStack.Screen 
          name={REGISTER} 
          component={Register} 
        />       

    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
