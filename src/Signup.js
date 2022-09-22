import React from 'react'

function Signup() {
  return (
    <form id="login">
        <div class="form-group">
                <label for="exampleInputEmail1">FirstName</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">LastName</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="form-group ">
                <label for="exampleInputEmail1">PhoneNumber</label> 
                <input type="number" class="form-control" id="exampleInputEmail1" />
               
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
  )
}

export default Signup