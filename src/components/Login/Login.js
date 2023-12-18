import React from "react";
import "./Login.css";
import Header from "../Login/Header/Header";
import Footer from "../Login/Footer/Footer";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div className="login-bg">
      <div className="container">
        <Header />
        <LoginForm />
        <Footer />
      </div>
    </div>
  );
}

export default Login;
