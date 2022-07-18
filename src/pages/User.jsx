import React from 'react';
import ProfilePicture from '../components/profile-picture';
import 'bootstrap/dist/css/bootstrap.css';

const element = <div class="container">
    <div class="row">
        <div class="col">
            <ProfilePicture
                profilePicture="pictures/bmo.jpeg"
                login="Lipatant"/>
        </div>
        <div class="col">
            <div class="row">
                Niveau
            </div>
            <div class="row">
                <div class="col">
                    GPA
                </div>
                <div class="col">
                    Total présence
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            Graph
        </div>
        <div class="col">
            Retards et Absences
        </div>
    </div>
</div>;

const User = () => {
    return (element);
}

export default User;
