import ReactDOM from "react-dom";

import Logo from "../assets/logo.svg";

ReactDOM.render(
  <div style={{ textAlign: "center" }}>
    <img src={Logo}/>
    <h1>Hello, world!</h1>
  </div>,
  document.getElementById("app"),
);
