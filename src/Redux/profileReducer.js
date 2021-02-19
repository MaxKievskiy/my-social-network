const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?', likeData: 34},
        {id: 2, post: 'I am fine', likeData: 10}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                post: state.newPostText,
                likeData: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }
        default:
            return state;
    }
}
export const addPost = () => ({type: ADD_POST})

export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newPostText: text
})
export default profileReducer;
