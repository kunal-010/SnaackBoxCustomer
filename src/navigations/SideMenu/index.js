import React, { useState } from 'react';
import {
  Image,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Container from '../../components/common/Container';
import { CONTACT, HOME_NAVIGATOR } from '../../constants/routeNames';
import styles from './styles';
import Icon from '../../components/common/Icon';
import colors from '../../assets/theme/colors';

const SideMenu = ({navigation}) => {
  
  const [activeTab,setActiveTab] = useState('Home')

  const menuItems = [
    {
      icon: <Icon name="home" type="fa" size={28} color='black'/>,
      name: 'Home',
      onPress: () => {
        navigation.navigate(HOME_NAVIGATOR);
        setActiveTab('Home');
      },
    },
    {
      icon: <Icon name="contacts" type="ant" size={28} color='black' />,
      name: 'Contact',
      onPress: () => {
          navigation.navigate(CONTACT);
          setActiveTab('Contact');
      }  
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.jpeg')}
          style={styles.logoImage}
        />

        <View style={{paddingHorizontal: 30,marginTop:50}}>
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
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
