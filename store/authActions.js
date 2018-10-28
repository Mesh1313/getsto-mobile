import { AsyncStorage } from 'react-native';
import utils from '../utils';

const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const GET_TOKEN_FROM_STORAGE = 'GET_TOKEN_FROM_STORAGE';
const GET_TOKEN_FROM_STORAGE_SUCCESS = 'GET_TOKEN_FROM_STORAGE_SUCCESS';

export const AuthActionTypes = {
    REGISTRATION_SUCCESS,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    GET_TOKEN_FROM_STORAGE,
    GET_TOKEN_FROM_STORAGE_SUCCESS
};

const register = (credentials) => {
    credentials.registrationDate = (new Date()).getTime();

    return utils.postRequest({ path: 'accounts/', body: credentials }).then(response => (response));
};

const login = (credentials) => {
    return utils.postRequest({ path: 'accounts/login', body: credentials }).then(response => (response));
};

const logout = () => {
    return utils.getRequest({ path: 'accounts/logout' }).then(response => (response));
}

const getUserData = () => {
    return utils.getRequest({ path: 'accounts/me' });
}

const saveTknAsync = async (token) => {
    return AsyncStorage.setItem('@stosstore:tkn', token);
};

const getTknAsync = async () => {
    return AsyncStorage.getItem('@stosstore:tkn');
};

export const AuthActions = {
    register,
    login,
    logout,
    saveTknAsync,
    getTknAsync,
    getUserData
};