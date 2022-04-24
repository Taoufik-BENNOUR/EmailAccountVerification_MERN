import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import './Signup/signup.css'
const StyleTest = () => {
  
  
  return  (
    <div>
        <form>
        <div className="sign-container container">
          <div className="container-wrapper">
            <h3 className="login-text">
              <i className="bi bi-person-circle ac-logo"></i>Login
            </h3>
              <div className="item">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                //   onChange={(e) => setemail(e.target.value)}
                //   value={}
                />
                <div className="item submit">
                <button style={{ color: "white" }} >
                  register
                </button>
              </div>
             </div>
             </div>
             </div>

      </form>
    </div>
  )
}

export default StyleTest