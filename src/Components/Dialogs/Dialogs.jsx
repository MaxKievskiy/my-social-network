import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


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
                <DialogItem name='Julia' id='1'/>
                <DialogItem name='Avraam' id='2'/>
                <DialogItem name='Daniel' id='3'/>
                <DialogItem name='Katrin' id='4'/>
                <DialogItem name='Elena' id='5'/>
                <DialogItem name='Rivka' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hello!!!'/>
                <Message message=' How are you?'/>
                <Message message='Bye'/>
            </div>
        </div>
    )
}
export default Dialogs;