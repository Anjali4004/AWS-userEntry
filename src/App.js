import React, { useEffect, useState } from "react";
import Amplify,{API} from "aws-amplify";
import config from "./aws-exports";
import {Authenticator,Card} from "@aws-amplify/ui-react";
import Details from "./Details";

import "./App.css";
import NewApp from "./newApp";
Amplify.configure(config);
function App(){
    
    const [users,setUsers]=useState([]);
    const [toggle,setToggle]=useState(false);
    useEffect(()=>  {
API.get("userAPI","/users/userName").then((userRes)=>
    setUsers(userRes))
    },[]);
   
    return(
      // <Card style={{display:"flex",backgroundColor:"black",color:"white",position:"center"}}>
        <Card>
        <Authenticator>
                {({ signOut, user }) => (
                    <div>
                    
        <div>
            <header className="App-header">
                Hello {user.username}
                 <button onClick={signOut}>Sign out</button>
                <button onClick={()=>setToggle(!toggle)}>{toggle?"New User Entry": "User Details" }</button>
           
           {!toggle? <NewApp users={users}/>:
            <Details users={users}/>}
  
            </header>
        </div>
        </div>
        )}
        </Authenticator>
        </Card>
    )
}
export default App;