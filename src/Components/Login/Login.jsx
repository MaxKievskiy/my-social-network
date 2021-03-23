import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/Validators";


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="login" component={Input} placeholder={"Login"} validate={[required]}/>
        </div>
        <div>
            <Field name="password" component={Input} placeholder={"Password"} validate={[required]}/>
        </div>
        <div>
            <Field name="rememberMe" component={Input} type='checkbox' validate={[required]}/>remember me
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