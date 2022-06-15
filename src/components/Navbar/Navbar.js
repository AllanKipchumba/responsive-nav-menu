import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <h3>Logo</h3>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
