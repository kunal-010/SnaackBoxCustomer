import { ADD_ADDRESS_FAIL, ADD_ADDRESS_LOADING, ADD_ADDRESS_SUCCESS, DELETE_ADDRESS_FAIL, DELETE_ADDRESS_LOADING, DELETE_ADDRESS_SUCCESS, GET_USER_FAIL, GET_USER_LOADING, GET_USER_SUCCESS, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS, UPDATE_ADDRESS_FAIL, UPDATE_ADDRESS_LOADING, UPDATE_ADDRESS_SUCCESS, UPDATE_SELECTED_ADDRESS_FAIL, UPDATE_SELECTED_ADDRESS_LOADING, UPDATE_SELECTED_ADDRESS_SUCCESS } from "../../constants/actionTypes";

const auth = (state, {type, payload}) => {
    switch(type){
        case GET_USER_LOADING:
        case DELETE_ADDRESS_LOADING:
        case ADD_ADDRESS_LOADING:
        case UPDATE_ADDRESS_LOADING:
        case DELETE_ADDRESS_LOADING:
        case UPDATE_SELECTED_ADDRESS_LOADING:
        case REGISTER_LOADING:
            return {
                ...state,
                loading: true,
            };

        case GET_USER_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                isLoggedIn: true,
                error: null
            };
        
        case GET_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
                isLoggedIn: false
            };

        case UPDATE_ADDRESS_FAIL:
        case ADD_ADDRESS_FAIL:
        case DELETE_ADDRESS_FAIL:
        case UPDATE_SELECTED_ADDRESS_FAIL:
        case REGISTER_FAIL: 
            return {
                ...state,
                loading: false,
                error: payload,
            };
        
        case ADD_ADDRESS_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: null,
                data: {
                    ...state.data,
                    addresses: payload,
                }
            }
        
        case DELETE_ADDRESS_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: null,
                data: {
                    ...state.data,
                    addresses: state.data.addresses.filter(({_id}) => _id !== payload.address_id),
                    selectedAddress: payload.address_id === payload.selectedAddressId ? null : state.data.selectedAddress
                }
            }

        case UPDATE_ADDRESS_SUCCESS:
            let items = state.data.addresses;
            let index = items.findIndex(x => x._id === payload._id);
            items[index] = payload;
            return {
                ...state,
                loading: false,
                error: null,
                data: {
                    ...state.data,
                    addresses: items
                }
            }
        
        case UPDATE_SELECTED_ADDRESS_SUCCESS: 
            return {
                ...state,
                loading : false,
                error: null,
                data: {
                    ...state.data,
                    selectedAddress: payload
                }
            }
    }
};

export default auth;
