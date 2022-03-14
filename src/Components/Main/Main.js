import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Main.css";

export default function Main() {
  useEffect(() => {
    Aos.init({ duration: 400, easing: "ease-in-out", once:"true" });
  }, []);

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

    const handleMouseMove = (e) => {
      let x = e.pageX;
      let y = e.pageY;

      img[0].style.transform =
        "translate(" + x / 100 + "px, " + y / 100 + "px)";
      img[7].style.transform =
        "translate(" + x / 100 + "px, " + y / 100 + "px) rotate(350deg)";
      img[1].style.transform =
        "translate(" + (x / 100) * 1.5 + "px, " + y / 70 + "px)";
      img[2].style.transform =
        "translate(" + (x / 100) * 3 + "px, " + y / 70 + "px)";
      img[3].style.transform =
        "translate(" + (x / 100) * 4.5 + "px, " + y / 70 + "px)";
      img[4].style.transform =
        "translate(" + (x / 100) * 6 + "px, " + y / 70 + "px)";
      img[5].style.transform =
        "translate(" + (x / 100) * 7.5 + "px, " + y / 70 + "px)";
      img[6].style.transform =
        "translate(" + (x / 100) * 9 + "px, " + y / 70 + "px)";
    };

    document.body.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="main-container" id="home">
      <main className="main container">
        <h1
          className="heading-primary vertical hi"
          // style={{ transform: "rotate(180deg)" }}
          // data-aos="slide-right"
        >
          Hi!
        </h1>
        <div>
          <p className="subheading" data-aos="fade-down">
            My name is
          </p>
          <h1 className="heading-primary" data-aos="fade-down">
            Lefkos Papapetrou.
          </h1>
          <h2 className="heading-secondary" data-aos="fade-down">
            I make stuff for the web.
          </h2>
          <p className="description" data-aos="fade-down">
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
        <div className="img-layer"></div>
      </div>
    </div>
  );
}
