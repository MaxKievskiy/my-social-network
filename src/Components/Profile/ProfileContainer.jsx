import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 15303;
        }
        this.props.getUserProfile(userID);
        this.props.getUserStatus(userID);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}/>)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status

})
//let AuthRedirectComponent = withAuthRedirect(ProfileContainer)//
//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//export default withAuthRedirect(withRouter(connect(mapStateToProps, {getUserProfile})(ProfileContainer)));
export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)