import React, { Component } from 'react';

const profilePictureWidth = "100";

class ProfilePicture extends Component {
    state = { };

    render() {
        return (
            <div>
                <span class="border border-primary">
                    <div class="col">
                        <ulage
                            src={this.props.profilePicture}
                            class="img-thumbnail"
                            width={profilePictureWidth}
                            alt="Profile Picture"/>
                    </div>
                    <div class="col">
                        {this.props.login}
                    </div>
                </span>
            </div>
        );
    }
}

export default ProfilePicture;
