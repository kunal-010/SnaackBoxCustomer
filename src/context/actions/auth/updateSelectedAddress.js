import { ToastAndroid } from "react-native";
import { updatedSelectedAddress } from "../../../api/user";
import { getItem } from "../../../asyncstorage/user";
import { UPDATE_SELECTED_ADDRESS_FAIL, UPDATE_SELECTED_ADDRESS_LOADING, UPDATE_SELECTED_ADDRESS_SUCCESS } from "../../../constants/actionTypes";

export default (selectedAddress) => (dispatch) => {
    dispatch({
      type: UPDATE_SELECTED_ADDRESS_LOADING,
    });
    getItem()
        .then(_id => {
            updatedSelectedAddress(_id,selectedAddress)
                .then(res => {
                    dispatch({
                        type: UPDATE_SELECTED_ADDRESS_SUCCESS,
                        payload: selectedAddress,
                    });
                    ToastAndroid.showWithGravity(
                        "Address updated Successfully !!",
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                    );
                })
                .catch((err) => {
                    dispatch({
                      type: UPDATE_SELECTED_ADDRESS_FAIL,
                      payload: err.response
                        ? err.response?.data
                        : {error: 'Something went wrong, try agin'},
                    });
                    ToastAndroid.showWithGravity(
                        "Error while updating selected address!!",
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                    );
                });
        }) 
        
};