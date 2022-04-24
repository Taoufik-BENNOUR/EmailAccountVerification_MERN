import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import '../Signup/signup.css'
const ForgotPassword = ({mail}) => {
  
  
  return  (
    <div>
        <form>
        <div className="sign-container container">
          <div className="container-wrapper">
            <h3 className="login-text">
              <i className="bi bi-person-circle ac-logo"></i>{mail?"Reset password":"Set Password"}
            </h3>
             {mail?  <div className="item">
                <input
                  className="input"
                  type="email"
                  placeholder="Email adress"
                //   onChange={(e) => setemail(e.target.value)}
                //   value={}
                />  
             </div>: (<div>
             
             <div className="item">
                <input
                  className="input"
                  type="password"
                  placeholder="New password"
                //   onChange={(e) => setemail(e.target.value)}
                //   value={}
                />  
             </div>
             <div className="item">
                <input
                  className="input"
                  type="password"
                  placeholder="Confirm new password"
                //   onChange={(e) => setemail(e.target.value)}
                //   value={}
                />  
             </div> </div>)}
             <div className="item submit">
                <button style={{ color: "white" }} >
                  {mail ? "Send Mail" : "Reset password"}
                </button>
              </div>
              
             </div>
             </div>

      </form>
    </div>
  )
}

export default ForgotPassword