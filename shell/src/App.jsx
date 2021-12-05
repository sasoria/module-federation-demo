import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const ComponentA = React.lazy(() => import("app_a/ComponentA"));
const ComponentB = React.lazy(() => import("app_b/ComponentB"));

const App = () => (
  <div className="container">
    <div>Name: shell</div>
    <React.Suspense fallback="Loading...">
      <ComponentA />
    </React.Suspense>
    <React.Suspense fallback="Loading...">
      <ComponentB />
    </React.Suspense>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
