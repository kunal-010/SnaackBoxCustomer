import axios from "../helpers/axiosInstance";

export const getCategories = async () => {
    try{
        const res = await axios.get('/category/all');
        return res.data;
    }catch(err){
        console.log(err);
        return err;
    }
}