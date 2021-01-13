import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let postData = [
    {post: 'Hi, how are you?', likeData: 34},
    {post: 'I am fine', likeData: 10}
]


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
                <Post message={postData[0].post} likesCount={postData[0].likeData}/>
                <Post message={postData[1].post} likesCount={postData[1].likeData}/>
            </div>
        </div>
    )
}

export default MyPosts;