import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.myPostsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                    <button>Remove</button>
                </div>

            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='34'/>
                <Post message='I am fine' likesCount='10'/>
            </div>
        </div>
    )
}

export default MyPosts;