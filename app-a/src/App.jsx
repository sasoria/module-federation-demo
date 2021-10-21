import React, { Component } from "react";
import ReactDOM from "react-dom";
import ComponentA from "./ComponentA";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: app-a</div>
    <ComponentA />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
