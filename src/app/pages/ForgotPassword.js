import React from 'react';
import {Navbar} from '../components/navbar';
import {ForgotPassword} from '../components/forgot-password'

export const ForgotPasswordPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <br/>
            <br/>
            <ForgotPassword></ForgotPassword>
        </div>
    );
}
