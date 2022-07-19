import React, { Component } from 'react';
import ProfilePicture from '../components/profile-picture';
import 'bootstrap/dist/css/bootstrap.css';
import * as query from 'query-string';

class User extends Component {
    state = {
        login: query.parse(window.location.search)["form-login"],
    };

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ProfilePicture
                            profilePicture="pictures/etna.jpg"
                            login={this.state.login}/>
                    </div>
                    <div className="col">
                        <div className="row">
                            Niveau
                        </div>
                        <div className="row">
                            <div className="col">
                                GPA
                            </div>
                            <div className="col">
                                Total présence
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Graph
                    </div>
                    <div className="col">
                        Retards et Absences
                    </div>
                </div>
            </div>
        )
    }
}

export default User;
