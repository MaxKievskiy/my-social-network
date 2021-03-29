import React from 'react';
import {connect} from 'react-redux';
import {follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        //     this.props.toggleIsFetching(false);
        // });
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>{this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}

            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (usersId) => {
//             dispatch(followAC(usersId))
//         },
//         unfollow: (usersId) => {
//             dispatch(unfollowAC(usersId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
//}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: requestUsers,
        unfollow,
        follow
    })
)(UsersContainer);
