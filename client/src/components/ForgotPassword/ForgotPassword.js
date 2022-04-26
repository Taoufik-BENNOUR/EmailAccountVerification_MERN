import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../redux/actions/authActions';
import '../Signup/signup.css'
const ResetPassword = () => {
    const [email, setemail] = useState("")
    const dispatch = useDispatch()
    const sendemail = (e) => {
        e.preventDefault();
        const sendmail = {
          email,   
        };
    
        dispatch(forgotPassword(sendmail));
        setemail("");
      };
  return (
    <div>
        



                <form>
        <div className="sign-container container">
          <div className="container-wrapper">
            <h3 className="login-text">
              <i className="bi bi-person-circle ac-logo"></i>Reset password
            </h3>
            <div className="item">
        <input
                  className="input"
                  type="email"
                  placeholder="Email adress"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />  
                
             </div> 
             <div className="item submit">
             <button onClick={(e)=>sendemail(e)} style={{ color: "white" }} >
                  Send email
                </button>
              </div>
              
             
            </div>
         
        </div>
      </form>
    </div>
  )
}

export default ResetPassword