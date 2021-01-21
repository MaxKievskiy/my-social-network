import {rerenderEntireTree} from "../render";

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 3,
        post: state.profilePage.newPostText,
        likeData: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.messages = newText;
    rerenderEntireTree(state);
}
export default state;
