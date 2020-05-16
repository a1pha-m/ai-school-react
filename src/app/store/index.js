import {configureStore} from "@reduxjs/toolkit";
import {loginReducer} from '../components/login/LoginSlice';

export default configureStore({
    reducer: {
        login: loginReducer
    }
});
