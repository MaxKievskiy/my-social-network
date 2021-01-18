import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.post.map((post => <Post message={post.post} likesCount={post.likeData}/>))

    let addNewPost = React.createRef();

    let addPost = () => {
        let text = addNewPost.current.value;
        alert(text);
    }

    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={addNewPost}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
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