const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let store = {
    _state: {
        profilePage:
            {
                posts: [
                    {id: 1, post: 'Hi, how are you?', likeData: 34},
                    {id: 2, post: 'I am fine', likeData: 10}
                ],
                newPostText: ''
            },
        dialogsPage:
            {
                dialogs: [
                    {name: 'Julia', id: 1},
                    {name: 'Avraam', id: 2},
                    {name: 'Daniel', id: 3},
                    {name: 'Katrin', id: 4},
                    {name: 'Elena', id: 5},
                    {name: 'Rivkaa', id: 6}

                ],
                messages: [
                    {message: 'Hello!!!'},
                    {message: 'How are you?'},
                    {message: 'Bye'},
                    {message: 'Yo',},
                    {message: 'Yes',}

                ],
                newMessageText: ''
            },
        // navBar:
        //     {
        //     bestFriends: [
        //         {name: 'Julia', id: 1},
        //         {name: 'Avraam', id: 2},
        //         {name: 'Daniel', id: 3}
        //         ]
        // }
    },

    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                post: this._state.profilePage.newPostText,
                likeData: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newPostText: text
})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text
})

export default store;
