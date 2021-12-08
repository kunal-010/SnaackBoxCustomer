import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCartFoodItems } from '../api/foodItem';
import { ADD_ITEM, GET_ALL_ITEM, GET_ITEM, REMOVE_ITEM } from '../constants/eventTypes/cart';

export const getItem = async ({type,_id}) => {
    switch (type) {
        case GET_ITEM : 
            try{
                const quantity = await AsyncStorage.getItem(_id);
                return JSON.parse(quantity);

            }catch(err){
                console.log('error while getting item >>',err);
            }
        case GET_ALL_ITEM : 
            try{
                const keys = await AsyncStorage.getAllKeys();
                let filteredKeys = keys.filter(key => key !== 'user_id')
                let cartItems = await getCartFoodItems(filteredKeys);
                const quantities = await AsyncStorage.multiGet(keys);
                cartItems.data.forEach(item => {
                    quantities.forEach(qty => {
                        if(item._id === qty[0]){
                            item.quantity = qty[1];
                        }
                    })
                });
                return cartItems;
            }catch(err){
                console.log('error while getting all items >>',err);
            }
        default: 
            return;
    }
};

export const setItem = async ({type,_id,data}) => {
    switch (type) {
        case ADD_ITEM: 
            try{
                await AsyncStorage.setItem(_id,JSON.stringify(data));
            }catch(err){
                console.log('error while getting item >>',err);
            }
    }
};

export const removeItem = async ({type,_id}) => {
    switch (type) {
        case REMOVE_ITEM: 
            try{
                await AsyncStorage.removeItem(_id);
            }catch(err){
                console.log('error while getting item >>',err);
            }
    }
};