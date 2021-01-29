import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";


let state = {
    _state: {
        profilePage:
            {
                posts: [
                    {id: 1, post: 'Hi, how are you?', likeData: 34},
                    {id: 2, post: 'I am fine', likeData: 10}
                ],
                "newPostText": ''
            },
        dialogsPage:
            {
                dialogs: [
                    {name: 'Julia', id: 1},
                    {name: 'Avram', id: 2},
                    {name: 'Daniel', id: 3},
                    {name: 'Katrin', id: 4},
                    {name: 'Elena', id: 5},
                    {name: 'Rivka', id: 6}

                ],
                messages: [
                    {message: 'Hello!!!'},
                    {message: 'How are you?'},
                    {message: 'Bye'},
                    {message: 'Yo',},
                    {message: 'Yes',}

                ],
                "newMessageText" : ''
            },
        sideBar:{ }
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);


    }
}

export default state;
