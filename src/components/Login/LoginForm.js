import React, { useState } from "react";
import "./LoginForm.css";
import {  useNavigate } from "react-router-dom";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isErr, setErr] = useState(false);
  const navigate = useNavigate();


  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const signInHandler = () => {
   navigate('/landing');
  };

  return (
    <div className="loginForm">
      <p className="signIn">Sign In</p>
      <div className="input-container">
        <input type="text" placeholder="Email or Phone" className="email" />
      </div>
      {isErr ?? (
        <p className="errorMessage">
          Please enter a valid email address or phone number.
        </p>
      )}
      <div className="password-input-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="password-input"
        />
        <button
          type="button"
          className="show-password-button"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {isErr ?? <p className="errorMessage">Please enter a valid password</p>}
      <button className="loginButton" onClick={signInHandler}>
        Sign In
      </button>
      <div className="form-help">
        <div>
          <input type="checkbox" className="remember-me-cbx"></input>
          <label className="help-text">Remember me?</label>
        </div>
        <p className="help-text"> Need help?</p>
      </div>
      <div class="login-signup-now" data-uia="login-signup-now">
        New to Netflix?{" "}
        <a class="" style={{ color: "white" }} target="_self" href="/">
          Sign up now
        </a>
        .
      </div>
    </div>
  );
}

export default LoginForm;
