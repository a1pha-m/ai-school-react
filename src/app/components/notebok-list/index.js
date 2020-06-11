import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectNotebookList, getNotebookList} from "./NotebookListSlice";
import {NotebookTile} from "../notebook-tile";

export const NotebookList = () => {
    const dispatch = useDispatch();
    const notebookListData = useSelector(selectNotebookList)
    const {page_no, page_size, order_by, order_direction, search, ids, notebooks} = notebookListData;

    useEffect(() => {
        dispatch(getNotebookList({page_no, page_size, order_by, order_direction, search, ids}));
    }, []);

    return (
        <div>
            <div className={'row'}>
                {notebooks.map((notebook) => {
                    return (
                        <NotebookTile notebook={notebook}></NotebookTile>
                    )
                })}
            </div>
        </div>
    );
};
