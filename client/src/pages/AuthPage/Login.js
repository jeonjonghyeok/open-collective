import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

function Login(){



    
        return(
            <div className="Loginpage">
                <div className="login_container">
                    <p>Sign in using your email address:</p>
                    <div className="login_box">
                        <div className="login_input">
                        <input  id="email" name="email" placeholder="i.e. yourname@yourhost.com"></input>
                        <input type="password" font-size="14px" id="password" name="email"></input>
                        </div>
                        <button>Sign in</button>
                    </div>
                    <div className="register_nav">
                        <span>Don't have an account?</span> 
                         <Link to="/opencollective/contact">
                         <span> Join Free </span>
                        </Link>
                    </div>
                </div>
            </div>
        )
   
}

export default Login