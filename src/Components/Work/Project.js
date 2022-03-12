import React from "react";

import "./Project.css";

export default function Project(props) {
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
            props.flip ? "right info-container" : "left info-container"
          }
        >
          <h5 className="subheading">Featured Project</h5>
          <h2 className="heading-secondary">{props.title}</h2>
          <div
            className={`${
              props.flip ? "gradient-toleft" : "gradient-toright"
            } desc-container`}
          >
            <p className="project-description">{props.description}</p>
          </div>
          <ul
            className={`${
              props.flip ? "align--right-absolute" : ""
            } tech-stack-list`}
          >
            {techStackElements}
          </ul>
        </div>
        <div
          className={props.flip ? "left container-img" : "right container-img"}
        >
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <img
              src={props.img}
              className="work-img"
              alt="project image screenshot"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
