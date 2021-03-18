import React from 'react';
import { Fields} from 'redux-form'


const LoginForm = (props) => {
    return <form>
        <div>
            <Fields placeholder={"Login"}/>
        </div>
        <div>
            <input placeholder={"Password"}/>
        </div>
        <div>
            <input type="checkbox"/>remember me
        </div>
        <div>
            <button>Sign in</button>
        </div>
    </form>
}

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}

export default Login;