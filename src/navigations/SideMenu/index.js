import React, { useContext, useState } from 'react';
import {
  Image,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Container from '../../components/common/Container';
import { CART, CATEGORY, CONTACT, DRAWER_NAVIGATOR, HOME, HOME_NAVIGATOR } from '../../constants/routeNames';
import styles from './styles';
import Icon from '../../components/common/Icon';
import colors from '../../assets/theme/colors';
import { GlobalContext } from '../../context/Provider';

const SideMenu = ({navigation}) => {
  
  const [activeTab,setActiveTab] = useState('Home')
  const {
      authState: {data},
  } = useContext(GlobalContext);

  const menuItems = [
    {
      icon: <Icon name="home" type="fa" size={28} color='black'/>,
      name: 'Home',
      onPress: () => {
        navigation.navigate(HOME_NAVIGATOR,{screen: HOME});
        setActiveTab('Home');
      },
    },
    {
      icon: <Icon name="food" type="materialCommunity" size={28} color='black' />,
      name: 'Menu',
      onPress: () => {
          navigation.navigate(CATEGORY);
          setActiveTab('Menu');
      }  
    },
    {
      icon: <Icon name="shopping-cart" type="fa" size={28} color='black' />,
      name: 'Cart',
      onPress: () => {
          navigation.navigate(CART,{from : DRAWER_NAVIGATOR});
          setActiveTab('Cart');
      }  
    },
    {
      icon: <Icon name="checklist" type="octicon" size={28} color='black' />,
      name: 'My Orders',
      onPress: () => {
          navigation.navigate(CONTACT);
          setActiveTab('My Orders');
      }  
    },
    // {
    //   icon: <Icon name="login" type="materialCommunity" size={28} color='black' />,
    //   name: 'Login',
    //   onPress: () => {
    //       navigation.navigate(CONTACT);
    //       setActiveTab('Login');
    //   }  
    // },
    {
      icon: <Icon name="share-a" type="fontisto" size={26} color='black' />,
      name: 'Share Menu',
      onPress: () => {
          navigation.navigate(CONTACT);
          setActiveTab('Share Menu');
      }  
    },
    {
      icon: <Icon name="share" type="fontisto" size={26} color='black' />,
      name: 'Share App',
      onPress: () => {
          navigation.navigate(CONTACT);
          setActiveTab('Share App');
      }  
    },
    {
      icon: <Icon name="list-alt" type="fa5" size={28} color='black' />,
      name: 'Terms & Conditions',
      onPress: () => {
          navigation.navigate(CONTACT);
          setActiveTab('Terms & Conditions');
      }  
    },
    {
      icon: <Icon name="contacts" type="ant" size={28} color='black' />,
      name: 'Contact Us',
      onPress: () => {
          navigation.navigate(CONTACT);
          setActiveTab('Contact Us');
      }  
    },
    // {
    //   icon: <Icon name="logout" type="materialCommunity" size={28} color='black' />,
    //   name: 'Logout',
    //   onPress: () => {
    //       navigation.navigate(CONTACT);
    //       setActiveTab('Logout');
    //   }  
    // },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={80}
          source={require('../../assets/images/logo.jpg')}
          style={styles.logoImage}
        />
        <View style={{height: 1.5, backgroundColor: 'black', marginTop: 10}}></View>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <Image
            height={70}
            width={80}
            source={require('../../assets/images/avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.username}>{data.name}</Text>
        </View>
        <View style={{height: 1.5, backgroundColor: 'black', marginTop: 10}}></View>

        {/* <View style={{paddingHorizontal: 0,marginTop:10}}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity onPress={onPress} key={name} style={[styles.item,{backgroundColor: activeTab == name ? colors.secondary : colors.primary}]}>
              <View 
                style={styles.icon}
              >
                {icon}
              </View>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View> */}
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
