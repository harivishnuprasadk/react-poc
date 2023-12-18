import React, { useEffect } from "react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Player from "./components/Video/Player";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/authSlice";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("loggedIn");
    if (storedLoggedIn) {
      dispatch(login());
    }
  }, []); 

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Landing /> : <Login />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
