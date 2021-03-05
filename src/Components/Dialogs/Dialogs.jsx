import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElement = state.messages.map(m => <Message message={m.message}/>);

    let addNewElement = state.newMessageText;

    let onAddMessage = () => {
        props.addMessage();
    }
    let onChangeMessage = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }
    if(!props.isAuth) return <Redirect to='/login'/>
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