import React from "react";

import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <Main />
      <About />
      <Work />
      <Contact />
    </>
  );
}
