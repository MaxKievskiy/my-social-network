import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 15303;
        }
        this.props.getUserProfile(userID);
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,

})
//let AuthRedirectComponent = withAuthRedirect(ProfileContainer)//
//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default withAuthRedirect(withRouter(connect(mapStateToProps, {getUserProfile})(ProfileContainer)));