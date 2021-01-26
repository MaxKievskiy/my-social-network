import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./DialogItem/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogsReducer";


const Dialogs = (props) => {

    let dialogElement = props.dialogPage.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageElement = props.dialogPage.messages.map((message) => <Message message={message.message}/>)

    let addNewElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onChangeMessage = () => {
        let text = addNewElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElement}
                {/*<DialogItem name={dialogData[0].name} id={dialogData[0].id}/>*/}
            </div>
            <div className={s.messages}>
                {messageElement}
                {/*<Message message={messageData[0].message}/>*/}
                <div>
                    <textarea placeholder={'Enter your message'} onChange={onChangeMessage} ref={addNewElement}
                              value={props.dialogPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;