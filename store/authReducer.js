import { AuthActionTypes } from './authActions';

const initialState = {
    tkn: null,
    isGettingToken: false
};

export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.REGISTRATION_SUCCESS:
            return {
                tkn: action.payload
            };
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                tkn: action.payload
            };
        case AuthActionTypes.LOGOUT_SUCCESS:
            return {
                tkn: null
            }
        case AuthActionTypes.GET_TOKEN_FROM_STORAGE:
            return {
                isGettingToken: true
            };
        case AuthActionTypes.GET_TOKEN_FROM_STORAGE_SUCCESS:
            return {
                tkn: action.payload,
                isGettingToken: false
            };
        default:
            return state
    }
}