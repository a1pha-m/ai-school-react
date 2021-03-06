import React from 'react';
import {createSlice} from "@reduxjs/toolkit";
import {server} from "../../server";
import {apiUrls} from "../../consts";

export const FolderListSlice = createSlice({
    name: 'folderList',
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
        folders: []
    },
    reducers: {
        setLoading: (state, {payload}) => {
            state.loading = true;
            state.hasError = false;
            state.error = null;
        },
        getFolderListSuccess: (state, {payload}) => {
            state.loading = false;
            state.hasError = false;
            state.error = null;
            state.folders = payload.folders;
            state.count = payload.count;
        },
        getFolderListError: (state, {payload}) => {
            state.loading = false;
            state.hasError = true;
            state.error = payload.error;
        },
        addFolder: (state, {payload}) => {
            state.folders.push(payload.folder);
        }
    }
});

export const getFolderList = ({page_no, page_size, order_by, order_direction, search, ids} = {}) => async dispatch => {
    try {
        dispatch(setLoading({loading: true}));
        const response = await server.get(apiUrls.getFolderList,);
        dispatch(getFolderListSuccess(response.data.data));
    } catch (e) {
        dispatch(getFolderListError(e.data));
    }
};

export const {setLoading, getFolderListSuccess, getFolderListError, addFolder} = FolderListSlice.actions;

export const selectFolderList = state => state.folderList;

export const folderListReducer = FolderListSlice.reducer;
