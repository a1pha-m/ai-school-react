import React from "react";
import {createSlice} from "@reduxjs/toolkit";
import {server} from '../../server';
import {apiUrls} from "../../consts";

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        loading: false,
        hasError: false,
        error: null,
        user: null
    },
    reducers: {
        setLoading: (state, {payload}) => {
            state.loading = true;
            state.hasError = false;
            state.error = null;
            state.user = null
        },
        registerSuccess: (state, {payload}) => {
            state.loading = false;
            state.hasError = false;
            state.error = null;
            state.user = payload.result;
        },
        registerError: (state, {payload}) => {
            state.loading = false;
            state.hasError = true;
            state.error = payload.error;
            state.user = null
        }
    }
})

export const register = ({user_type_id = 1, email_id, password, first_name, last_name}) => async dispatch => {
    try {
        dispatch(setLoading({loading: true}));

        const response = await server.post(apiUrls.register, {
            user_type_id,
            email_id,
            password,
            first_name,
            last_name
        });

        dispatch(registerSuccess(response.data.data));
    } catch (e) {
        dispatch(registerError(e.response.data));
    }
};

export const {setLoading, registerSuccess, registerError} = registerSlice.actions;
export const selectRegister = state => state.register;
export const registerReducer = registerSlice.reducer;
