import React from "react";
import {createSlice} from "@reduxjs/toolkit";
import {server, setAuthorizationToken} from '../../server';
import {apiUrls} from "../../consts";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loading: false,
        hasError: false,
        error: null,
        token: null,
        user: null
    },
    reducers: {
        setLoading: (state, {payload}) => {
            state.loading = payload.loading;
            state.hasError = false;
        },
        loginSuccess: (state, {payload}) => {
            state.loading = false;
            state.hasError = false;
            state.user = payload.user;
            state.token = payload.token;
        },
        loginError: (state, {payload}) => {
            state.loading = false;
            state.hasError = true;
            state.error = payload.error;
        }
    }
});

export const login = ({username, password}) => async dispatch => {
    try {
        dispatch(setLoading({loading: true}))

        const response = await server.post(apiUrls.login, {
            email_id: username,
            password: password
        });

        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
        setAuthorizationToken({token: response.data.data.token});
        dispatch(loginSuccess(response.data.data));
    } catch (e) {
        console.log(e);
        dispatch(loginError(e.response.data));
    }
};

export const {setLoading, loginSuccess, loginError} = loginSlice.actions;

export const selectLogin = state => state.login;

export const loginReducer = loginSlice.reducer;
