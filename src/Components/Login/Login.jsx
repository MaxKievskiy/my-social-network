import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/Validators';
import {connect} from 'react-redux';
import {login} from '../../redux/authReducer';
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"


const LoginForm = ({handleSubmit, error,}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field name='email' component={Input} placeholder={'Email'} validate={[required]}/>
        </div>
        <div>
            <Field name='password' component={Input} placeholder={'Password'} type='password' validate={[required]}/>
        </div>
        <div>
            <Field name='rememberMe' component={Input} type='checkbox'/>remember me
        </div>
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