import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./Footer.css";

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 400, easing: "ease-in-out", once: "true" });
  }, []);
  let year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-div">
        <p className="footer-description">
          designed and built by <br></br>
          <b>Lefkos Papapetrou</b>
        </p>
        <p className="footer-description-secondary">
          you can find the source code{" "}
          <a
            href="https://github.com/lefkosp/my-portfolio"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            here
          </a>
        </p>
      </div>
      <p className="year">&copy; {year} all right reserved</p>
    </footer>
  );
}
