import React from "react";

import "./Footer.css";

export default function Footer() {
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
