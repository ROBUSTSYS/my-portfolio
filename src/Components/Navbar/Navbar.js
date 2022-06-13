import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main-navbar">
      <div className="title">
        <h3>Portfolio</h3>
      </div>
      <div className="list">
        <ul>
          <Link to="/" className="link">
            <li>
              <a href="">Home</a>
            </li>
          </Link>
          <Link to="/MySkills" className="link">
            <li>
              <a href="">MySkills</a>
            </li>
          </Link>
          <Link to='/Projects' className="link">
          <li>
            <a href="">Projects</a>
          </li>
          </Link>
          <Link to="/AboutMe" className="link">
            <li>
              <a href="">AboutMe</a>
            </li>
          </Link>
          <Link to="/ContactMe" className="link">
            <li>
              <a href="">ContactMe</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
