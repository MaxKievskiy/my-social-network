import React, {useEffect, useState} from "react";


const ProfileStatusWithHook = (props) => {

    //hook useState
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    //hook useEffect
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);


    const activateEditMode = () => {
        setEditMode(true);

    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {
                !editMode &&
                <div>
                        <span onDoubleClick={activateEditMode}>
                        {props.status || 'No Status'}
                    </span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHook;