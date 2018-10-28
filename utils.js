import { AsyncStorage } from 'react-native';
import config from './config';
import { NavigationActions } from 'react-navigation';

const getRequest = async ({path}) => {
    const token = await AsyncStorage.getItem('@stosstore:tkn');
    const options = new Request(`${config.apiUrl}/${path}`, {
        method: 'GET',
        headers: new Headers({
            'x-access-token': token
        })
    });
    return fetch(options)
        .then(response => {
            return response.json();
        })
        .catch((err) => {
            return err;
        });
}

const postRequest = async ({path, body}) => {
    const token = await AsyncStorage.getItem('@stosstore:tkn');
    const options = new Request(`${config.apiUrl}/${path}`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'x-access-token': token
        }),
        body: JSON.stringify(body)
    });

    return fetch(options)
        .then(response => {
            return response.json();
        })
        .catch((err) => {
            return err;
        });
}

const navigateBack = (navigation) => {
    const backAction = NavigationActions.back();
    navigation.dispatch(backAction);
}

const extractCurrentRouteParams = (navState) => {
    if (navState.hasOwnProperty('index')) {
        return extractCurrentRouteParams(navState.routes[navState.index])
    } else {
        return navState.params;
    }
}

export default {
    getRequest,
    postRequest,
    navigateBack,
    extractCurrentRouteParams
}