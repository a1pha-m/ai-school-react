import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectFolderList, getFolderList} from "./FolderListSlice";
import {register} from "../register/RegisterSlice";
import {FolderTile} from "../folder-tile";

export const FolderList = () => {
    const dispatch = useDispatch();
    const folderListData = useSelector(selectFolderList)
    const {page_no, page_size, order_by, order_direction, search, ids, folders} = folderListData;

    useEffect(() => {
        dispatch(getFolderList({page_no, page_size, order_by, order_direction, search, ids}));
    }, []);

    return (
        <div>
            <div className={'row'}>
                {folders.map((folder) => {
                    return (
                        <FolderTile folder={folder}></FolderTile>
                    )
                })}
            </div>
        </div>
    );
};
