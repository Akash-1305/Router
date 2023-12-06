import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import About from './About.js';

function App(){
    return(
      <Router>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <h2>Welcome To React Router</h2>
        <Routes>
          <Route extends path="/Home" element={<Home/>}/>
          <Route extends path="/About" element={<About/>}/>
        </Routes>
      </Router>
    )
  }

export default App;