import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signin } from "../../redux/actions/authActions";
import "../Signup/signup.css";
const Signin = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  });

  const login = (e) => {
    e.preventDefault();

    dispatch(signin({ email, password }));

    setemail("");
    setpassword("");
  };
  return (
    <>

      <form>
        <div class="container">
          <div class="container-wrapper">
            <h3 class="login-text">
              <i class="bi bi-person-circle ac-logo"></i>Login
            </h3>

            <form method="post">
              <div class="item">
                {" "}
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
              </div>
              <div class="item">
                {" "}
                <input
                  className="input"
                  type="password"
                  placeholder="password"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
              </div>
              <span class="remember">
                <Link to="/forgotpassword">Forgot Password?</Link>{" "}
              </span>
              <div class="item submit">
                {" "}
                <button style={{ color: "white" }} onClick={(e) => login(e)}>
                  Login
                </button>
              </div>
            </form>
            <h2>
              <span>OR</span>
            </h2>

            <div class="social-media">
              <a href="#">
                <div class="icons8-google social-mediaImg"></div>
              </a>
              <a href="#">
                <div class="icons8-facebook-circled social-mediaImg"></div>
              </a>
              <a href="#">
                <div class="icons8-twitter social-mediaImg"></div>
              </a>
            </div>
            <span class="ac">
              Don't have an Account? <Link to="/signup">Sign Up</Link>
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signin;
