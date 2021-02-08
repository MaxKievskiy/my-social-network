import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post id={p.id} message={p.post} likesCount={p.likeData}/>)

    let addNewPost = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = addNewPost.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder='Enter your post'
                              onChange={onPostChange}
                              ref={addNewPost}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
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