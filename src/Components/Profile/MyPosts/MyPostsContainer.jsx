import React from "react";
import {addPost, updateNewPostText} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(addPostAC());
//         },
//         updateNewPostText: (text) => {
//             dispatch(updateNewPostTextAC(text));
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPosts);
export default MyPostsContainer;