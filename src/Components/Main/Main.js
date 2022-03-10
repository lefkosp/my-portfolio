import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <main className="main container">
      <h1 className="heading-primary vertical hi">Hi!</h1>
      <div>
        <p className="subheading">My name is</p>
        <h1 className="heading-primary">Lefkos Papapetrou.</h1>
        <h2 className="heading-secondary">I make stuff for the web.</h2>
        <p className="description">
          I am a web developer specializing in the front-end and building
          consumer-centric products.
        </p>
      </div>
    </main>
  );
}
