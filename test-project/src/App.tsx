import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
// Over here BrowserRouter has been renamed to Router

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet /> {/* This is where nested routes will be rendered */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
