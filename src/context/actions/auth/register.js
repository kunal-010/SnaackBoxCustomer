import { ToastAndroid } from "react-native";
import { registerUser } from "../../../api/user";
import { REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../../constants/actionTypes";

export default (form) => (dispatch) => {
    dispatch({
      type: REGISTER_LOADING,
    });
    registerUser(form)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
            ToastAndroid.showWithGravity(
                "Registered Successfully !!",
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            );
        })
        .catch((err) => {
            dispatch({
              type: REGISTER_FAIL,
              payload: err.response
                ? err.response?.data
                : {error: 'Something went wrong, try agin'},
            });
            ToastAndroid.showWithGravity(
                "Error while registering user...",
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            );
        });
  };