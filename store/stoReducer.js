import { StoActionTypes } from './stoActions';

const initialState = {
    stos: [],
    dataFetched: false,
    isFetching: false,
    error: false
};

export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case StoActionTypes.FETCHING_STOS:
            return {
                ...state,
                stos: [],
                isFetching: true
            };
        case StoActionTypes.FETCHING_STOS_SUCCESS:
            return {
                ...state,
                stos: action.data,
                isFetching: false
            };
        case StoActionTypes.FETCHING_STOS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return state
    }
}