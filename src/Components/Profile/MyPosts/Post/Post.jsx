import React from "react";
import s from './Post.module.css';


const Post = ({message, likesCount}) => {
    return (
        <div className={s.item}>
            <img src='https://archilab.online/images/1/123.jpg'/>
            {message}
            <div>
                <span>like {likesCount}</span>
            </div>
        </div>
    )
}
export default Post;