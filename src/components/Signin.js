import React, { useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";

function Signin() {

let navigate = useNavigate();
let emailInputRef = useRef();
let passwordInputRef = useRef();
let messageInputRef = useRef();

  return (
    <div className='signInDiv'>
       <form style={{
        border:"2px solid #cbcaa5",
        padding:"20px",
    }}>
            <h1 style={{
                background:"linear-gradient(to left, #334d50, #cbcaa5)",
                borderRadius:"25px"
            }}>Signin</h1>
             <div>
                <label>Email</label>
                <input type='text' ref={emailInputRef}></input>
            </div>
            <div>
                <label>Password</label>
                <input type='text' ref={passwordInputRef}></input>
            </div>
            <div>
                <label>Message</label>
                <input type='text' ref={messageInputRef}></input>
            </div>
            <div className='linkButton'>
                <button type='button'

                    onClick={ () => {
                        let email = emailInputRef.current.value;
                        let password = passwordInputRef.current.value;
                        let message = messageInputRef.current.value;

                        if (email == "dsmv@gmail.com" && password == "dsmv") {
                            navigate("/dashboard",{state:{msg:message}});
                        }
                        else {
                            alert("Invalid Email / Password");
                        }
                        
                    }}

                >Signin</button> 
                {/* <Link className='button' to="/dashboard">Signin</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  */}
                <Link className='button' to="/signup">signup</Link>
                
                
            </div>
        </form>
        
    </div>
  )
}

export default Signin
