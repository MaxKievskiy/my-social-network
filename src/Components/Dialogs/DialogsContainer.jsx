import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onChangeMessage = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }
    return (
        <Dialogs
            addMessage={onAddMessage}
            updateNewMessageText={onChangeMessage}
            dialogsPage={state}
        />
    )
}
export default DialogsContainer;