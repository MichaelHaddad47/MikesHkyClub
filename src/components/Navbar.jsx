import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/mikeshkyclublogo.png';
import loginLogo from '../assets/loginlogo.png';
import cartLogo from '../assets/cartlogo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="navbar-separator"></div>
      <ul className="navbar-links">
        <li><Link to="/equipment">Equipment</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/training">Training</Link></li>
      </ul>
      <div className="navbar-separator"></div>
      <div className="navbar-icons">
        <Link to="/login" className="navbar-icon">
          <img src={loginLogo} alt="Login" />
        </Link>
        <div className="navbar-separator"></div>
        <Link to="/cart" className="navbar-icon">
          <img src={cartLogo} alt="Cart" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
