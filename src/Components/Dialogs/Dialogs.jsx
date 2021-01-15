import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./DialogItem/Message";

const Dialogs = (props) => {
    let dialogData = [
        {name: 'Julia', id: 1},
        {name: 'Avraam', id: 2},
        {name: 'Daniel', id: 3},
        {name: 'Katrin', id: 4},
        {name: 'Elena', id: 5},
        {name: 'Rivkaa', id: 6}

    ]

    let messageData = [
        {message: 'Hello!!!'},
        {message: 'How are you?'},
        {message: 'Bye'},
        {message: 'Yo',},
        {message: 'Yes',}

    ]

    let dialogElement = dialogData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageElement = messageData.map((message) => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElement}
                {/*<DialogItem name={dialogData[0].name} id={dialogData[0].id}/>*/}
            </div>
            <div className={s.messages}>
                {messageElement}
                {/*<Message message={messageData[0].message}/>*/}
            </div>
        </div>
    )
}
export default Dialogs;