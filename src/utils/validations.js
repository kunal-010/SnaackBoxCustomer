import { ToastAndroid } from "react-native";
import { getPin } from "../api/pin";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isEmailValid = (email) => {
    return emailRegex.test(email);
}

export const isPinAvailable = (pin) => {
    return getPin(pin);
}

async function checkPin(pin){
    try{
        const res = await getPin(pin);
        return res.data.data !== null;
    }catch(err){
        ToastAndroid.showWithGravity(
            err,
            ToastAndroid.LONG,
            ToastAndroid.CENTER
        );
        return false;
    }
}