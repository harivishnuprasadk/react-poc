import React from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import Player from './components/Video/Player';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/player" element={<Player/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
