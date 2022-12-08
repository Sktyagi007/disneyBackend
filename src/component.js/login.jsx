import React from "react";
import { useState } from "react";
import './login.css';
import {useAuth} from "./context/AuthContext";
import axios from "axios";
import {useHistory} from 'react-router-dom';

function Login(){

    const[loginBool,setLogin] = useState(true);
    //login state
    // const[userName,setUserName] = useState("");
    // const[pass,setPass] = useState("");
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[conPassword,setConPassword] = useState("");
    const[companyName,setCompanyName] = useState("");
    const[mobileNo,setMobileNo] = useState("");
    const[designation,setDesignation] = useState("");
    const {register,login} = useAuth();
    const history = useHistory();
    

    const handleRegister = async () => {
        try {
            console.log("sending request");
            // do register
            await register(firstName,lastName,email,password,conPassword,companyName,mobileNo,designation);
             
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleLogin = async () => {
        try {
            console.log("sending request");
            // do register
            await login(email,password);
            history.push("/homePage");
        }
        catch (err) {
            console.log(err);
        }
    }

    const fPage = () =>{
        history.push("/forgetPassword");
    }


    
    
    return(
        <>
        <div className="en-body">
            
            
            <div className="login-div">
                <div className="main-btn">
                    <button className="log" onClick={()=>setLogin(true)}><strong>Login</strong></button>
                    <button className="reg" onClick={()=>setLogin(false)}><strong>Register</strong></button>

                </div>
                {loginBool? <div className="inputForm">
                    <input className="mailLogin" placeholder="Email Or UserName" onChange={(e)=>setEmail(e.target.value)}></input>
                    <input className="passwordLogin" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
                    
                </div>:
                 <div className="inputForm">
                 <input className="mailLogin" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}></input>
                 <input className="passwordLogin" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}></input>
                 <input className="mailLogin" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
                 <input className="passwordLogin" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
                 <input className="mailLogin" placeholder="Confirm Password" onChange={(e)=>setConPassword(e.target.value)}></input>
                 <input className="passwordLogin" placeholder="Mobile no" onChange={(e)=>setMobileNo(e.target.value)}></input>
                 <input className="mailLogin" placeholder="Company Name" onChange={(e)=>setCompanyName(e.target.value)}></input>
                 <input className="passwordLogin" placeholder="Designation" onChange={(e)=>setDesignation(e.target.value)}></input>
                 
             </div>}

               
                {loginBool?<div className="bottomTexts">
                
                <button className="fButton" onClick={fPage}>Forgot Password?</button>
                </div>:<></>}
                {loginBool? <div className="subBtn">
                <button className="submit-btn" onClick={handleLogin}>SUBMIT</button>
                </div>: <div className="subBtn">
                <button className="submit-btn" onClick={handleRegister}>REGISTER</button>
                </div>}

            </div>
        </div>
        </>
    )
}

export default Login;
