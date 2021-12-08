import axios from "../helpers/axiosInstance";

export const getHomeData = async () => {
    try{
        const res = await axios.get('/foodItem/home');
        return res.data;
    }catch(err){
        console.log(err);
        return err;
    }
}