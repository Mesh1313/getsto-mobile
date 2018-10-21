import config from '../config';

const FETCHING_STOS = 'FETCHING_STOS';
const FETCHING_STOS_SUCCESS = 'FETCHING_STOS_SUCCESS';
const FETCHING_STOS_FAIL = 'FETCHING_STOS_FAIL';

export const StoActionTypes = [
    FETCHING_STOS,
    FETCHING_STOS_SUCCESS,
    FETCHING_STOS_FAIL
];

const getStos = () => {
    fetch(config.apiUrl + '/stos')
        .then(response => {
            return response.json()
        })
        .catch((err) => {
            return err;
        });
};

export const StoActions = {
    getStos
};