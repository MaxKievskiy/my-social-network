import React from "react";
import s from './Post.module.css';


const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://archilab.online/images/1/123.jpg'/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post;