import React, { Component } from 'react';

const profilePictureWidth = "100";

class ProfilePicture extends Component {
    state = { };

    render() {
        return (
            <div className="User-title">
                <div className="col"> {/* eslint-disable-next-line */}
                    <img
                        src={this.props.profilePicture}
                        className="img-thumbnail"
                        width={profilePictureWidth}
                        alt="Profile Picture"/>
                </div>
                <div className="col">
                    <b>
                        {this.props.login}
                    </b>
                </div>
            </div>
        );
    }
}

export default ProfilePicture;
