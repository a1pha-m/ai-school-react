import {configureStore} from "@reduxjs/toolkit";
import {loginReducer} from '../components/login/LoginSlice';
import {registerReducer} from "../components/register/RegisterSlice";

export default configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer
    }
});
