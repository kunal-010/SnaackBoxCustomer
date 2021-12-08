import { getUser } from "../../../api/user";
import { GET_USER_FAIL, GET_USER_LOADING, GET_USER_SUCCESS } from "../../../constants/actionTypes";

export default ({_id}) => (dispatch) => {
    dispatch({
      type: GET_USER_LOADING,
    });
    getUser(_id)
        .then(res => {
            dispatch({
                type: GET_USER_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({
              type: GET_USER_FAIL,
              payload: err.response
                ? err.response?.data
                : {error: 'Something went wrong, try agin'},
            });
        });
};