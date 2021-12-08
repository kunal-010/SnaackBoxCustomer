import { ToastAndroid } from "react-native";
import { updateAddress } from "../../../api/user";
import { getItem } from "../../../asyncstorage/user";
import { UPDATE_ADDRESS_FAIL, UPDATE_ADDRESS_LOADING, UPDATE_ADDRESS_SUCCESS } from "../../../constants/actionTypes";

export default (address) => (dispatch) => {
    dispatch({
      type: UPDATE_ADDRESS_LOADING,
    });
    getItem()
        .then(_id => {
            updateAddress(_id,address)
                .then(res => {
                    dispatch({
                        type: UPDATE_ADDRESS_SUCCESS,
                        payload: address,
                    });
                    ToastAndroid.showWithGravity(
                        "Address updated Successfully !!",
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                    );
                })
                .catch((err) => {
                    dispatch({
                      type: UPDATE_ADDRESS_FAIL,
                      payload: err.response
                        ? err.response?.data
                        : {error: 'Something went wrong, try agin'},
                    });
                    ToastAndroid.showWithGravity(
                        "Error while updating address!!",
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                    );
                });
        }) 
        
};