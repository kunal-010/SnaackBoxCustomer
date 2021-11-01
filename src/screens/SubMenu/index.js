import React from 'react'
import { useRoute} from '@react-navigation/native';
import SubMenuComponent from '../../components/SubMenuComponent';

const SubMenu = ({route,navigation}) => {

    return (
        <SubMenuComponent route={route} navigation={navigation}/>
    )
}

export default SubMenu;
