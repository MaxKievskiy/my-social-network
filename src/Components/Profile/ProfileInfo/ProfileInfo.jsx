import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";



const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div >

            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdrhyqHAyvIXsr5Z0WOOHRJWtf-C-_UN9_Q&usqp=CAU'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
               <div>{props.profile.aboutMe}</div>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;