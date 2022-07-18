import React, { Component } from 'react';

const profilePictureWidth = "100";

class ProfilePicture extends Component {
    state = { };

    render() {
        return (
            <div>
                <span className="border border-primary">
                    <div className="col"> {/* eslint-disable-next-line */}
                        <img
                            src={this.props.profilePicture}
                            className="img-thumbnail"
                            width={profilePictureWidth}
                            alt="Profile Picture"/>
                    </div>
                    <div className="col">
                        {this.props.login}
                    </div>
                </span>
            </div>
        );
    }
}

export default ProfilePicture;
