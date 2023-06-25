import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {


  return (
    <div className="navbar">
    <Link to="/" className="navbar-link">Home</Link>
    <Link to="/article" className="navbar-link">Articles</Link>
  </div>
  );
}

export default Navbar;
