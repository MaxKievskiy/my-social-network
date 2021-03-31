import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/userPhoto.png";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHook from "./ProfileStatusWithHook";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdrhyqHAyvIXsr5Z0WOOHRJWtf-C-_UN9_Q&usqp=CAU'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto}/>
                <div>{props.profile.fullName}</div>
                <ProfileStatusWithHook status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;