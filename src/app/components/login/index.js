import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

import {login, selectLogin} from './LoginSlice';

export const Login = () => {
    const dispatch = useDispatch();
    const loginData = useSelector(selectLogin);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={'row'}>
            <div className={'card col s12 m6 offset-m3 l4 offset-l4'}>
                <br/>
                <div className={'input-field col s12'}>
                    <input name={'username'} type={'text'} value={username}
                           onChange={e => setUsername(e.target.value)} autoFocus={'true'}/>
                    <label htmlFor={'username'}>Username/Email Id</label>
                </div>
                <div className={'input-field col s12'}>
                    <input name={'password'} type={'password'} value={password}
                           onChange={e => setPassword(e.target.value)}/>
                    <label htmlFor={'password'}>Password</label>
                </div>

                <div className={'center-align'}>
                    <button type={'submit'} className={'btn waves-effect waves-light red'}
                            onClick={() => dispatch(login({username, password}))}>Login
                    </button>
                    <br/>
                    <br/>
                    <Link className={'btn btn-flat'} to={'/forgot-password'}>Forgot Password</Link>
                    <br/>
                    <Link className={'btn btn-flat'} to={'/register'}>Register</Link>

                    {loginData.loading ? (<div>loading</div>) : (<div></div>)}
                    {loginData.hasError ? (<div className={'red-text'}>{loginData.error.message}</div>) : (<div></div>)}
                    {loginData.token ? (<Redirect to={'/'}></Redirect>) : (<div></div>)}
                </div>
                <br/>
            </div>
        </div>
    );
}
