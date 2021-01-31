import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../Redux/StoreContext";


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let onAddMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }
                    let onChangeMessage = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text));
                    }
                    return (
                        <Dialogs
                            addMessage={onAddMessage}
                            updateNewMessageText={onChangeMessage}
                            dialogsPage={state}
                        />
                    )
                }
            }

        </StoreContext.Consumer>
    )
}

export default DialogsContainer;