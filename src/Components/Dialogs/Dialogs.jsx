import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messageElement = state.messages.map(message => <Message message={message.message}/>);

    let addNewElement = state.newMessageText;

    let onAddMessage = () => {
        props.addMessage();
    }
    let onChangeMessage = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
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
                    <textarea placeholder='Enter your message'
                              onChange={onChangeMessage}
                              value={addNewElement}/>
                </div>
                <div>
                    <button onClick={onAddMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;