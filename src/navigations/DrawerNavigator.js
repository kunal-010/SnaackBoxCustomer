import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { CART, CATEGORY, HOME_NAVIGATOR} from '../constants/routeNames';
import colors from './../assets/theme/colors';
import { TouchableOpacity, View } from 'react-native';
import SideMenu from './SideMenu';
import Category from '../screens/Category';
import Icon from '../components/common/Icon';
import Cart from '../screens/Cart';


const getDrawerContent = (navigation) => {
    return <SideMenu navigation={navigation}/>;
};

const DrawerNavigator = ({navigation}) => {
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
                        <TouchableOpacity onPress={() => navigation.navigate(CART, {from : 'Other'})}>
                            <Icon name="shopping-cart" type="fa" color='black' size={31} style={{marginRight:10, color:'black'}}/>
                        </TouchableOpacity>
                    )
                   
                }}
                drawerContent={({navigation}) =>
                    getDrawerContent(navigation)
                }
                
                initialRouteName={HOME_NAVIGATOR}
            >
                <Drawer.Screen 
                    name={CART} 
                    component={Cart} 
                    options={{
                        headerTitle: "Snaack Box",
                        headerStyle:{
                            backgroundColor:colors.primary,
                            
                        },
                        headerTitleStyle: {
                            color: colors.white,
                            fontStyle: 'italic',
                            fontSize: 30,
                            fontFamily: 'fantasy',    
                        }
                    }}
                />

                <Drawer.Screen 
                    name={HOME_NAVIGATOR} 
                    component={HomeNavigator} 
                    options={({navigation}) => ({
                        headerTitle: "Snaack Box",
                        headerStyle:{
                            backgroundColor:colors.primary,
                            
                        },
                        headerTitleStyle: {
                            color: colors.white,
                            fontStyle: 'italic',
                            fontSize: 30,
                            fontFamily: 'fantasy',    
                        },                       
                    })}
                />

               <Drawer.Screen 
                    name={CATEGORY} 
                    component={Category} 
                    options={{
                        headerTitle: "All Categories",
                        headerStyle:{
                            backgroundColor:colors.primary
                          },
                        headerTitleStyle: {
                            color: colors.white,
                            fontSize: 25,
                            fontStyle: 'italic',
                        }
                    }}
                />

                


            </Drawer.Navigator>
        </View>
        
    );
};

export default DrawerNavigator;