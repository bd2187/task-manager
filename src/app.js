import React from "react";
import { render } from "react-dom";
import "./styles/normalize.css";

const App = function() {
    return <h1>hello world</h1>;
};

render(<App />, document.getElementById("root"));
