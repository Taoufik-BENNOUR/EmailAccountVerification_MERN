import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../redux/actions/authActions";
import "./signup.css";

const Signup = () => {
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const msg = useSelector((state) => state.authReducer.msg);
  const errors = useSelector((state) => state.authReducer.errors);
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
    };

    dispatch(signup(newUser));
    setemail("");
    setpassword("");
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  });

  return (
    <>
      <h1>Sign Up</h1>

      <form>
        <div className="container">
          <div className="container-wrapper">
            <h3 className="login-text">
              <i className="bi bi-person-circle ac-logo"></i>Sign Up
            </h3>

            <form method="post">
              <div className="item">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="item">
                <input
                  className="input"
                  type="email"
                  placeholder="password"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
              </div>
              <span className="remember">
                {" "}
                <a href="#">Forgot Password?</a>{" "}
              </span>

              <div className="item submit">
                <button style={{ color: "white" }} onClick={(e) => register(e)}>
                  register
                </button>
              </div>
            </form>
            <h2>
              <span>OR</span>
            </h2>

            <div className="social-media">
              <a href="#">
                <div className="icons8-google social-mediaImg"></div>
              </a>
              <a href="#">
                <div className="icons8-facebook-circled social-mediaImg"></div>
              </a>
              <a href="#">
                <div className="icons8-twitter social-mediaImg"></div>
              </a>
            </div>
            <span className="ac">
              Do you have an Account? <a href="/signin">login</a>
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
