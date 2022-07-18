import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            error: '',
        }
    }
    state = {  };

    submitHandler(event) {
/*        event.preventDefault();
        if (this.validate())
            return;
        console.log(this.state);*/
    }

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
