import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

if (window.innerWidth < 1000)
  alert(
    "Please use a bigger device since the website is still under development to be responsive.\n Thank you for understanding!"
  );
