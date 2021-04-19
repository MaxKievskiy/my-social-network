import React from 'react';
import {reduxForm} from 'redux-form'
import {createField, Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/Validators';
import {connect} from 'react-redux';
import {login} from '../../redux/authReducer';
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"


const LoginForm = ({handleSubmit, error,}) => {
    return <form onSubmit={handleSubmit}>
        {createField('email', Input, 'Email', [required])}
        {createField('password', Input, 'Password', [required], {type: 'password'})}
        {createField('rememberMe', Input, 'Password', [required], {type: 'checkbox'}, 'remember me')}

        {error && <div className={style.formSummaryError}>
            {error}
        </div>}

        <div>
            <button>Sign in</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    }
    if (isAuth) {
        return (
            <Redirect to={'/profile'}/>
        )
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>


}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);