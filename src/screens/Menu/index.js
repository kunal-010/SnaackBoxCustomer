import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import MenuComponent from '../../components/MenuComponent';
import { CATEGORY } from '../../constants/routeNames';
import { getFoodItemsByCategories, getAllFoodItems,searchFoodItems } from '../../api/foodItem';
import { Alert } from 'react-native';

const Menu = ({route,navigation}) => {
    
    const [loading,setLoading] = useState(false);
    const [foodItems,setFoodItems] = useState();
    const [searchedFoodItems,setSearchedFoodItems] = useState([]);
    const [searchText,setSearchText] = useState('');
    const [isSearching,setIsSearching] = useState(false);

    const {from,_id} = route.params;
    useFocusEffect(
        React.useCallback(() => {
            setLoading(true);
            async function getFoodData(){
                try{
                    let res;
                    if(from === CATEGORY){
                        res = await getFoodItemsByCategories(_id);
                    }else {
                        res = await getAllFoodItems();
                    }
                    if(!res.err){
                        setFoodItems(res.data);
                        setLoading(false);
                    }
                } catch(err){
                    setLoading(false);
                    console.log('Error fetching food items by categories>>',err);
                }
            }
            getFoodData();
        }, [])
    );

    useEffect(() => {
        if(searchText.length === 0){
            setSearchedFoodItems([]);
        }
    },[searchText])
    const onChangeText = (value) => {
        setSearchText(value);
    }

    const onSearch = async (value) => {
        setLoading(true);
        setIsSearching(true)
        try{
            const res = await searchFoodItems(searchText,_id);
            if(!res.data.err){
                setSearchedFoodItems(res.data);
            }
            if(res.data.length === 0){
                Alert.alert(
                    "Item Not Found",
                    "The food Item you searched for not is available.",
                    [
                      { text: "OK",onPress : () => setLoading(false)}
                    ]
                  );
            }else{
                setLoading(false);
            }
        }catch(err){
            console.log('error while searching food item >>',err);
        }
    }

    return (
        <MenuComponent 
            navigation={navigation}
            loading={loading}
            foodItems={foodItems}
            loading={loading}
            onChangeText={onChangeText}
            searchText={searchText}
            onSearch={onSearch}
            isSearching={isSearching}
            searchedFoodItems={searchedFoodItems}
        />
    )
}

export default Menu;
