import React from 'react'
import ItemDetailsComponent from '../../components/ItemDetailsComponent';
import MenuComponent from '../../components/MenuComponent';

const ItemDetails = ({route}) => {
    return (
        <ItemDetailsComponent 
            route={route}
        />
    )
}

export default ItemDetails;
