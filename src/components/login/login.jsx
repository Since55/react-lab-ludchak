import React from 'react';
import { Redirect } from 'react-router-dom';

import './login.css';

function LoginPage({ isLoggedIn, onLogin }) {
    if (isLoggedIn) {
        <Redirect to='/profile'/>
    }

    return (
        <div className='login'>
            <h3>Login</h3>
            <form className='login-form' onSubmit={onLogin}>
                <label htmlFor="username">username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" />
                <input type="submit" value="login"/>
            </form>

        </div>
    )
}
export default LoginPage;