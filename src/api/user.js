import axios from "../helpers/axiosInstance";
import { setItem } from './../asyncstorage/user';

export const registerUser = async (user) => {
    try{
        const res = await axios.post('/user/register',user);
        await setItem(res.data.data._id);
        return res.data;
    }catch(err){
        console.log('error while registering user >> ',err);
        return err;
    }
}

export const getUser = async (_id) => {
    try{
        const res = await axios.get(`/user?_id=${_id}`);
        return res.data;
    }catch(err){
        console.log('error while getting user >> ',err);
        return err;
    }
}

export const addAddress = async (_id,address) => {
    try{
        const res = await axios.post(`/user/address?_id=${_id}`,address);
        return res.data;
    }catch(err){
        console.log('error while adding address >> ',err);
        return err;
    }
}

export const updateAddress = async (_id,address) => {
    try{
        const res = await axios.put(`/user/address?_id=${_id}`,address);
        return res.data;
    }catch(err){
        console.log('error while updating address >> ',err);
        return err;
    }
}

export const deleteAddress = async (_id,address_id,selectedAddressId) => {
    try{
        let res = null;
        if(selectedAddressId){
            res = await axios.delete(`/user/address?_id=${_id}&address_id=${address_id}&selectedAddress=${selectedAddressId}`);
        }else{
            res = await axios.delete(`/user/address?_id=${_id}&address_id=${address_id}`);
        }
        return res.data;
    }catch(err){
        console.log('error while deleting address >> ',err);
        return err;
    }
}

export const updatedSelectedAddress = async (_id,selectedAddress) => {
    try{
        const res = await axios.put(`/user/selectedAddress?_id=${_id}`,{selectedAddress});
        return res.data;
    }catch(err){
        console.log('error while updating selected address >> ',err);
        return err;
    }
}