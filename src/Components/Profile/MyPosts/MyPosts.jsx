import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {post: 'Hi, how are you?', likeData: 34},
        {post: 'I am fine', likeData: 10}
    ]

    let postElements = postData.map((post => <Post message={post.post} likesCount={post.likeData}/>))

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
                {postElements}
                {/*<Post message={postData[0].post} likesCount={postData[0].likeData}/>*/}
            </div>
        </div>
    )
}
export default MyPosts;