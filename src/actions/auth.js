import axios from 'axios';
import qs from 'qs';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
}

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        access_token: token
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (login, password) => {
    return dispatch => {
        dispatch(authStart()); 
        const authData = {
            login: login,
            password: password,
            returnSecureToken: true
        };
        axios.post('https://52.56.225.203/connect/token', qs.stringify(authData))
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.access_token));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    }
}