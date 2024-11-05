import React from 'react'
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className='signUpDiv' >
    <form style={{
        border:"2px solid #cbcaa5",
        padding:"20px",
    }}>
        <h1 style={{
                background:"linear-gradient(to right, #334d50, #cbcaa5)",
                borderRadius:"25px"
            }}>Signup</h1>
        <div>
            <label>First Name</label>
            <input type='text'></input>
        </div>
        <div>
            <label>Last Name</label>
            <input type='text'></input>
        </div>
        <div>
            <label>Age</label>
            <input type='Number'></input>
        </div>
        <div>
            <label>Email</label>
            <input type='text'></input>
        </div>
        <div>
            <label>Password</label>
            <input type='text'></input>
        </div>
        <div>
            <label>Mobile No.</label>
            <input type='Number'></input>
        </div>
        <div>
            <label>Profile Pic</label>
            <input type='file'></input>
        </div>
        <div>
            <button type='button'>Signup</button>
            <Link className='button' to="/">Signin</Link>
        </div>
    </form>
  
</div>
  )
}

export default Signup
