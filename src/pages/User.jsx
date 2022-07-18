import React from 'react';
import ProfilePicture from '../components/profile-picture';
import 'bootstrap/dist/css/bootstrap.css';

const element = <div className="container">
    <div className="row">
        <div className="col">
            <ProfilePicture
                profilePicture="pictures/etna.jpg"
                login="Lipatant"/>
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
</div>;

const User = () => {
    return (element);
}

export default User;
