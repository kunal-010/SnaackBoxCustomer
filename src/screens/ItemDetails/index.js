import React, { useState } from 'react'
import ItemDetailsComponent from '../../components/ItemDetailsComponent';
import { useFocusEffect } from '@react-navigation/native';
import {getFoodItem} from './../../api/foodItem';
import { View,ActivityIndicator } from 'react-native';
import colors from '../../assets/theme/colors';

const ItemDetails = ({route}) => {

    const [foodItem,setFoodItem] = useState();
    const [loading,setLoading] = useState(false);
    const {_id} = route.params;
    useFocusEffect(
        React.useCallback(() => {
            setLoading(true);
            async function getFoodData(){
                try{
                    const res = await getFoodItem(_id);
                    if(!res.err){
                        setFoodItem(res.data);
                        setLoading(false);
                    }
                } catch(err){
                    console.log('Error fetching food item >>',err);
                }
            }
            getFoodData();
        }, [])
    );

    return (
        <ItemDetailsComponent 
            loading={loading}
            foodItem={foodItem}
            setFoodItem={setFoodItem}
        />
    )
        
        
    
}

export default ItemDetails;
