import React from "react";
import {createSlice} from "@reduxjs/toolkit";
import {server} from "../../server";
import {apiUrls} from "../../consts";
import {FolderListSlice} from "../folder-list/FolderListSlice";

export const AddFolderSlice = createSlice({
    name: 'addFolder',
    initialState: {
        loading: false,
        hasError: false,
        error: null,
    },
    reducers: {
        setLoading: (state, {payload}) => {
            state.loading = true;
            state.hasError = false;
            state.error = null;
        },
        addFolderSuccess: (state, {payload}) => {
            state.loading = false;
            state.hasError = false;
            state.error = null;
            state.folders = payload.folders;
            state.count = payload.count;
        },
        addFolderError: (state, {payload}) => {
            state.loading = false;
            state.hasError = true;
            state.error = payload.error;
        }
    }
});

export const addFolder = ({name, description}) => async dispatch => {
    try {
        dispatch(setLoading({loading: true}));
        const response = await server.post(apiUrls.addFolder, {name, description});
        dispatch(addFolderSuccess(response.data.data));
        dispatch(FolderListSlice.actions.addFolder(response.data.data));
    } catch (e) {
        dispatch(addFolderError(e.response.data));
    }
};

export const {setLoading, addFolderSuccess, addFolderError} = AddFolderSlice.actions;

export const selectAddFolder = state => state.addFolder;

export const addFolderReducer = AddFolderSlice.reducer;
