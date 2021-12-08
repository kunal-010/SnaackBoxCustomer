import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from '../Icon';
import styles from './styles';
import Share from 'react-native-share';
import shopDetails from '../../../assets/data/shopDetails';

const HeaderMenu = () => {
    const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);


  const share = async () => {
    const shareOptions = {
        message: 'Hey, checkout the Snaack Box App to view the menu. \n Address- Snaack Box, Kalpataru Phase 3 road, Pimple Gaurav. \n ( https://maps.app.goo.gl/rhCBKFJEKRTWF4xz9 ) \n Team Snaack Box',
        url: shopDetails.coverImage
    }

    try {
        const shareResponse = await Share.open(shareOptions);
        hideMenu();
    } catch(err) {
        console.log('Share error => ', err);
        hideMenu();
    }
  }

  return (
    <View style={styles.headerMenu}>
      <Menu
        visible={visible}
        anchor={
            <Text onPress={showMenu}>
                <Icon name="shopping-cart" type="fa" size={31} />
            </Text>
        }
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={share}>Share</MenuItem>
      </Menu>
    </View>
  );
}

export default HeaderMenu
