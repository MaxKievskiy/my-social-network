import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likeData: 34},
        {id: 2, post: 'I am fine', likeData: 10}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                post: action.newPostBody,
                likeData: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}
export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})
export const setStatus = (status) => ({
    type: SET_STATUS, status
})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            });
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}


export default profileReducer;
