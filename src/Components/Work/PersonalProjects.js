import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Project from "./Project";
import "./PersonalProjects.css";

import forkify from "../../Assets/Projects/forkify.jpg";
import mapty from "../../Assets/Projects/mapty.jpg";
import omnifood from "../../Assets/Projects/omnifood.jpg";
import tweetprenuer from "../../Assets/Projects/tweetprenuer.png";

export default function PersonalProjects() {
  useEffect(() => {
    Aos.init({ duration: 400, easing: "ease-in-out", once: "true" });
  }, []);
  return (
    <section id="section-work" className="section">
      <h2 className="section-headings" data-aos="fade-up">
        Projects
      </h2>
      <div className="project-section">
        <Project
          img={tweetprenuer}
          title="Tweetprenuer"
          subheading="AI powered app"
          description="An AI powered app that based on your recent tweets, it generates a business idea along with a business card based on it."
          techStack={["Angular, Node.js, TypeScript"]}
          link="https://tweetprenuer.net"
          flip={true}
        />
        <Project
          img={omnifood}
          title="Omnifood"
          subheading="Landing page"
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
          subheading="Workout tracker"
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
          subheading="Recipe app"
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
