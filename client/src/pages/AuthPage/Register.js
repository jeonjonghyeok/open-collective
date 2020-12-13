import React,{useEffect,useState,Component} from 'react';
import { Link } from 'react-router-dom';
import HttpClient from '../../utils/HttpClient';
import "./Register.css"
// import axios from "axios";

function Register(){
    // const [User, setUser]=useState({
    //     email : '',
    //     password:'',
    //     name:''
    // });
    const [User, setUser]=useState([]);
    
    useEffect(()=>{
        // axios.get("/rest/auth/login")
        // HttpClient
        // .get('/rest/auth/login')
        //     .then(((User)=>{
        //         alert(User);
                // setUser(User);
                // alert(User)
            // .post('/rest/auth/signup',User)
            // .then(((response)=>{
            //     alert("Success");
            // }));
    },[]);
    
        return(
            <div className="Register">
                <div className="Register_SelectButtons">
                    <button>Create Personal Profile</button>
                    <button>Create Organization Profile</button>
                </div>
                
                <p>Fullname</p>
                <input id="name" name="name" placeholder="i.e John Doe"/>
                <p>Email</p>
                <input id="email" name="email" placeholder="i.e. yourname@yourhost.com"/>
                <p>PassWord</p>
                <input type="password" id="password" name="password"/>
                <br/>

                <div className="Register_check">
                <input type="checkbox" name ="monthNews"/> Receive our monthly newsletter 
                </div>

                <br />
                <button>Create Personal Profile</button>
                <div className="Register_Sign-in">
                    Already have an account?
                    <button>
                        Sign In
                    </button>
                </div>
            </div>
        )
}

export default Register