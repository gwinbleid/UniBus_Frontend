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
            grant_type: "password",
            password: password,
            username: login
        };

        console.log(authData);

        var formData = new FormData();
        for (var k in authData) {
            formData.append(k, authData[k]);
        }

        console.log(formData);

        var request = {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', // <-- Specifying the Content-Type
            },
            body: formData
        };

        console.log(request);

        axios.post('http://52.56.225.203/connect/token', qs.stringify(authData))
            .then(response => {
                console.log(response);
                localStorage.setItem('token', response.data.access_token);
                dispatch(authSuccess(response.data.access_token));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    }
}