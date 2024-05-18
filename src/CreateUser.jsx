import React from "react";
function createUser(){
    return(
<div className="user_details">
    <div>Create User</div>
      <form>
        <div className="mt-2 mb-2">
<label>Name</label>
<input type="text" placeholder="Enter name" className="form-control"/>
        </div>
        <div className="mt-2 mb-2">
<label>Email</label>
<input type="password" placeholder="Enter name" className="form-control"/>
        </div>
        <div className="mt-2 mb-2">
<label>Age</label>
<input type="text" placeholder="Enter name" className="form-control"/>
<div className="mt-3">
<button className="btn btn-success ">Submit</button>
</div>
        </div>
      </form>
        </div>
    )
}
export default createUser;