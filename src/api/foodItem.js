import axios from "../helpers/axiosInstance";

export const getFoodItem = async (_id) => {
    try{
        const res = await axios.get(`/foodItem?foodItem_id=${_id}`);
        return res.data;
    }catch(err){
        console.log(err);
        return err;
    }
}

export const getFoodItemsByCategories = async (_id) => {
    try{
        const res = await axios.get(`/foodItem/all?_id=${_id}`);
        return res.data;
    }catch(err){
        console.log(err);
        return err;
    }
}

export const getAllFoodItems = async () => {
    try{
        const res = await axios.get(`/foodItem/all`);
        return res.data;
    }catch(err){
        console.log(err);
        return err;
    }
}

export const searchFoodItems = async (searchText,_id) => {
    try{
        const route = _id ? `/foodItem/all?q=${searchText}&_id=${_id}` : `/foodItems?q=${searchText}`;
        const res = await axios.get(route);
        return res.data;
    }catch(err){
        console.log(err);
        return err;
    }
}

export const getCartFoodItems = async (_ids) => {
    try{
        const foodItems = await axios.post(`/foodItem/getCartItems`,{_ids});
        return foodItems.data;
    }catch(err){
        console.log(err);
        return err;
    }
}