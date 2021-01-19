import {rerenderEntireTree} from "../render";

let state = {
    profilePage:
        {
            posts: [
                {id: 1, post: 'Hi, how are you?', likeData: 34},
                {id: 2, post: 'I am fine', likeData: 10}
            ]
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

            ]
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

export let addPost = (messagePost) => {
    let newPost = {
        id: 3,
        post: messagePost,
        likeData: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let addMessage = (message) => {
    let newMessage = {
        message: message,
    };
    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state);
}
export default state;
