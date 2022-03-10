import React from "react";
import "./Nav.css";
import logo from "../../Assets/logo-white.png";

export default function Nav() {
  return (
    <nav className="nav">
      <a href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <ul className="nav--list">
        <li className="nav--list-item">
          <a href="#section-about" className="nav--list-link">
            About
          </a>
        </li>
        <li className="nav--list-item">
          <a href="#section-work" className="nav--list-link">
            Work
          </a>
        </li>
        <li className="nav--list-item">
          <a href="#section-contact" className="nav--list-link">
            Contact
          </a>
        </li>
        <li className="nav--list-item">
          <a href="/" className="nav--list-link nav--list-btn">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
