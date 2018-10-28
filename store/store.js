import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import stoReducer from './stoReducer';
import authReducer from './authReducer';
import accountReducer from './accountReducer';

import { AuthActions, AuthActionTypes } from '../store/authActions';

const reducers = {
    authReducer,
    accountReducer,
    stoReducer
};

const getTokenFromStorage = (store) => {
    store.dispatch({type: AuthActionTypes.GET_TOKEN_FROM_STORAGE});
    
    AuthActions.getTknAsync().then((tkn) => {
        store.dispatch({type: AuthActionTypes.GET_TOKEN_FROM_STORAGE_SUCCESS, payload: tkn})
    });
};

export default function configureStore() {
    const store = createStore(
        combineReducers(reducers),
        applyMiddleware(thunk)
    );

    getTokenFromStorage(store);

    return store;
}