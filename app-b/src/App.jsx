import React from "react";
import ReactDOM from "react-dom";
import ComponentB from "./ComponentB";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: app-b</div>
    <ComponentB />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
