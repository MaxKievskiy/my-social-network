import React from 'react';
import {Field, reduxForm} from 'redux-form'


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="login" component="input" placeholder={"Login"}/>
        </div>
        <div>
            <Field name="password" component="input" placeholder={"Password"}/>
        </div>
        <div>
            <Field name="rememberMe" component="input" type='checkbox'/>remember me
        </div>
        <div>
            <button>Sign in</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;