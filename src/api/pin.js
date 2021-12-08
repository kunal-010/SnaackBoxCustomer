import axios from "../helpers/axiosInstance";

export const getPin = async (pin) => {
    try{
        const res = await axios.get(`/pin?pin=${pin}`);
        return res;
    }catch(err){
        console.log(err);
        return err;
    }
}