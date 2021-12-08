import { ToastAndroid } from "react-native";
import { addAddress } from "../../../api/user";
import { getItem } from "../../../asyncstorage/user";
import { ADD_ADDRESS_FAIL, ADD_ADDRESS_LOADING, ADD_ADDRESS_SUCCESS } from "../../../constants/actionTypes";

export default (address) => (dispatch) => {
    dispatch({
      type: ADD_ADDRESS_LOADING,
    });
    getItem()
        .then(_id => {
            addAddress(_id,address)
                .then(res => {
                    dispatch({
                        type: ADD_ADDRESS_SUCCESS,
                        payload: res.data.addresses,
                    });
                    ToastAndroid.showWithGravity(
                        "Address added Successfully !!",
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                    ); 
                })
                .catch((err) => {
                    dispatch({
                      type: ADD_ADDRESS_FAIL,
                      payload: err.response
                        ? err.response?.data
                        : {error: 'Something went wrong, try agin'},
                    });
                    ToastAndroid.showWithGravity(
                        "Error while adding address!!",
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                    ); 
                });
        }) 
        
};