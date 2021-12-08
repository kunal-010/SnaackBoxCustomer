import React, { useContext, useEffect, useState } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { ADDRESS, AUTH_NAVIGATOR, CART, DRAWER_NAVIGATOR, EDIT_ADDRESS} from '../constants/routeNames';
import NoNetworkBar from './../components/common/NoNetworkBar';
import AuthNavigator from './AuthNavigator';
import {getItem} from './../asyncstorage/user';
import Cart from '../screens/Cart';
import colors from '../assets/theme/colors';
import { GlobalContext } from '../context/Provider';
import { ActivityIndicator } from 'react-native';
import getUser from '../context/actions/auth/getUser';
import Address from '../screens/Address';
import EditAddress from '../screens/EditAddress';


const AppNavigator = () => {

    const {
      authDispatch,
      authState: {isLoggedIn,data},
    } = useContext(GlobalContext);
    const [isAuthenticated,setIsAuthenticated] = useState(isLoggedIn);
    const [authLoaded, setAuthLoaded] = React.useState(false);
    const getUserDetails = async () => {
      try {
        const user = await getItem('user_id');
        await getUser({_id: user})(authDispatch);
        if (user) {
          setAuthLoaded(true);
  
          setIsAuthenticated(true);
        } else {
          setAuthLoaded(true);
  
          setIsAuthenticated(false);
        }
      } catch (error) {}
    }
    useEffect(() => {
        getUserDetails();
    }, [isLoggedIn]);

    const Stack = createNativeStackNavigator ();

    return <>
      {authLoaded ? (
        <NavigationContainer >
          <NoNetworkBar />
          {isAuthenticated ? 
              <Stack.Navigator 
                initialRouteName={DRAWER_NAVIGATOR}
                screenOptions={{
                  // headerShown: false,
                }}
                
              >
                  <Stack.Screen 
                    name={DRAWER_NAVIGATOR}
                    component={DrawerNavigator}
                    options={{
                      headerShown: false
                    }}
                  /> 

                  <Stack.Screen 
                    name={AUTH_NAVIGATOR}
                    component={AuthNavigator}
                    options={{
                      headerShown: false
                    }}
                  />      

                  <Stack.Screen 
                    name={CART}
                    component={Cart}
                    options={{
                      title: "Snaack Box",
                      headerStyle:{
                          backgroundColor:colors.primary,
                          
                      },
                      headerTitleStyle: {
                          color: colors.white,
                          fontStyle: 'italic',
                          fontSize: 30,
                          fontFamily: 'fantasy',    
                      },
                      headerTintColor: colors.secondary
                    }}
                  /> 
                  <Stack.Screen 
                    name={ADDRESS}
                    component={Address}
                    options={({navigation}) => ({
                      title: "Delivery Address",
                      headerStyle:{
                          backgroundColor:colors.primary,
                          
                      },
                      headerTitleStyle: {
                          color: colors.white,
                          fontStyle: 'italic',
                          fontSize: 25,
                          fontFamily: 'fantasy',    
                      },
                      headerTintColor: colors.secondary
                    })}
                  /> 

                  <Stack.Screen 
                    name={EDIT_ADDRESS}
                    component={EditAddress}
                    options={{
                      title: "Address",
                      headerStyle:{
                          backgroundColor:colors.primary,
                          
                      },
                      headerTitleStyle: {
                          color: colors.white,
                          fontStyle: 'italic',
                          fontSize: 25,
                          fontFamily: 'fantasy',    
                      },
                      headerTintColor: colors.secondary
                    }}
                  /> 

              </Stack.Navigator> :
              <AuthNavigator />
            }
        </NavigationContainer> ) : 
            <ActivityIndicator />
      }
    </>
}

export default AppNavigator;
