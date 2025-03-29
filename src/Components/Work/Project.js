import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./Project.css";

export default function Project(props) {
  useEffect(() => {
    Aos.init({ duration: 400, easing: "ease-in-out", once: "true" });
  }, []);
  const techStackElements = props.techStack.map((tech, index) => {
    return (
      <li key={index} className="tech-stack-list-item">
        {tech}
      </li>
    );
  });

  return (
    <div className="work-container">
      <div className={`${props.flip ? "align--right" : ""} project-container`}>
        <div
          className={
            props.flip ? "right-text info-container" : "left info-container"
          }
        >
          <h5 className="subheading" data-aos="fade-up">
            Featured Project
          </h5>
          <h2
            className="heading-secondary"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            {props.title}
          </h2>
          <div
            data-aos-delay="100"
            data-aos="fade-up"
            className={`${
              props.flip ? "gradient-toleft" : "gradient-toright"
            } desc-container`}
          >
            <p className="project-description">{props.description}</p>
          </div>
          <ul
            data-aos-delay="150"
            data-aos="fade-up"
            className={`${
              props.flip ? "align--right-absolute" : ""
            } tech-stack-list`}
          >
            {techStackElements}
          </ul>
        </div>
        <div
          data-aos="fade-up"
          className={
            props.flip ? "left-image container-img" : "right container-img"
          }
        >
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            {props.srcLink && (
              <a
                href={props.srcLink}
                target="_blank"
                rel="noreferrer"
                className="project-src-link"
                id="src-link"
              >
                Source code
              </a>
            )}
            <img
              src={props.img}
              className="work-img"
              alt="project screenshot"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
