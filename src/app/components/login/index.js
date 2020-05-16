import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {
    login,
    selectLogin
} from './LoginSlice';

export default () => {
    let loginData = useSelector(selectLogin);
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div class={'row'}>
            <div class={'col s12'}>

                <div class={'input-field col s12'}>
                    <input name={'username'} type={'text'} value={username}
                           onChange={e => setUsername(e.target.value)}/>
                    <label htmlFor={'username'}>Username/Email Id</label>
                </div>
                <div class={'input-field col s12'}>
                    <input name={'password'} type={'password'} value={password}
                           onChange={e => setPassword(e.target.value)}/>
                    <label htmlFor={'password'}>Password</label>
                </div>


                <button class={'btn waves-effect waves-light'}
                        onClick={() => dispatch(login({username, password}))}>Login
                </button>
                {loginData.loading ? (<div>loading</div>) : (<div></div>)}
                {loginData.hasError ? (<div>{loginData.error.message}</div>) : (<div></div>)}
                {loginData.token ? (<Redirect to={'/'}></Redirect>) : (<div></div>)}
            </div>
        </div>
    );
}
