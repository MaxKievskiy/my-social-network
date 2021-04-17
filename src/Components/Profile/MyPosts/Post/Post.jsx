import React from "react";
import s from './Post.module.css';


const Post = ({message, likesCount}) => {
    return (
        <div className={s.item}>
            <img src='https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424'/>
            {message}
            <div>
                <span>like {likesCount}</span>
            </div>
        </div>
    )
}
export default Post;