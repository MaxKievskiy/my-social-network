import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/authReducer";

class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/auth/me`,{withCredentials: true}).then(response => {
if(response.deta.resultCode === 0){
    this.props.setAuthUserData(response.data.data.login);
}
        });
    }

    render() {
        return <Header {...this.props}/>
    }


}
let mapStateToProps = (state) => ({

})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);