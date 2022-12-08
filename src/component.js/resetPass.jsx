import React, { useState } from "react";
import "../component.js/login.css";
import { useAuth } from "./context/AuthContext";
import axios from "axios";
import { useHistory } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordCnf, setCnfPassword] = useState("");
  const { resetPassEmail, setResetEmail, otpPassEmail, setOtpPassEmail } =
    useAuth();
  const history = useHistory();

  const resetPassword = async () => {
    try {
      console.log(setOtpPassEmail);
      let res = await axios.patch(
        "http://localhost:3001/api/v1/auth/resetPassword",
        {
          email: resetPassEmail,
          otp: otpPassEmail,
          password: password,
          confirmPassword: passwordCnf,
        }
      );
      if (res.status == 201) {
        alert("password changed succesfully");
        setResetEmail(null);
        setOtpPassEmail(null);
        history.push("/login");
      } else if (res.status == 200) {
        alert(res.data.message);
        setOtpPassEmail(null);
        setResetEmail(null);
      }
    } catch (err) {
      console.log(setOtpPassEmail);
      if (err.message == "Request failed with status code 500") {
        alert("Internal server error");
      }
      setOtpPassEmail(null);
      setResetEmail(null);
    }
  };

  return (
    <>
      <div className="en-body">
        <div className="login-div">
          <div className="h1-box">
            <h1>Reset Password</h1>
          </div>
          <div className="inputForm">
            {/* <input className="mailLogin" placeholder="Email" ></input> */}
            <input
              className="mailLogin"
              placeholder="Password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <input
              className="mailLogin"
              placeholder="Confirm Password"
              type="text"
              value={passwordCnf}
              onChange={(e) => setCnfPassword(e.target.value)}
            ></input>
            {/* <input className="mailLogin" placeholder="Enter Otp"></input> */}
          </div>
          <div className="subBtn">
            <button className="submit-btn" onClick={resetPassword}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
