const ADD_MESSAGE = 'my-social-network/dialogs/ADD-MESSAGE';


export type InitialStateType = typeof initialState
let initialState = {
    dialogs:  [
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


const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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
type AddMessageType = {
    type: typeof ADD_MESSAGE
    newMessageBody: string
}
export const addMessage = (newMessageBody: string): AddMessageType => ({type: ADD_MESSAGE, newMessageBody})

export default dialogsReducer;