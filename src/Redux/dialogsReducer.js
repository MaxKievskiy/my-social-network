const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {message: newMessage}],
                newMessageText: ''
            }
        }
        case  UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        default:
            return state;
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextAC = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text
})
export default dialogsReducer;