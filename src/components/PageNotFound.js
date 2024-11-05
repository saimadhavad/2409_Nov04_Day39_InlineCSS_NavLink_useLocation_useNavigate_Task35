import React from 'react'
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className='App'>
      <h1>Page Not Found</h1>
   
       <p className='paraPNFDiv'>
       Click here to go to the &nbsp;&nbsp;
       <Link to="/">Login</Link>&nbsp;&nbsp;  Page.
       </p>
    </div>
  )
}

export default PageNotFound
