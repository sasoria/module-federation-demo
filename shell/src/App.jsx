import React from "react";
import ReactDOM from "react-dom";
import ComponentA from "app_a/ComponentA";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: shell</div>
    <ComponentA />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
