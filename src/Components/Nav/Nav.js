import React, { useEffect } from "react";
import "./Nav.css";
import logo from "../../Assets/logo-white.png";

export default function Nav() {
  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      if (window.oldScroll > window.scrollY) {
        document.querySelector(".nav").classList.remove("move-nav");
        document.querySelector(".nav").classList.add("secondary-nav");
      }
      if (!(window.oldScroll > window.scrollY)) {
        document.querySelector(".nav").classList.add("move-nav");
        document.querySelector(".nav").classList.remove("secondary-nav");
      }
      if (!window.scrollY) {
        document.querySelector(".nav").classList.remove("move-nav");
        document.querySelector(".nav").classList.remove("secondary-nav");
      }
      window.oldScroll = window.scrollY;
    });
  }, []);

  return (
    <nav className="nav">
      <a href="#home">
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
