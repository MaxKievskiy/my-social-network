import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/helpers/objectHelpers";

const FOLLOW = 'my-social-network/users/FOLLOW';
const UNFOLLOW = 'my-social-network/users/UNFOLLOW';
const SET_USERS = 'my-social-network/users/SET-USERS';
const SET_CURRENT_PAGE = 'my-social-network/users/SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'my-social-network/users/TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'my-social-network/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'my-social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS';


export type InitialStateType = {
    users: Array<object>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: true
    followingInProgress: Array<boolean>
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}


type FollowSuccessType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({type: FOLLOW, userId});

type UnfollowSuccessType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({type: UNFOLLOW, userId});

type SetUsersType = {
    type: typeof SET_USERS
    users: Array<Object>
}
export const setUsers = (users: Array<Object>): SetUsersType => ({type: SET_USERS, users});

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage});

type SetTotalUsersCountType = {
    type: typeof TOTAL_USERS_COUNT
    count: number
}
export const setTotalUsersCount = (count: number): SetTotalUsersCountType => ({type: TOTAL_USERS_COUNT, count});

type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching});

type ToggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})


export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        const data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    }
}

const followUnfollowFlow = async (dispatch: any, userAPI: any, userId: number, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await userAPI(userId);
    if (data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, usersAPI.unfollow.bind(userId), userId, unfollowSuccess);
    }
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, usersAPI.follow.bind(userId), userId, followSuccess);
    }
}

export default usersReducer;
