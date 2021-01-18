import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./DialogItem/Message";

const Dialogs = (props) => {

    let dialogElement = props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageElement = props.state.messages.map((message) => <Message message={message.message}/>)

    let addNewElement = React.createRef();

    let addMessage  = () => {
      let text = addNewElement.current.value;
      alert(text)
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
                    <textarea ref={addNewElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>New message</button>
                </div>
            </div>

        </div>
    )
}
export default Dialogs;