import React from "react";

import "./About.css";

export default function About() {
  return (
    <div id="section-about" className="section">
      <div className="container-about">
        <h2 className="section-headings">About me</h2>
        <div className="container-about-me">
          <p className="about-me">
            Hello, my name is Lefkos and I really enjoy creating things on the
            internet. Ever since I can remember I have been fascinated by the
            rapidly growing world of technology and it was always a dream of
            mine to make myself part of it. I love learning about new and
            advanced technologies and also applying critical thinking and
            problem-solving skills to overcome modern challenges.
          </p>
          <ul className="tech-stack">
            <span>My tech stack: &darr;</span>
            <li className="tech-stack-item">HTML</li>
            <li className="tech-stack-item">CSS</li>
            <li className="tech-stack-item">Sass</li>
            <li className="tech-stack-item">TailwindCSS</li>
            <li className="tech-stack-item">Vanilla JavaScript</li>
            <li className="tech-stack-item">React.JS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
