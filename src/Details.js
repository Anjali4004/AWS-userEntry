import React from "react";

function Details({users}){
    return (
        <table border="2">
    <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Contact</th>
    </tr>
   
    {users.map((user)=>(
        <tr>
            <td>{user.userName}</td>
            <td>{user.userAddress}</td>
            <td>{user.userContact}</td>
        </tr>
       
    ))}
  </table>
    )
}
export default Details;