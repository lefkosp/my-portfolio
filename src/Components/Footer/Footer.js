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
          designed and built by <br></br>Lefkos Papapetrou
        </p>
      </div>
      <p className="year">&copy; {year} all right reserved</p>
    </footer>
  );
}
