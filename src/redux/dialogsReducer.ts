const ADD_MESSAGE = 'my-social-network/dialogs/ADD-MESSAGE';


export type InitialStateType = typeof initialState
type DialogType = {
    name: string
    id: number
}
type MessageType = {
    message: string
}
let initialState = {
    dialogs: [
        {name: 'Julia', id: 1},
        {name: 'Avram', id: 2},
        {name: 'Daniel', id: 3},
        {name: 'Katrin', id: 4},
        {name: 'Elena', id: 5},
        {name: 'Rivka', id: 6}
    ] as Array<DialogType>,
    messages: [
        {message: 'Hello!!!'},
        {message: 'How are you?'},
        {message: 'Bye'},
        {message: 'Yo',},
        {message: 'Yes',}
    ] as Array<MessageType>
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
type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    newMessageBody: string
}
export const addMessage = (newMessageBody: string): AddMessageActionType => ({type: ADD_MESSAGE, newMessageBody})

export default dialogsReducer;