import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {ProfileAPI} from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 15303;
        }
        ProfileAPI.getProfile(userID)
            .then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);