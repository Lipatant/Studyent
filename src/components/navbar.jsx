import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                        <Link to='/login'>Login</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/velib'>Velib</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
