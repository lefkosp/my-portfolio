import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./About.css";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 400, easing: "ease-in-out", once: "true" });
  }, []);
  useEffect(() => {
    let techBox = document.querySelector(".tech-stack");

    document.body.addEventListener("mousemove", function (e) {
      let x = e.pageX / 70;
      let y = e.pageY / 70;

      techBox.style.boxShadow =
        x +
        "px " +
        y +
        "px 10px #010110, -" +
        x +
        "px -" +
        y +
        "px 10px #01032a";
    });
  }, []);

  return (
    <div id="section-about" className="section">
      <div className="container-about">
        <h2 className="section-headings" data-aos="fade-up">
          About me
        </h2>
        <div className="container-about-me" data-aos="fade-up">
          <p className="about-me">
            Hello, my name is Lefkos and I really enjoy creating things on the
            internet. Ever since I can remember I have been fascinated by the
            rapidly growing world of technology and it was always a dream of
            mine to make myself part of it. I love learning about new and
            advanced technologies and also applying critical thinking and
            problem-solving skills to overcome modern challenges.
          </p>
        </div>
        <ul
          className="tech-stack"
          style={{
            boxShadow: `26px 26px 0px #010110, -26px -26px 0px #01032a`,
          }}
          data-aos="zoom-in"
        >
          <span data-aos="zoom-in">The tech I use: &darr;</span>
          <li className="tech-stack-item" data-aos="zoom-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-html5"
              width="38"
              height="38"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            </svg>
            HTML
          </li>
          <li className="tech-stack-item" data-aos="zoom-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-css3"
              width="38"
              height="38"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            </svg>
            CSS
          </li>
          <li className="tech-stack-item" data-aos="zoom-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-sass"
              width="38"
              height="38"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <path d="M12 10.523c2.46 -.826 4.002 -.826 4.002 -2.155c0 -1.366 -1.347 -1.366 -2.735 -1.366c-1.91 0 -3.352 .49 -4.537 1.748c-.848 .902 -1.027 2.449 -.153 3.307c.973 .956 3.206 1.789 2.884 3.493c-.233 1.235 -1.469 1.823 -2.617 1.202c-.782 -.424 -.454 -1.746 .626 -2.512s2.822 -.992 4.1 -.24c.98 .575 1.046 1.724 .434 2.193" />
            </svg>
            Sass
          </li>
          <li className="tech-stack-item" data-aos="zoom-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-tailwind"
              width="38"
              height="38"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
            </svg>
            TailwindCSS
          </li>
          <li className="tech-stack-item" data-aos="zoom-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-javascript"
              width="38"
              height="38"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M7.5 8h3v8l-2 -1" />
              <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
            </svg>
            Vanilla JavaScript
          </li>
          <li className="tech-stack-item" data-aos="zoom-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-react-native"
              width="38"
              height="38"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
              <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
              <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
              <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
              <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
              <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
              <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a0.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
            </svg>
            React.JS
          </li>
          <li className="tech-stack-item" data-aos="zoom-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-react-native"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Angular</title>
              <path d="M9.96 12.648h4.08L12 7.74l-2.04 4.908zM12 0 .828 3.984l1.704 14.772L12 24l9.468-5.244 1.704-14.772L12 0zm6.972 18.312h-2.604l-1.404-3.504H9.036l-1.404 3.504H5.028L12 2.652l6.972 15.66z" />
            </svg>
            Angular
          </li>
        </ul>
      </div>
    </div>
  );
}
