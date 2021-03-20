const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {message: newMessage}],
            }
        }
        default:
            return state;
    }
}

export const addMessage = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

export default dialogsReducer;