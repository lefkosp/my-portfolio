import React from "react";
import "./ExperienceItem.css";

export default function ExperienceItem({
  company,
  position,
  period,
  description,
  responsibilities,
  ...props
}) {
  return (
    <div className="experience-item" {...props}>
      <div className="experience-content">
        <div className="experience-header">
          <h3 className="company-name">{company}</h3>
          <span className="position">{position}</span>
          <span className="period">{period}</span>
        </div>
        <p className="description">{description}</p>
        {responsibilities && (
          <ul className="responsibilities">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
