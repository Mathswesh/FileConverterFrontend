import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/images.jpeg';
import '../css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img 
              src={logoImage} 
              alt="MyApp Logo" 
            />
          </Link>
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/developer">Contact</Link>
        </div>

        <div className="signin-btn-container">
          <Link to="/signin" className="signin-btn">Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;