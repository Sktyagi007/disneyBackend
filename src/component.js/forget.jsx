import React, { useState } from "react";
import "../component.js/login.css";
import axios from 'axios';
import {useAuth} from "./context/AuthContext";
import {useHistory} from 'react-router-dom';
function Forget(){
    const[email,setEmail] = useState("");
    const {setResetEmail} = useAuth();
    const history = useHistory();
    const sendEmail = async ()=>{
        let res = await axios.patch("http://localhost:3001/api/v1/auth/forgetPassword",{email})
        alert("mail send to your regsitered email");
        console.log(res);
        setResetEmail(email);
        history.push("/otp");
    }
    return(
        <>
        <div className="en-body">
            <div className="login-div">
                <div className="h1-box">
                    <h1>Forget Password</h1>
                </div>
                <div className="inputForm">
                    <input className="mailLogin" placeholder="Email Or UserName" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="subBtn">
                    <button className="submit-btn" onClick={sendEmail}>Send Otp</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Forget;
