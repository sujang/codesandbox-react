import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="姜" />
    <h2>あああ editing to see some magic happen {"\u2726"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
