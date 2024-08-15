import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Create a CSS file for styling

const Navbar = () => {
    const location = useLocation();
    
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                </li>
                <li className={`navbar-item ${location.pathname === '/instructions' ? 'active' : ''}`}>
                    <Link to="/instructions">Instructions</Link>
                </li>
                <li className={`navbar-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
