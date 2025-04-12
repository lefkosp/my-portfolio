import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import ExperienceItem from "./ExperienceItem";
import "./Experience.css";

export default function Experience() {
  useEffect(() => {
    Aos.init({ duration: 400, easing: "ease-in-out", once: "true" });
  }, []);

  return (
    <section id="section-experience" className="section section-experience">
      <h2 className="section-headings" data-aos="fade-up">
        Experience
      </h2>
      <div className="experience-section">
        <ExperienceItem
          company="Medlo"
          position="Frontend Developer"
          period="April 2022 - Present"
          description="Leading frontend development initiatives and collaborating with cross-functional teams to deliver high-quality web applications using modern technologies and best practices."
          responsibilities={[
            "Spearheaded the development of a new internal staffing module using Angular and TypeScript, enhancing team resource management",
            "Collaborated closely with the Node.js backend team to ensure seamless API integration and optimal performance",
            "Implemented mobile-first design principles to improve platform accessibility and user experience",
            "Utilized modern frontend technologies and best practices to deliver responsive and efficient solutions",
          ]}
          data-aos="fade-up"
          data-aos-delay="100"
        />

        <ExperienceItem
          company="PrimoThePlug"
          position="Owner & Digital Strategist"
          period="September 2018 - September 2021"
          description="Founded and managed an e-commerce business, overseeing all aspects of operations from digital presence to business development and strategic partnerships."
          responsibilities={[
            "Established and operated a successful e-commerce platform with daily inventory and pricing management",
            "Managed three social media channels with consistent daily content creation and community engagement",
            "Implemented effective social media marketing strategies that led to recognition from major industry figures",
            "Secured and managed strategic partnership opportunities, including a merger proposal from a prominent industry figure",
          ]}
          data-aos="fade-up"
          data-aos-delay="200"
        />
      </div>
    </section>
  );
}
