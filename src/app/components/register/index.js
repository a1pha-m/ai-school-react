import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Redirect} from 'react-router-dom'
import {selectRegister, register} from './RegisterSlice'
import {login} from "../login/LoginSlice";

export default () => {
    const dispatch = useDispatch();
    const registerData = useSelector(selectRegister)

    const [email_id, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');

    return (
        <div className={'row'}>
            <div className={'card col s12 m6 offset-m3 l4 offset-l4'}>
                <br/>
                <div className={'input-field col s12'}>
                    <input name={'email_id'} type={'text'} value={email_id}
                           onChange={e => setEmailId(e.target.value)}  autoFocus={'true'}/>
                    <label htmlFor={'email_id'}>Email Id</label>
                </div>
                <div className={'input-field col s12'}>
                    <input name={'password'} type={'password'} value={password}
                           onChange={e => setPassword(e.target.value)}/>
                    <label htmlFor={'password'}>Password</label>
                </div>
                <div className={'input-field col s12'}>
                    <input name={'first_name'} type={'text'} value={first_name}
                           onChange={e => setFirstName(e.target.value)}/>
                    <label htmlFor={'first_name'}>First Name</label>
                </div>
                <div className={'input-field col s12'}>
                    <input name={'last_name'} type={'text'} value={last_name}
                           onChange={e => setLastName(e.target.value)}/>
                    <label htmlFor={'last_name'}>Last Name</label>
                </div>

                <div className={'center-align'}>
                    <button type={'submit'} className={'btn waves-effect waves-light'}
                            onClick={() => dispatch(register({email_id, password, first_name, last_name}))}>Register
                    </button>
                    <br/>
                    <br/>
                    <Link className={'btn btn-flat'} to={'/login'}>Login</Link>
                    {registerData.loading ? (<div>loading</div>) : (<div></div>)}
                    {registerData.hasError ? (<div>{registerData.error.message}</div>) : (<div></div>)}
                    {registerData.user ? (<div>Registration Successful. Please login to continue.</div>) : (
                        <div></div>)}
                </div>
                <br/>
            </div>
        </div>
    );
};
