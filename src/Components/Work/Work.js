import React from "react";

import Project from "./Project";
import "./Work.css";

import forkify from "../../Assets/Projects/forkify.jpg";
import mapty from "../../Assets/Projects/mapty.jpg";
import omnifood from "../../Assets/Projects/omnifood.jpg";

export default function Work() {
  return (
    <section id="section-work" className="section">
      <h2 className="section-headings">Work</h2>
      <div className="project-section">
        <Project
          img={omnifood}
          title="Omnifood"
          description="A landing page for a food delivery service with a subscription. Explaining how it works, showing meal examples, testimonials and more."
          techStack={["HTML", "CSS"]}
          link="https://omnifood-lefkos.netlify.app/"
          srcLink="https://github.com/lefkosp/omnifood"
          // note={{ status: "yes", msg: "" }}
          flip={false}
        />
        <Project
          img={mapty}
          title="Mapty"
          description="A workout tracker app on the web. You can choose between running and cycling and you can also set the distance, duration and other properties"
          techStack={["HTML", "CSS", "JavaScript"]}
          link="https://mapty-lefkos.netlify.app/"
          srcLink="https://github.com/lefkosp/mapty"
          // note={{ status: "yes", msg: "" }}
          flip={true}
        />
        <Project
          img={forkify}
          title="Forkify"
          description="A recipe app that let's you search what you are looking for, upload your own, bookmark your favorites and change the servings to your liking."
          techStack={["HTML", "CSS", "JavaScript"]}
          link="https://forkify-lefkos.netlify.app/"
          srcLink="https://github.com/lefkosp/forkify"
          // note={{ status: "yes", msg: "" }}
          flip={false}
        />
      </div>
    </section>
  );
}
