import React from 'react';
import {addMessage, updateNewMessageText} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             dispatch(addMessageAC());
//         },
//         updateNewMessageText: (text) => {
//             dispatch(updateNewMessageTextAC(text));
//         }
//     }
// }

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(Dialogs);
export default DialogsContainer;