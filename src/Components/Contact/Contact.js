import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 400, easing: "ease-in-out", once: "true" });
  }, []);
  return (
    <section id="section-contact" className="section">
      <div className="contact-section">
        <h2 className="section-headings" data-aos="fade-up">
          Contact
        </h2>
        <div className="contact-container">
          <p className="contact-description" data-aos="fade-up">
            Whether you're interested in discussing a potential project, seeking
            collaboration, or just want to say hi, I'd love to hear from you.
            <br></br>
            Feel free to reach out!
          </p>
          <div className="nav--list-btn btn-div" data-aos="fade-up">
            <a href="mailto: lefkoss@hotmail.com" className="contact-link">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
