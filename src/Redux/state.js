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

    _rerenderEntireTree() {},

    addPost() {
        let newPost = {
            id: 3,
            post: this._state.profilePage.newPostText,
            likeData: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },

    addMessage() {
        let newMessage = {
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._rerenderEntireTree(this._state);
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._rerenderEntireTree(this._state);
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    getState() {
        return this._state;
    }
}


export default store;
