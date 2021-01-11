import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={s.dialog + " " + s.active}>Julia</div>
                <div className={s.dialog + " " + s.active}>Avraam</div>
                <div className={s.dialog}>Daniel</div>
                <div className={s.dialog}>Katrin</div>
                <div className={s.dialog}>Elena</div>
                <div className={s.dialog}>Rivka</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}> Hello!!!</div>
                <div className={s.message}> How are you?</div>
                <div className={s.message}> Bye))</div>
            </div>
        </div>
    )
}
export default Dialogs;