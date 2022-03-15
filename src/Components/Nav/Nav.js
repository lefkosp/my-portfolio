import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Nav.css";
import logo from "../../Assets/logo-white.png";
import resume from "../../Assets/CV Lefkos_Papapetrou.pdf";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 400, easing: "ease-in-out", once: "true" });
  }, []);

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

  const links = document.querySelectorAll(".nav--list-link");

  const handleClick = (e) => {
    links.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
    handleMobileNav();
  };

  function handleMobileNav() {
    setOpenNav((openNav) => !openNav);
  }

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
      <a href="#home" data-aos="fade-down">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <ul className={`${openNav ? "show-nav" : "hide-nav"} nav--list`}>
        <li className="nav--list-item">
          {/* <a onClick={handleMobileNav} className="close-nav-btn">
            <ion-icon name="close-outline" className="nav-btn-icon"></ion-icon>
          </a> */}
        </li>
        <li
          className="nav--list-item"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <a
            href="#section-about"
            onClick={handleClick}
            className="nav--list-link"
          >
            About
          </a>
        </li>
        <li
          className="nav--list-item"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <a
            href="#section-work"
            onClick={handleClick}
            className="nav--list-link"
          >
            Work
          </a>
        </li>
        <li
          className="nav--list-item"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <a
            href="#section-contact"
            onClick={handleClick}
            className="nav--list-link"
          >
            Contact
          </a>
        </li>
        <li
          className="nav--list-item item1"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <a href={resume} download className="nav--list-link nav--list-btn">
            Resume
          </a>
        </li>
        <li
          className="nav--list-item item2"
        >
          <a href={resume} download className="nav--list-link nav--list-btn">
            Resume
          </a>
        </li>
      </ul>
      <div
        onClick={handleMobileNav}
        className="open-nav-btn"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <ion-icon
          name={`${openNav ? "close" : "menu"}-outline`}
          className="nav-btn-icon"
        ></ion-icon>
      </div>
    </nav>
  );
}
