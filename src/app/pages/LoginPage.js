import React from 'react';
import {Navbar} from '../components/navbar';
import {Login} from '../components/login'

export const LoginPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <br/>
            <br/>
            <Login></Login>
        </div>
    );
}
