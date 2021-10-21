import React from "react";
import ReactDOM from "react-dom";
import ComponentA from "app_a/ComponentA";
import ComponentB from "app_b/ComponentB";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: shell</div>
    <ComponentA />
    <ComponentB />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
