import React from 'react';
import {createSlice} from "@reduxjs/toolkit";
import {server} from "../../server";
import {apiUrls} from "../../consts";

export const NotebookListSlice = createSlice({
    name: 'notebookList',
    initialState: {
        loading: false,
        hasError: false,
        error: null,
        page_no: 1,
        page_size: 100,
        order_by: 'created_at',
        order_direction: 'ASC',
        search: '',
        ids: [],
        notebooks: []
    },
    reducers: {
        setLoading: (state, {payload}) => {
            state.loading = true;
            state.hasError = false;
            state.error = null;
        },
        getNotebookListSuccess: (state, {payload}) => {
            state.loading = false;
            state.hasError = false;
            state.error = null;
            state.notebooks = payload.notebooks;
            state.count = payload.count;
        },
        getNotebookListError: (state, {payload}) => {
            state.loading = false;
            state.hasError = true;
            state.error = payload.error;
        }
    }
});

export const getNotebookList = ({page_no, page_size, order_by, order_direction, search, ids} = {}) => async dispatch => {
    try {
        dispatch(setLoading({loading: true}));
        const response = await server.get(apiUrls.getNotebookList,);
        dispatch(getNotebookListSuccess(response.data.data));
    } catch (e) {
        dispatch(getNotebookListError(e.data));
    }
};

export const {setLoading, getNotebookListSuccess, getNotebookListError} = NotebookListSlice.actions;

export const selectNotebookList = state => state.notebookList;

export const notebookListReducer = NotebookListSlice.reducer;
