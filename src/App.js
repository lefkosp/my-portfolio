import React from "react";

import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import PersonalProjects from "./Components/Work/PersonalProjects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Experience/Experience";

export default function App() {
  return (
    <>
      <Nav />
      <Main />
      <About />
      <Experience />
      <PersonalProjects />
      <Contact />
      <Footer />
    </>
  );
}
