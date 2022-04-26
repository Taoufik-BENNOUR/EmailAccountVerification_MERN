import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { changePassword, resetPassword } from '../../redux/actions/authActions'
import '../Signup/signup.css'
const ForgotPassword = () => {
  const dispatch = useDispatch()

  const [password, setpassword] = useState("")
    const {id,token} = useParams() 
    useEffect(() => {
     dispatch(resetPassword(id,token))
    }, [])
    
   
    const changepass = (e) => {
      e.preventDefault();
      const newPass = {
        password,   
      };
  
      dispatch(changePassword(id,token,newPass));
      setpassword("");
    };

  return  (
    <div>
        <form>
        <div className="sign-container container">
          <div className="container-wrapper">
            <h3 className="login-text">
              <i className="bi bi-person-circle ac-logo"></i>Set Password
            </h3>
             
             <div className="item">
                <input
                  className="input"
                  type="password"
                  placeholder="New password"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />  
             {/* <div className="item">
                <input
                  className="input"
                  type="password"
                  placeholder="Confirm new password"
                //   onChange={(e) => setemail(e.target.value)}
                //   value={}
                />  
             </div>
              */}
              </div>
             <div className="item submit">
                <button onClick={(e)=>changepass(e)} style={{ color: "white" }} >
                  Reset password
                </button>
              </div>
              
             </div>
             </div>

      </form>
    </div>
  )
}

export default ForgotPassword