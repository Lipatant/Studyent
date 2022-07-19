import React, { Component } from 'react';
import ProfilePicture from '../components/profile-picture';
import UnitsGraph from '../components/units-graph'
import 'bootstrap/dist/css/bootstrap.css';
import * as query from 'query-string';
import data from '../data';

class User extends Component {
    state = {
        login: query.parse(window.location.search)["form-login"],
    };

    CreateTopPart = () => {
        return (
            <>
                <div className="col">
                    <ProfilePicture
                        profilePicture={'pictures/' + data.profilePicture}
                        login={this.state.login}/>
                </div>
                <div className="col">
                    <div className="row">
                        {data.level}
                    </div>
                    <div className="row">
                        <div className="col">
                            {"GPA : " + data.gpa}
                        </div>
                        <div className="col">
                            {"Présence totale : " + data.totalPresence}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    CreateBottomPart = () => {
        return (
            <>
                <div className="col">
                    <UnitsGraph
                        data1={data.units.valid}
                        data2={data.units.failed}
                    />
                </div>
                <div className="col">
                    Retards et Absences
                </div>
            </>
        )
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    {this.CreateTopPart()}
                </div>
                <div className="row">
                    {this.CreateBottomPart()}
                </div>
            </div>
        )
    }
}

export default User;
