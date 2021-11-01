import React, { useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import SplashScreen from 'react-native-splash-screen';

const AppNavigator = () => {

    useEffect(() => {
      setTimeout(() => {
        console.log('sdfsdf')
         SplashScreen.hide(); 
      },1000)
    }, [])

    return (
        <NavigationContainer >
          <DrawerNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;
