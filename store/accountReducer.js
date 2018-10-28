import { AccountActions, AccountActionTypes } from './accountActions';

const initialState = {
    accountData: null,
    isFetchingData: false,
    isSaving: false
};

export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case AccountActionTypes.GET_ACCOUNT_DATA_SUCCESS:
            return {
                ...state,
                accountData: action.payload
            };
        case AccountActionTypes.SAVE_START:
            return {
                isSaving: true
            };
        case AccountActionTypes.SAVE_SUCCESS:
            return {
                isSaving: false,
                accountData: action.payload
            };
        default:
            return state
    }
}