import {configureStore} from "@reduxjs/toolkit";

// Components
import {loginReducer} from '../components/login/LoginSlice';
import {registerReducer} from "../components/register/RegisterSlice";
import {folderListReducer} from '../components/folder-list/FolderListSlice';
import {addFolderReducer} from "../components/add-folder/AddFolderSlice";
import {notebookListReducer} from "../components/notebok-list/NotebookListSlice";

// Pages

export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        folderList: folderListReducer,
        addFolder: addFolderReducer,
        notebookList: notebookListReducer
    }
});
