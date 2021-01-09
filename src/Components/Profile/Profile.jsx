import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdrhyqHAyvIXsr5Z0WOOHRJWtf-C-_UN9_Q&usqp=CAU'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile;