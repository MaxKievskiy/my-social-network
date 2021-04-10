import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/Validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo(({posts, addPost}) => {

    let postElements = posts.map(p => <Post id={p.id} message={p.post} likesCount={p.likeData}/>)

    let addNewPost = (values) => {
        addPost(values.newPostBody);
    }

    return (
        <div className={s.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
})
const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="newPostBody"
                       component={Textarea}
                       placeholder='Enter your post'
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;