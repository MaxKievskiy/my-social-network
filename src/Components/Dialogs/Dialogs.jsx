import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/Validators";
import {Textarea} from "../common/FormsControls/FormsControls";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElement = state.messages.map(m => <Message message={m.message}/>);

    const addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }
    if (!props.isAuth) return <Redirect to='/login'/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElement}
                {/*<DialogItem name={dialogData[0].name} id={dialogData[0].id}/>*/}
            </div>
            <div className={s.messages}>
                {messageElement}
                {/*<Message message={messageData[0].message}/>*/}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name="newMessageBody"
                component={Textarea}
                placeholder='Enter your message'
                validate={[required, maxLength100]}
            />
        </div>
        <div>
            <button>Send message</button>
        </div>
    </form>
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;