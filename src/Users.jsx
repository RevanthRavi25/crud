import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Users() {
    const[users,setUsers]=useState([{
        Name:"rev",Email:"rev@gmail.com",Age:"29"
    }])
    return(
<div className="user_details">
       <button > <Link to="/create" className="mt-4">Add +</Link></button>
         <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                users.map((user)=>{
                  return(  <tr>
                        <td>{user.Name}</td>
                        <td>{user.Email}</td>
                        <td>{user.Age}</td>
                        <td>
                           <div style={{display:"flex",gap:"10px"}}>
                            <button> <Link to="/update" className="mt-4">Edit</Link></button>
                            <button>Delete</button>
                            </div>
                            </td>
                    </tr>
                    )
                }) 
                }
            </tbody>
         </table>
         </div>
    )
}
export default Users;