import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postElements = props.post.map((post => <Post id={post.id} message={post.post} likesCount={post.likeData}/>))

    let addNewPost = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = addNewPost.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newPostText: text});
    }

    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={addNewPost} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
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