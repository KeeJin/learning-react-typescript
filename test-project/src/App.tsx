import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App-tailwind.css';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
// Over here BrowserRouter has been renamed to Router

import NestedRoute from "./pages/NestedRoute"

function Navbar() {
  return (
    <nav className="bg-blue-500 px-8 py-2 font-semibold">
      <ul className="flex space-x-6 text-white px-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="relative group">
          <Link to="/contact">Contact</Link>
          <ul className="absolute py-2 px-1 hidden group-hover:block group-hover:bg-blue-500 min-w-[100%]">
            <li className="mr-6">
              <Link to="/contact/nested_route">Nested Route</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Outlet />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/nested_route" element={<NestedRoute />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
