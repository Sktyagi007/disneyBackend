import React, {useState} from "react"
import { useAuth } from "./context/AuthContext";
import "./login.css";
import {useHistory} from 'react-router-dom';
function OTP(){
    const [otp,otpSet] = useState("");
    const{resetPassEmail,setOtpPassEmail} = useAuth();
    const history = useHistory();
    const saveOTP = async () => {
        setOtpPassEmail(otp);
        alert("otp set");
        history.push("/resetPassword");
    }
    return (
        <>
        {
        // resetPassEmail != null ?
        <div className="en-body">
            <div className="login-div">
                <div className="h1-box">
                    <h1>Enter OTP</h1>
                </div>
                <div className="inputForm">
                    <input className="mailLogin" value={otp}
                        type="text" name="Email" placeholder="Your OTP"
                        onChange={(e) => otpSet(e.target.value)}>               
                    </input>
                </div>
                <div className="subBtn">
                    <button className="submit-btn"
                    onClick={saveOTP}
                    >Submit</button>
                </div>
            </div>
        </div>
        // : <h2 className='container-grey'>First go to your Forget Password</h2>
        }
        </>
    )
}


export default OTP;