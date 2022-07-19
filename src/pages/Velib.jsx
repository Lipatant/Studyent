import React from 'react';
import Velibs from '../components/velibs'

function NoPage () {
    return (
        <div className="container">
            <div className="row">
                <h2>Vélibs à proximité :</h2>
            </div>
            <div className="row">
                <Velibs />
            </div>
        </div>
    )
}

export default NoPage;
