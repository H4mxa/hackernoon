import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='nav'>
      <Link to='/' className='link'>
        <img className='logo' alt='Hackernoon' src='assets/hn-logo.png' />
      </Link>
      <Link to='/signin' className='link'>
        <button className='btn'>Log in</button>
      </Link>
    </div>
  );
};

export default Navbar;
