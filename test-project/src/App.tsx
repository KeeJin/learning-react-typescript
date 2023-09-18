import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App-tailwind.css';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
// Over here BrowserRouter has been renamed to Router

import NestedRoute from "./pages/NestedRoute"

function App() {
  return (
    <Router>
      <nav>
        <ul className="flex">
          <li className="mr-6 text-blue-500 hover:text-blue-800">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-6 text-blue-500 hover:text-blue-800">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-6">
            <Link to="/contact">Contact</Link>
            <ul>
              <li className="mr-6">
                <Link to="/contact/nested_route">Nested Route</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <Outlet />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="nested_route" element={<NestedRoute />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
