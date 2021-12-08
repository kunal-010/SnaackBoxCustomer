import { ToastAndroid } from "react-native";
import { deleteAddress } from "../../../api/user";
import { getItem } from "../../../asyncstorage/user";
import { DELETE_ADDRESS_FAIL, DELETE_ADDRESS_LOADING, DELETE_ADDRESS_SUCCESS } from "../../../constants/actionTypes";

export default (address_id,selectedAddressId) => (dispatch) => {
    dispatch({
      type: DELETE_ADDRESS_LOADING,
    });
    
    getItem()
        .then(_id => {
            deleteAddress(_id,address_id,selectedAddressId)
                .then(res => {
                    dispatch({
                        type: DELETE_ADDRESS_SUCCESS,
                        payload: {address_id,selectedAddressId},
                    });
                    ToastAndroid.showWithGravity(
                      "Address deleted Successfully !!",
                      ToastAndroid.LONG,
                      ToastAndroid.CENTER
                  ); 
                })
                .catch((err) => {
                    dispatch({
                      type: DELETE_ADDRESS_FAIL,
                      payload: err.response
                        ? err.response?.data
                        : {error: 'Something went wrong, try agin'},
                    });
                    ToastAndroid.showWithGravity(
                      "Error while deletiung address !!",
                      ToastAndroid.LONG,
                      ToastAndroid.CENTER
                  ); 
                });
        }) 

};