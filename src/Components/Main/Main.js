import React, { useState, useEffect } from "react";
import "./Main.css";

export default function Main() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let container = document.querySelector(".img-container");
    let img = document.querySelectorAll(".img-layer");

    container.addEventListener("mousemove", function (e) {
      let x = e.pageX;
      let y = e.pageY;

      img[0].style.transform =
        "translate(" + x / 100 + "px, " + y / 100 + "px)";
      img[1].style.transform =
        "translate(" + (x / 100) * 2 + "px, " + y / 100 + "px)";
      img[2].style.transform =
        "translate(" + (x / 100) * 4 + "px, " + y / 100 + "px)";
      img[3].style.transform =
        "translate(" + (x / 100) * 6 + "px, " + y / 100 + "px)";
      img[4].style.transform =
        "translate(" + (x / 100) * 8 + "px, " + y / 100 + "px)";
      img[5].style.transform =
        "translate(" + (x / 100) * 10 + "px, " + y / 100 + "px)";
      img[6].style.transform =
        "translate(" + (x / 100) * 12 + "px, " + y / 100 + "px)";
    });
  }, []);

  return (
    <div className="main-container" id="home">
      <main className="main container">
        <h1 className="heading-primary vertical hi">Hi!</h1>
        <div>
          <p className="subheading">My name is</p>
          <h1 className="heading-primary">Lefkos Papapetrou.</h1>
          <h2 className="heading-secondary">I make stuff for the web.</h2>
          <p className="description">
            I am a web developer specialized in building the front-end.
          </p>
        </div>
      </main>
      <div
        className="img-container"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      >
        <div className="img-layer"></div>
        <div className="img-layer"></div>
        <div className="img-layer"></div>
        <div className="img-layer"></div>
        <div className="img-layer"></div>
        <div className="img-layer"></div>
        <div className="img-layer"></div>
      </div>
    </div>
  );
}
