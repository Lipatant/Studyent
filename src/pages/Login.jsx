import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Login extends Component {
    render() {
        return (
            <form action="/user">
                <label htmlFor='form-login'>Login:&nbsp;</label>
                <input type='text' id='form-login' name='form-login' />
            </form>
        );
    };
}
 
export default Login;
