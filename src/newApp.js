import React, { useEffect, useState } from "react";
import Amplify,{API} from "aws-amplify";
import config from "./aws-exports";

import "./App.css";
Amplify.configure(config);
function NewApp(){
    const [userName,setUserName]=useState("");
    const [userAddress,setUserAddress]=useState("");
    const [contact,setContact]=useState();
    const [password,setPassword]=useState();

    const handleSubmit=(e)=>{
        e.preventDefault();
        API.post("userAPI","/users",{
            body:{
                userName:userName,
                userAddress:userAddress,
                userContact:contact,
                password:password
            }
        })
    }
    return(
      
   <div className="login-form">
    <h2>
      <b>New User Detail</b>
    </h2>
      <div className="wrap-input">
        <input
          id="Useremail"
          type="email"
          placeholder="Name"
          value={userName}
          onChange={(e)=>{setUserName(e.target.value)}}
        />
        <i className="fa fa-envelope" />
        <br />
        <br />
      </div>
      <div className="wrap-input">
        <input
          id="Userpwd"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          
        />
        <i className="fa fa-lock" />
        <br />
        <br />
      </div>
      <div className="wrap-input">
        <input
          id="UsrAddr"
          placeholder="Address"
          value={userAddress}
          onChange={(e)=>{setUserAddress(e.target.value)}}
          
        />
        <br />
        <br />
        </div>
        <div className="wrap-input">
        <input
          id="UsrContact"
          placeholder="Contact"
          value={contact}
          onChange={(e)=>{setContact(e.target.value)}}
          
        />
        <br />
        <br/>
        </div>
      <button className="login" type="submit" onClick={handleSubmit}>
        <h3>Enter</h3>
      </button>
      <br />
  </div>
    )
}
export default NewApp;