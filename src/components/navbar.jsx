import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul class="list-group list-group-horizontal">
                    <li class="list-group-item">
                        <Link to='/login'>Login</Link>
                    </li>
                    <li class="list-group-item">
                        <Link to='/user'>User</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
