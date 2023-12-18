import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErr, setIsErr] = useState(false);
  const dispatch = useDispatch();

  const signInHandler = () => {
    dispatch(login());
    navigate("/landing");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your validation logic here
    if (!email || !password) {
      setIsErr(true);
      return;
    } else {
      setIsErr(false);
      signInHandler(); // Call your sign-in logic here if the form is valid
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="loginForm">
      <p className="signIn">Sign In</p>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Email or Phone"
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {isErr && (
          <p className="errorMessage">
            Please enter a valid email address or phone number.
          </p>
        )}
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="show-password-button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {isErr && <p className="errorMessage">Please enter a valid password</p>}
        <button type="submit" className="loginButton">
          Sign In
        </button>
      </form>
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
