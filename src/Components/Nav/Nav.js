import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "../../Assets/logo-white.png";
import resume from "../../Assets/CV Lefkos_Papapetrou.pdf";

export default function Nav() {
  const [navBehavior, setNavBehavior] = useState({
    scrollDown: false,
    scrollUp: false,
    noScroll: true,
  });

  useEffect(() => {
    const changeNavStyle = function () {
      if (window.oldScroll > window.scrollY) {
        setNavBehavior(() => {
          return {
            scrollDown: false,
            scrollUp: true,
            noScroll: false,
          };
        });
      } else if (window.oldScroll < window.scrollY) {
        setNavBehavior(() => {
          return {
            scrollUp: false,
            scrollDown: true,
            noScroll: false,
          };
        });
      }
      if (window.scrollY === 0) {
        setNavBehavior(() => {
          return {
            scrollDown: false,
            scrollUp: false,
            noScroll: true,
          };
        });
      }

      window.oldScroll = window.scrollY;
    };

    window.addEventListener("scroll", changeNavStyle);
  }, []);

  return (
    <nav
      className={`${
        navBehavior.noScroll
          ? ""
          : `${
              navBehavior.scrollDown
                ? "move-nav"
                : `${navBehavior.scrollUp ? "secondary-nav" : ""}`
            }`
      } nav`}
    >
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
          <a href={resume} download className="nav--list-link nav--list-btn">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
