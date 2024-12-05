import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";

const App = () => (
  <div className="container">
    <div>Name: base-theme</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
