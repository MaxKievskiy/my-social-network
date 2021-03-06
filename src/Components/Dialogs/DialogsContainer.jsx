import React from 'react';
import {addMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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


export default compose(
    connect(mapStateToProps, {addMessage, updateNewMessageText}),
    withAuthRedirect
)(Dialogs);