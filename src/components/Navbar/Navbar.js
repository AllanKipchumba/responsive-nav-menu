import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/navbar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMobile, setIsmobile] = useState(false);

  const handleClick = () => setIsmobile(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <h3>Logo</h3>
        </Link>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li onClick={handleClick}>
            <Link to="/" className="link">
              home
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/signup" className="link">
              Sign Up
            </Link>
          </li>
        </ul>

        <button
          className="mobile-menu-icon"
          onClick={() => setIsmobile(!isMobile)}
        >
          {isMobile ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
