import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="main-nav-content">
      <nav className="navbar">
        <div className="navbar-container">
          <img src="/assets/psit.png" alt="logo" />
          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/about" className="navbar-link">About</Link>
            <Link to="/services" className="navbar-link">Services</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
            <Link to="/teams" className="navbar-link">Team</Link>
          </div>
          <button className="navbar-toggle" onClick={toggleNavbar}>
            <span className="navbar-toggle-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
