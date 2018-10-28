import utils from '../utils';

const SAVE_START = 'SAVE_START';
const SAVE_SUCCESS = 'SAVE_SUCCESS';
const GET_ACCOUNT_DATA_SUCCESS = 'GET_ACCOUNT_DATA_SUCCESS';

export const AccountActionTypes = {
    SAVE_START,
    SAVE_SUCCESS,
    GET_ACCOUNT_DATA_SUCCESS
};

const save = (data) => {
    return utils.postRequest({ path: 'account_edit/', body: data }).then(response => (response));
};

const getUserData = () => {
    return dispatch => {
        return utils.getRequest({ path: 'accounts/me' })
            .then(res => {
                dispatch({type: AccountActionTypes.GET_ACCOUNT_DATA_SUCCESS, payload: res});
            })
            .catch(err => {
                console.log('User data fetch error: ', err);
            });
    }
}

export const AccountActions = {
    getUserData,
    save
}