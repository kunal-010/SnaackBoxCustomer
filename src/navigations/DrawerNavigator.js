import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { CONTACT, HOME_NAVIGATOR, MENU } from '../constants/routeNames';
import colors from './../assets/theme/colors';
import { View } from 'react-native';
import SideMenu from './SideMenu';
import Contact from '../screens/Contact';
import HeaderMenu from './../components/common/HeaderMenu';


const getDrawerContent = (navigation) => {
    return <SideMenu navigation={navigation}/>;
};

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    return (
        <View 
            style={{
                flex:1,
                backgroundColor: colors.secondary
            }}
        >
            <Drawer.Navigator
                screenOptions={{
                    drawerType:"slide",
                    drawerStyle: {
                        backgroundColor: colors.primary,
                      },
                    headerRight : () =>(
                        <HeaderMenu />
                      )
                }}
                drawerContent={({navigation}) =>
                    getDrawerContent(navigation)
                }
                
                initialRouteName={HOME_NAVIGATOR}
            >
                <Drawer.Screen 
                    name={HOME_NAVIGATOR} 
                    component={HomeNavigator} 
                    options={{
                        headerStyle:{
                            backgroundColor:colors.primary
                          }
                    }}
                />

               <Drawer.Screen 
                    name={CONTACT} 
                    component={Contact} 
                    options={{
                        headerStyle:{
                            backgroundColor:colors.primary
                          }
                    }}
                />
            </Drawer.Navigator>
        </View>
        
    );
};

export default DrawerNavigator;