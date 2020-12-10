import React,{Component} from 'react';
import "./Login.css"

class Login extends Component{
    render(){
        return(
            <div className="Loginpage">
                <div className="login_container">
                    <p>Sign in using your email address:</p>
                    <input font-size="14px" id="email" name="email" placeholder="i.e. yourname@yourhost.com"></input>
                    <button>Sign in</button>
                    <div className="register_nav">
                        <span>Don't have an account?</span> 
                        <span> Join Free </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login