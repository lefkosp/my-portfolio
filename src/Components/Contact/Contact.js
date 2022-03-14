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
            As I am on the lookout to break into the intustry with my first job,
            please feel free to contact me either for work or to say hi and have
            a chat. <br></br> It would be my pleasure to talk to you.
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
