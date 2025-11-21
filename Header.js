import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Menu} from 'lucide-react';
import './Header.css';
import logo from './images/log.jpg';
import AboutUs from './About';
import Login from './Login';
import Register from './Regi';
import Home from './Home';
import Vol from './Vol';
import Adopt from './Adopt';
import Contact from './Contact';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo">
            <img 
              src={logo} 
              alt="Animal Shelter Logo" 
              className="logo-image"
            />
          </div>
          <h1 className="brand-title">Volunteer at Animal Shelters</h1>
        </div>
        <div className="navbar-right">
          <div className="navbar-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/volunteer" className="nav-link">Volunteer</Link>
            <Link to="/adopt" className="nav-link">Adopt</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          <div className="navbar-auth">
            <Link to="/login" className="auth-button login-btn">Login</Link>
            <Link to="/register" className="auth-button register-btn">Register</Link>
          </div>
        </div>
        <button 
          className="mobile-menu-toggle"
          aria-label="Toggle mobile menu"
        >
          <Menu className="menu-icon" />
        </button>
      </div>
      <div className="mobile-menu">
        <div className="mobile-nav-links">
          <Link to="/" className="mobile-nav-link">Home</Link>
          <Link to="/about" className="mobile-nav-link">About Us</Link>
          <Link to="/volunteer" className="mobile-nav-link">Volunteer</Link>
          <Link to="/adopt" className="mobile-nav-link">Adopt</Link>
          <Link to="/contact" className="mobile-nav-link">Contact</Link>
        </div>
        <div className="mobile-auth-buttons">
          <Link to="/login" className="mobile-auth-button login-btn">Login</Link>
          <Link to="/register" className="mobile-auth-button register-btn">Register</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer" element={<Vol />} />
        <Route path="/adopt" element={<Adopt />} />
      </Routes>
    </nav>
    
  );
}

export default Navbar;