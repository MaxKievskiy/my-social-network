import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

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


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return (
        <div className={s.message}> {props.message}</div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
                <DialogItem name={dialogData[5].name} id={dialogData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
            </div>
        </div>
    )
}
export default Dialogs;