import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'my-social-network/profile/ADD-POST';
const SET_USER_PROFILE = 'my-social-network/profile/SET_USER_PROFILE';
const SET_STATUS = 'my-social-network/profile/SET_STATUS';


export type InitialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likeData: 34},
        {id: 2, post: 'I am fine', likeData: 10}
    ],
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action: any): InitialStateType => {
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


type AddPostType = {
    type: typeof ADD_POST
    newPostBody: string
}
export const addPost = (newPostBody: string): AddPostType => ({type: ADD_POST, newPostBody})

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: number
}
export const setUserProfile = (profile: number): SetUserProfileType => ({type: SET_USER_PROFILE, profile})

type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status})


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const data = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(data));
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}


export default profileReducer;
