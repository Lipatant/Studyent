import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import ProfilePicture from './components/profile-picture';

const element = <div class="container">
    <div class="row">
        <div class="col">
            <ProfilePicture
                img="pictures/beemo.jpeg"
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

const root = createRoot(document.getElementById("root"));
root.render(element)
