import React from "react";
import {useAuth} from "./context/AuthContext";
import {useHistory} from 'react-router-dom';

function HomePage(){
    const {fName} = useAuth();
    console.log(fName);
    return(
        <>
            <h1>Hi {fName}</h1>
        </>
    )
}

export default HomePage;

// sarthak123@gmail.com