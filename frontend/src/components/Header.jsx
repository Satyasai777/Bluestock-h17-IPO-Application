import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo_bs.png'; // Adjust the path as needed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Bluestock Logo" className="logo" />
        <span className="brand-name">BLUESTOCK</span>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className={`nav-bar ${menuOpen ? 'active' : ''}`}>
        <a href="#products" className="nav-link">PRODUCTS</a>
        <a href="#pricing" className="nav-link">PRICING</a>
        <a href="#community" className="nav-link">COMMUNITY</a>
        <div className="dropdown">
          <a href="#media" className="nav-link">MEDIA</a>
          <div className="dropdown-content">
            <a href="#media1">Media 1</a>
            <a href="#media2">Media 2</a>
          </div>
        </div>
        <a href="#support" className="nav-link">SUPPORT</a>
      </nav>

      {/* <Link to='/home'>Home Page</Link> */}

      <div className="auth-buttons">
        <Link to="/signin" className="nav-link">Sign In</Link>
        <Link to="/signup" className="signup-btn">Sign Up Now</Link>
        <img
          src="https://www.svgrepo.com/show/352105/grip-vertical.svg"
          alt="grip icon"
          className="icon"
        />
      </div>
    </header>
  );
};

export default Header;
